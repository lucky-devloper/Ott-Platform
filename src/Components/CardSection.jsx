import React from 'react'
import Cards from './Cards'
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function CardSection({movie}) {
    const settings = {
        className: "center",
        infinite: true,
        centerPadding: "60px",
        slidesToShow: 5,
        swipeToSlide: true,
        afterChange: function (index) {
            console.log(
                `Slider Changed to: ${index + 1}, background: #222; color: #bada55`
            );
        }
    };
    // console.log(movie);
    
    return (
        <div className='w-[100%] h-[450px] p-2'>
            <Slider {...settings}>
                {movie?.map((detail, index)=>{
                    return <Cards key={index} moviedel = {detail}/>
                })}
            </Slider>
        </div>
    )
}

export default CardSection