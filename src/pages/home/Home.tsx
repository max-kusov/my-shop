import React, { FC } from 'react'
import { Categories, Sort, Item } from '../../components'

import style from './Home.module.scss'

import Slider from '../../components/slider/Slider'

import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import MyLoader from '../../components/item/MyLoader';
import Paginate from '../../components/paginate/Paginate';

import axios from 'axios';
import qs from 'qs';

import { setCategory, setSort, setPageCount, setFilters, selectFilter } from '../../store/slices/filterSlice';
import { setProducts, fetchProducts, selectProducts } from '../../store/slices/productSlice';

// import { ShowCart } from '../../App';
import { AnyArray } from 'immer/dist/internal';

const categoriesArray = ['Все', 'Футболки', 'Худи', 'Штаны']
const sortItems = [
  { name: 'популярности', type: 'popular' },
  { name: 'цене', type: 'price' }
]


const Home: FC = () => {
  const dispatch = useDispatch<any>()
  const navigate = useNavigate()
  const isSearch = React.useRef(false)
  const isMounted = React.useRef(false)

  const { category, sortBy, pageCount, searchValue } = useSelector(selectFilter)
  const { items, status } = useSelector(selectProducts)


  const getProducts = async () => {
    // axios.get(`/products?_page=${pageCount}&_limit=4&${category > 0 ? `category=${category}` : ``}&_sort=${sortBy}&_order=asc`)
    //   .then(({ data }) => {
    //     dispatch(setProducts(data))
    //     dispatch(setLoaded(true))
    //   })
    //   .catch((err) => {
    //     dispatch(setLoaded(false))
    //   })
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

  // клик дабавления в корзину
  //onAddItems={addToCart} !!!!!!!!!!!!!!

  // const addToCart = (obj: any): void => {
  //   dispatch(addItemsToCart(obj))
  // }
  const Loader = Array(4).fill(0).map((_, i) => <MyLoader key={i} />)

  const onSelectCategy = React.useCallback((i: any) => {
    dispatch(setCategory(i))
  }, [])
  const onSelectSort = React.useCallback((i: any) => {
    dispatch(setSort(i))
  }, [])

  const onChangePage = React.useCallback((num: any) => {
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
              items={categoriesArray}
              onClickItem={onSelectCategy} />
            <Sort
              activeItem={sortBy}
              items={sortItems}
              onSelectSort={onSelectSort} />
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




/// старый вариант
  // React.useEffect(() => {
  //   dispatch<any>(fetchProducts(sortBy, category, currentPage))
  // }, [category, sortBy, currentPage])

  // баг при выборе всех пицц и перезагрузке