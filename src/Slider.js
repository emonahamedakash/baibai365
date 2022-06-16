import React from 'react'
import { Carousel } from 'react-bootstrap'

export default function Slider() {
  return (
    <div className='slider'>
        <Carousel>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src="https://icms-image.slatic.net/images/ims-web/fce658f5-3298-4625-a254-7f3b5417bc8d.jpg"
                alt="First slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src="https://icms-image.slatic.net/images/ims-web/9f071684-2f65-4df2-bb93-d24878835e04.jpg"
                alt="Second slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src="https://icms-image.slatic.net/images/ims-web/da1cbb07-5aee-4586-b8fd-b050417a4567.jpg"
                alt="Third slide"
                />
            </Carousel.Item>
        </Carousel>
    </div>
  )
}
