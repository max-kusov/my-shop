import React, { FC } from 'react'
import Categories from '../../components/categories/Categories'
import Sort from '../../components/ui/Sort/Sort'
import Item from '../../components/item/Item'


import style from './Home.module.scss'

import Slider from '../../components/slider/Slider'

import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import MyLoader from '../../components/item/MyLoader';
import Paginate from '../../components/paginate/Paginate';

import qs from 'qs';

import { setCategory, setSort, setPageCount, setFilters, selectFilter } from '../../store/slices/filterSlice';
import { fetchProducts, selectProducts } from '../../store/slices/productSlice';


const Home: FC = () => {
  const dispatch = useDispatch<any>()
  const navigate = useNavigate()
  const isSearch = React.useRef(false)
  const isMounted = React.useRef(false)

  const { category, sortBy, pageCount, searchValue } = useSelector(selectFilter)
  const { items, status } = useSelector(selectProducts)

  const getProducts = async () => {
    dispatch(fetchProducts(
      {
        pageCount,
        category,
        sortBy
      }
    ))
  }

  // при изменении параметров
  React.useEffect(() => {
    if (isMounted.current) {
      const queryString = qs.stringify({
        category,
        sortBy,
        pageCount
      })
      navigate(`?${queryString}`)
    }
    isMounted.current = true
  }, [category, sortBy, pageCount])
  // при изменении параметров, передаем в Redux
  React.useEffect(() => {
    if (window.location.search) {
      const params = qs.parse(window.location.search.substring(1))
      dispatch(
        setFilters({
          ...params
        })
      )
      isSearch.current = true
    }
  }, [])
  //  Запрос продуктов
  React.useEffect(() => {
    window.scrollTo(0, 0)
    if (!isSearch.current) {
      getProducts()
    }
    isSearch.current = false
  }, [category, sortBy, pageCount])

  const productsMap = items.filter((obj: any) => {
    if (obj.name.toLowerCase().includes(searchValue.toLowerCase())) {
      return true
    }
    return false
  }).map((product: any) => <Item key={product.id} {...product} />)

  const Loader = Array(4).fill(0).map((_, i) => <MyLoader key={i} />)

  const onSelectCategy = React.useCallback((i: number) => {
    dispatch(setCategory(i))
    dispatch(setPageCount(1))
  }, [])

  const onChangePage = React.useCallback((num: number) => {
    dispatch(setPageCount(num))
  }, [])

  return (
    <>
      <Slider />
      <div className='container'>
        <div className={style.content}>
          <div className={style.content__top}>
            <Categories
              activeCategory={category}
              onClickItem={onSelectCategy} />
            <Sort />
          </div>
          <div className={style.content__wrapper}>
            {status === 'error' ? <div className={style.error}>
              <h1>Произошла ошибка 🥺</h1>
              <p>Не удалось получить товар</p>
            </div> :
              <div className={style.content__list}>
                {status !== 'loading'
                  ? productsMap
                  : Loader
                }
              </div>}

          </div>

        </div>
        <Paginate value={pageCount} onChangePage={onChangePage} />
      </div>
    </>
  )
}

export default Home

// исправить все импорты
// папки с заглавной буквы
// заменить все файлы в папках на индекс?
// .root {}

  // баг при выборе всех пицц и перезагрузке