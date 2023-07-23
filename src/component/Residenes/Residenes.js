import React from "react";
import { Swiper, SwiperSlide,useSwiper } from 'swiper/react';
import "swiper/css"
import "./Residenes.css"
import slider from "../../slider.json" 

export const SliderSetting ={
    slidesPerView: 1,
    spaceBetween :50,
    breakpoints :{
        480: {
            slidesPerView : 1
        },
        600: {
            slidesPerView : 2
        },
        750:{
            slidesPerView : 3
        },
        1100: {
            slidesPerView: 4
        }
    }
}

const SliderButtons = () =>{
    const swiper = useSwiper();
    return(
        <div className="butSlid">
            <button onClick={()=> swiper.slidePrev()}>&lt;</button>
            <button onClick={()=> swiper.slideNext()}>&gt;</button>
        </div>
    )
}

const Residencies = ()=>{
    return(
        <div className ="residencies" id="residencies">
            <div className ="container">
                <h2 className = "orangeText">Best Choices</h2>
                <h1 className="blueText">Popular Residencies</h1>
                <Swiper className="swiper" {...SliderSetting}>
                    <SliderButtons />
                    {
                        slider.map((card,i)=>(
                            <SwiperSlide key={i}>
                                <div className="branch">
                                    <img src= {card.image} alt=""/>
                                    <h3>$<span>{card.price}</span></h3>
                                    <h1>{card.name}</h1>
                                    <p className="parg">{card.detail}</p>
                                </div>
                            </SwiperSlide>
                        ))
                    }
                </Swiper>
            </div>
        </div>
    )
}
export default Residencies