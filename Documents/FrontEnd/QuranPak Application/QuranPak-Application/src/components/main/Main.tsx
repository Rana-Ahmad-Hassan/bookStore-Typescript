import React, { FormEvent } from 'react';

// Main background or Home Image
import mainImg from '../../assets/images/bgImg.jpg';



// React Serach Icon
import { CiSearch } from "react-icons/ci";

import { useNavigate } from "react-router-dom"






const Main: React.FC = () => {



  // Object for the styling the main background image
  const divStyle = {
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.0), rgba(0, 0, 0, 0.60)),url(${mainImg})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    backgroundAttachment: 'fixed',
   
  };

  const navigate = useNavigate()

  const handleRoute = (e: FormEvent) => {
    e.preventDefault();
    navigate("/search")
  }

  return (



    <body className=' object-contain'  style={divStyle}>


    // This is the main or parent div for the main section for the home page
      <div className="grid grid-cols-1 h-screen" >


        {/* This is the column div inside the main div */}
        <div className="flex flex-col justify-center items-center text-stone-900">


          {/* This is the main text here */}
          <h1 className="2xl:text-6xl xl:text-6xl lg:text-6xl md:text-4xl sm:text-2xl text-2xl  font-bold mb-4 text-center text-white  p-10 " >Maktaba tul Ahadith</h1>


          {/* This is the sub para text */}
          <p className="2xl:text-2xl xl:text-2xl lg:text-2xl   md:text-2xl sm:text-lg text-lg tw text-center text-white font-bold">
            A comprehensive library of Islamic texts with modern features and utilities
          </p>




          {/* This is the code or div for the serach bar  */}

          <div className='mt-28 relative flex justify-center items-center'>
            <div className="flex items-center">
              <input
                type="search"
                className='bg-white p-3 border-0 2xl:w-96 xl:w-96 lg:w-96 md:w-auto sm:w-auto w-full  rounded-3xl pl-5 z-0 '
                name=""
                id=""
                placeholder="Search"

              />
              <span onClick={handleRoute} className='relative bg-white p-2 left-[-16%]  text-black rounded-3xl  cursor-pointer '><CiSearch size={25} /></span>
            </div>
          </div>


          {/* This div for the search bar is end here */}


        </div>
        {/* The column div inside the main div is end here */}



      </div>
      {/* // The main or parent div is end here */}
    </body>
  );
};

export default Main;
