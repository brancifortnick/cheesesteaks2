import React, { useState } from 'react';
const ImageScroll = ({ images }) => {
    const [current, setCurrent] = useState(0);
    const length = images.length;
    console.log(images, "imaegs from image scroll")
    const nextSlide = () => {
        setCurrent(current === length - 1 ? 0 : current + 1);
    }
    const prevSlide = () => {
        setCurrent(current === 0 ? length - 1 : current - 1);
    }
    if (!Array.isArray(images) || images.length <= 0) {
        return null;
    }
    return (
        <section className="slider">
            <i className="fas fa-chevron-left" onClick={prevSlide}></i>
            <i className="fas fa-chevron-right" onClick={nextSlide}></i>
            {images.map((image, index) => {
                return (
                    <div className={index === current ? 'slide active' : 'slide'} key={index}>
                        {index === current && (
                            <img src={image.url} alt='_blank' className='image' >{image.comments}</img>
                        )}
                    </div>
                )
            })}
        </section>
    )
}
export default ImageScroll;
