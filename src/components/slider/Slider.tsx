import React, { FC } from 'react'
import Carousel from 'react-bootstrap/Carousel'
import 'bootstrap/dist/css/bootstrap.min.css';

import img1 from '../../assets/slider-img/12.jpg'
import img2 from '../../assets/slider-img/14.jpg'
import img3 from '../../assets/slider-img/15.jpg'

const Slider: FC = () => {
  return (
    <Carousel className="mb-5">
      <Carousel.Item>
        <img style={{ boxShadow: "0 0 8px 8px white inset" }}
          className="d-block w-100"
          src={img3}
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={img1}
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={img2}
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>
  )
}

export default Slider