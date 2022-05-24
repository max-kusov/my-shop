import React from "react"
import ContentLoader from "react-content-loader"
import style from './Item.module.scss'


const MyLoader = () => (
  <div className={style.item}>
    <ContentLoader
      speed={.9}
      width={200}
      height={366}
      viewBox="0 0 200 366"
      backgroundColor="#383838"
      foregroundColor="#757575"
    >
      <rect x="0" y="0" rx="20" ry="20" width="200" height="200" />
      <rect x="0" y="213" rx="7" ry="7" width="140" height="20" />
      <rect x="0" y="240" rx="5" ry="5" width="115" height="14" />
      <rect x="0" y="260" rx="10" ry="10" width="200" height="50" />
      <rect x="0" y="325" rx="10" ry="10" width="45" height="30" />
      <rect x="145" y="320" rx="32" ry="32" width="54" height="44" />
    </ContentLoader>
  </div>
)

export default MyLoader