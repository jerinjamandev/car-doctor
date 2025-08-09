import React, { useRef, useState } from 'react';
import img1 from '../assets/images/banner/1.jpg'
import img2 from '../assets/images/banner/2.jpg'
import img3 from '../assets/images/banner/3.jpg'
import img4 from '../assets/images/banner/4.jpg'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';


const Banner = () => {
    return (
        <div>

            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <div className="carousel-item relative w-full">
                          <img
                            src={img1}
                            className="w-full h-[600px] object-cover brightness-75" />
                        <div className="absolute left-12 right-5 top-1/3 -translate-y-1/2 transform">
                            <h2 className='font-bold text-white text-7xl '>Affordable <br />
                                Price For Car <br />
                                 Servicing</h2>

                        <h3 className='mt-4 text-white'>There are many variations of passages of  available, but <br />
                             the majority have suffered alteration in some form</h3>

                    
                        <div className='flex items-center gap-4 mt-5'>
                                <button className='btn btn-active'>Discover More</button>
                                 <button className='btn btn-active'>Latest Project</button>
                        </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>

                    <div className="carousel-item relative w-full">
                        <img
                            src={img2}
                            className="w-full h-[600px] object-cover brightness-75" />
                        <div className="absolute left-12 right-5 top-1/3 -translate-y-1/2 transform">
                            <h2 className='font-bold text-white text-7xl '>Affordable <br />
                                Price For Car <br />
                                 Servicing</h2>

                        <h3 className='mt-4 text-white'>There are many variations of passages of  available, but <br />
                             the majority have suffered alteration in some form</h3>

                    
                        <div className='flex items-center gap-4 mt-5'>
                                <button className='btn btn-active'>Discover More</button>
                                 <button className='btn btn-active'>Latest Project</button>
                        </div>
                        </div>
                    </div>

                </SwiperSlide>


                <SwiperSlide>    
                    <div className="carousel-item relative w-full">
                    <img
                        src={img3}
                        className="w-full h-[600px] object-cover brightness-75" />
                    <div className="absolute left-12 right-5 top-1/3 -translate-y-1/2 transform">
                            <h2 className='font-bold text-white text-7xl '>Affordable <br />
                                Price For Car <br />
                                 Servicing</h2>

                        <h3 className='mt-4 text-white'>There are many variations of passages of  available, but <br />
                             the majority have suffered alteration in some form</h3>

                    
                        <div className='flex items-center gap-4 mt-5'>
                                <button className='btn btn-active'>Discover More</button>
                                 <button className='btn btn-active'>Latest Project</button>
                        </div>
                        </div>
                </div></SwiperSlide>

                <SwiperSlide>    
                    <div className="carousel-item relative w-full">
                    <img
                        src={img4}
                        className="w-full h-[600px] object-cover brightness-75" />
                <div className="absolute left-12 right-5 top-1/3 -translate-y-1/2 transform">
                            <h2 className='font-bold text-white text-7xl '>Affordable <br />
                                Price For Car <br />
                                 Servicing</h2>

                        <h3 className='mt-4 text-white'>There are many variations of passages of  available, but <br />
                             the majority have suffered alteration in some form</h3>

                    
                        <div className='flex items-center gap-4 mt-5'>
                                <button className='btn btn-active'>Discover More</button>
                                 <button className='btn btn-active'>Latest Project</button>
                        </div>
                        </div>
                </div></SwiperSlide>

            </Swiper>
        </div>
    );
};

export default Banner;