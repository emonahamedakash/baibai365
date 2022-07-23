import React from 'react'
import { Carousel } from 'react-bootstrap'

export default function Slider() {
    const slideDetails = [
                            {
                                imgsrc:" https://icms-image.slatic.net/images/ims-web/fce658f5-3298-4625-a254-7f3b5417bc8d.jpg",
                                imgalt: "First slide"
                            },
                            {
                                imgsrc:"https://icms-image.slatic.net/images/ims-web/9f071684-2f65-4df2-bb93-d24878835e04.jpg",
                                imgalt:"Second slide"
                            },
                            {
                                imgsrc:"https://icms-image.slatic.net/images/ims-web/da1cbb07-5aee-4586-b8fd-b050417a4567.jpg",
                                imgalt:"Third slide"
                            }
                        ]
  return (
    <div className='slider'>
        <Carousel>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src={slideDetails[0].imgsrc}
                alt={slideDetails[0].imgalt}
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src={slideDetails[1].imgsrc}
                alt={slideDetails[1].imgalt}
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src={slideDetails[2].imgsrc}
                alt={slideDetails[2].imgalt}
                />
            </Carousel.Item>
        </Carousel>
    </div>
  )
}
