import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Scrollbar} from "swiper";
import 'swiper/swiper-bundle.min.css'
import 'swiper/swiper.min.css'

import slideOne from "../../assets/images/about-slide/about-slide-1.svg"
import slideTwo from "../../assets/images/about-slide/about-slide-2.svg"

SwiperCore.use([Scrollbar]);

export const Slider =  () => {
    return (
        <div className="slider">
            <Swiper
                slidesPerView={1}
                scrollbar={{ draggable: true }}
            >
                <SwiperSlide>
                    <div className="swiper-slide">
                        <img
                            className="about__slider-img"
                            src={slideTwo}
                            alt='slideTwo'
                        />
                    </div></SwiperSlide>
                <SwiperSlide>
                    <div className="swiper-slide">
                        <img
                            className="about__slider-img"
                            src={slideOne}
                            alt='slideOne'
                        />
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>

    )
}



