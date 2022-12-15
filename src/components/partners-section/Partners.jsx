import React from 'react';
import './Partners-style.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Autoplay } from 'swiper';
import "swiper/css";
import logo from '../../assets/partners/1.png';
import logoTwo from '../../assets/partners/2.png';
import logoThree from '../../assets/partners/3.png';
import "swiper/css/autoplay";

const Partners = () => {
    
    SwiperCore.use([Autoplay])

    return (
        <div className='Partners'>
            <Swiper
                slidesPerView={5}
                // autoplay={true}
                onAutoplay

                autoplay={{
                    delay: 1000,
                    // disableOnInteraction: false,
                }}
                // keyboard={{
                //     enabled: true,
                // }}
                spaceBetween={30}
                slidesPerGroup={1}
                loop={true}
                loopFillGroupWithBlank={true}
                // modules={[Autoplay, Keyboard]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <a href='#' className="Partners__img">
                        <img src={logo} alt="" />
                    </a>
                </SwiperSlide>
                <SwiperSlide>
                    <a href='#' className="Partners__img">
                        <img src={logoTwo} alt="" />
                    </a>
                </SwiperSlide>
                <SwiperSlide>
                    <a href='#' className="Partners__img">
                        <img src={logoThree} alt="" />
                    </a>
                </SwiperSlide>
                <SwiperSlide>
                    <a href='#' className="Partners__img">
                        <img src={logoTwo} alt="" />
                    </a>
                </SwiperSlide>
                <SwiperSlide>
                    <a href='#' className="Partners__img">
                        <img src={logoThree} alt="" />
                    </a>
                </SwiperSlide>
        </Swiper>
        </div>
    );
};

export default Partners;