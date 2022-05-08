import React from 'react'
import Carousel from 'react-bootstrap/Carousel'
import 'bootstrap/dist/css/bootstrap.min.css';

import img1 from '../../assets/slider-img/12.jpg'
import img2 from '../../assets/slider-img/14.jpg'
import img3 from '../../assets/slider-img/15.jpg'

const Slider = () => {
  return (
    <Carousel className="mb-5">
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={img1}
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={img2}
          alt="Second slide"
        />
        <Carousel.Caption>
          <h3>ОДЕЖДА МИЛИТАРИ</h3>
          <p>Сделано в России</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={img3}
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>
  )
}

export default Slider