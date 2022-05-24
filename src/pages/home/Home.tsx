import React, { FC } from 'react'
import { Categories, Sort, Item } from '../../components'

import style from './Home.module.scss'

import Slider from '../../components/slider/Slider'

import { setCategory, setSortBy } from '../../store/actions/filters';
import { useDispatch, useSelector } from 'react-redux';
import MyLoader from '../../components/item/MyLoader';
import { fetchProducts } from '../../store/actions/products';


const categoriesArray = ['Футболки', 'Худи', 'Штаны']
const sortItems = [
  { name: 'популярности', type: 'popular' },
  { name: 'цене', type: 'price' }
]

const Home: FC = () => {
  const dispatch = useDispatch()
  const products = useSelector(({ products }: any) => products.items)
  const isLoaded = useSelector(({ products }: any) => products.isLoaded)
  const { category, sortBy } = useSelector(({ filters }: any) => filters)

  React.useEffect(() => {
    dispatch<any>(fetchProducts(sortBy, category))
  }, [category, sortBy])

  const onSelectCategy = React.useCallback((i: any) => {
    dispatch(setCategory(i))
  }, [])

  const onClickItem = React.useCallback((type: string) => {
    dispatch(setSortBy(type))
  }, [])

  return (
    <>
      <Slider />
      <div className='container'>
        <div className={style.content}>
          <div className={style.content__top}>
            <Categories activeCategory={category} onClickItem={onSelectCategy}
              items={categoriesArray} />
            <Sort activeItem={sortBy} items={sortItems} onClickItem={onClickItem} />
          </div>
          <div className={style.content__list}>
            {isLoaded
              ? products.map((product: any) => <Item key={product.id} {...product} />)
              : Array(7).fill(0).map((_, i) => <MyLoader key={i} />)
            }
          </div>
        </div>
      </div>
    </>
  )
}

export default Home