import React, { useRef } from 'react';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';



// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

interface NewsProps { }

const News: React.FC<NewsProps> = () => {
  const progressCircle = useRef<HTMLDivElement | null>(null);
  const progressContent = useRef<HTMLSpanElement | null>(null);

  const onAutoplayTimeLeft = (s: any, time: any, _progress: any) => {

    if (progressContent.current) {
      progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
    }
  };

  return (
    <>
      <div className="container mx-auto">
        <p className='text-2xl mb-6'>In the Pre<span className='border-b border-b-red-500'>ss</span></p>
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
          onAutoplayTimeLeft={onAutoplayTimeLeft}
          className="mySwiper"
        >
          <SwiperSlide>
            <div className='flex flex-wrap items-center justify-center'>
              <div className='flex items-center justify-center p-24 bg-gray-100'>
                <img src="https://www.boat-lifestyle.com/cdn/shop/files/Business_World_231x.png?v=1705038093" alt="" />
              </div>

             
            </div>
          </SwiperSlide>
          <SwiperSlide>
          <div className='flex flex-wrap items-center justify-center'>
              <div className='flex items-center justify-center p-20 bg-gray-100'>
                <img src="https://www.boat-lifestyle.com/cdn/shop/files/TOI_1_231x.png?v=1705555311" alt="" />
              </div>

             </div>
          </SwiperSlide>
          <SwiperSlide>
          <div className='flex flex-wrap items-center justify-center'>
              <div className='flex items-center justify-center p-24 bg-gray-100'>
                <img src="https://www.boat-lifestyle.com/cdn/shop/files/Fashion_Network_231x.png?v=1705038134" alt="" />
              </div>

           
            </div>
          </SwiperSlide>
          <SwiperSlide>
          <div className='flex flex-wrap items-center justify-center'>
              <div className='flex items-center justify-center p-24 bg-gray-100'>
                <img src="https://www.boat-lifestyle.com/cdn/shop/files/Business_Standard_231x.png?v=1705038171" alt="" />
              </div>

            
            </div>
          </SwiperSlide>

          <div className="autoplay-progress" slot="container-end">
            {/* <svg viewBox="0 0 48 48" ref={progressCircle}>
            <circle cx="24" cy="24" r="20"></circle>
          </svg> */}
            <span ref={progressContent}></span>
          </div>
        </Swiper>
      </div>
    </>
  );
};

export default News;
