import { register } from "swiper/element/bundle";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade } from 'swiper/modules';

register();

import "./slider.css";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/effect-fade";

import img1 from "../../assets/slider-img-1.jpg"
import img2 from "../../assets/slider-img-2.jpeg"
import img3 from "../../assets/slider-img-3.png"
import img4 from "../../assets/slider-img-4.jpg"


const Slider = () => {

    const images = [
        { id: "1", image: img1 },
        { id: "2", image: img2 },
        { id: "3", image: img3 },
        { id: "4", image: img4 },
    ]

    return (
        <Swiper
        modules={[EffectFade]}
        effect="fade"
        slidesPerView={1}
        navigation
        >
            {images.map((item) => (
                <SwiperSlide key={item.id}>
                    <img 
                    src={item.image} 
                    alt="Slider Image" 
                    className= "slider-item"
                    />
                </SwiperSlide>
            ))}
        </Swiper>
    )
}

export default Slider;