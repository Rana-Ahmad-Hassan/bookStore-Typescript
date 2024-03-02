import { useState, useEffect } from 'react'; // Import useState for responsive control
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import { FreeMode, Pagination } from 'swiper/modules';

const Slider = () => {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {

        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768);
        };
        window.addEventListener('resize', handleResize);
        handleResize();

        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const slidesPerView = isMobile ? 1 : 4;

    return (
        <>
            <div className="container mx-auto my-20">
                <div>
                    <p className="text-2xl">Shop By <span className="border-b border-b-red-500 font-bold">LifeStyle</span></p>
                </div>
                <Swiper
                    slidesPerView={slidesPerView}
                    spaceBetween={20}
                    freeMode={true}
                    pagination={{ clickable: true }}
                    modules={[FreeMode, Pagination]}
                    className="mySwiper"
                >
                    <SwiperSlide>

                        <div>

                            <img src="https://www.boat-lifestyle.com/cdn/shop/files/Party_Animal_4.png?v=1685942349" alt="" />

                            <div className='p-5 rounded-e-lg bg-blue-100'>
                            <p className='text-center text-2xl font-bold'>For Fitness</p>
                            </div>

                        </div>

                    </SwiperSlide>

                    <SwiperSlide>

                        <div>

                            <img src="https://www.boat-lifestyle.com/cdn/shop/files/Workaholic_2.png?v=1685083745" alt="" />

                            <div className='p-5 rounded-e-lg bg-blue-100'>
                            <p className='text-center text-2xl font-bold'>For Parties</p>
                            </div>

                        </div>

                    </SwiperSlide>

                    <SwiperSlide>

                        <div>

                            <img src="https://www.boat-lifestyle.com/cdn/shop/files/Audiophile_5.png?v=1696328658" alt="" />

                            <div className='p-5 rounded-e-lg bg-blue-100'>
                            <p className='text-center text-2xl font-bold'>For Work</p>
                            </div>

                        </div>

                    </SwiperSlide>

                    <SwiperSlide>

                        <div>

                            <img src="https://www.boat-lifestyle.com/cdn/shop/files/Workaholic_2.png?v=1685083745" alt="" />

                            <div className='p-5 rounded-e-lg bg-blue-100'>
                            <p className='text-center text-2xl font-bold'>For Audiophiles</p>
                            </div>

                        </div>

                    </SwiperSlide>
                </Swiper>
            </div>
        </>
    );
};

export default Slider;
