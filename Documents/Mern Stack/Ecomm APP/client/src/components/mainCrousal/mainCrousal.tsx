import React, { useState } from 'react';
import { FaGreaterThan, FaLessThan } from 'react-icons/fa';

// Define a type for slide data
type Slide = {
  src: string;
  alt: string;
};

// Mock data for slides
const slides: Slide[] = [
  { src: 'https://www.webx.pk/images/Article/-0007-guide-to-starting-an-online-store-for-mobile-accessori-58-260123063106.png', alt: 'Image 1 Description' },
  { src: 'https://www.variants.pk/images/blogs/9100Online-mobile-accessories_1.webp', alt: 'Image 2 Description' },
  { src: 'https://uestore.in/wp-content/uploads/2023/09/headphones-1-1.png', alt: 'Image 3 Description' },
  // Add more slides as needed
];

const MainCrousal: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const goToPrevSlide = () => {
    setActiveIndex((prevIndex) => (prevIndex === 0 ? slides.length - 1 : prevIndex - 1));
  };

  const goToNextSlide = () => {
    setActiveIndex((prevIndex) => (prevIndex === slides.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <div className="relative w-full ">
      <div className="overflow-hidden">
        <div className="whitespace-nowrap transition-transform duration-1000 ease-in-out">
          {slides.map((slide, index) => (
            <img
              key={index}
              src={slide.src}
              alt={slide.alt}
              className={`w-full h-svh object-cover ${activeIndex === index ? 'block' : 'hidden'}`}
            />
          ))}
        </div>
      </div>

      <div className="absolute z-30 flex justify-center w-full bottom-5 space-x-3">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`h-3 w-3 bg-white rounded-full ${activeIndex === index ? 'bg-blue-700' : 'bg-white'}`}
            onClick={() => setActiveIndex(index)}
            aria-label={`Slide ${index + 1}`}
          />
        ))}
      </div>

      <button
        className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-black text-white bg-opacity-50 hover:bg-opacity-75 p-5 rounded-full "
        onClick={goToPrevSlide}
        aria-label="Previous slide"
      >
       <FaLessThan size={30}/>

      </button>

      <button
        className="absolute right-0 top-1/2 transform -translate-y-1/2 text-white bg-black bg-opacity-50 hover:bg-opacity-75 rounded-full p-5"
        onClick={goToNextSlide}
        aria-label="Next slide"
      >
       <FaGreaterThan size={30}/>

      </button>
    </div>
  );
};

export default MainCrousal;
