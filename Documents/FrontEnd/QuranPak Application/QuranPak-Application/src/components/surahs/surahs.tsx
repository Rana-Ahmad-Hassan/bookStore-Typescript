
import { useState } from "react";
// import the hook from the slice in the features folder
import { useGetSurahDataQuery } from "../../featues/surahSlice";
// import the skeleton for the loading state
import SurahSkeleton from "../skeletons/surahSkeleton";
// import the react icon
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";
// import the navlink from react router dom
import { NavLink } from "react-router-dom";
import { GrPowerReset } from "react-icons/gr";
import { bgImg } from "../../styles/bgImgStyles";
// Spiiner Component
import Spinner from "../spinner/spinner";






const Surah: React.FC = () => {
  const [surahPage, setSurahPage] = useState(1)

  // destructured the data loading and the error from the hook
  const { data, isLoading, isError, isFetching } = useGetSurahDataQuery(surahPage.toString());


  // define the function for next page
  const nextPage = () => {
    surahPage < 114 ? setSurahPage((nextPage) => nextPage + 1) : alert("No more Surah's")
  };

  // define the previosPage function
  const previousPage = () => {
    setSurahPage(backPage => backPage - 1)
  }

  // define the reset function
  const resetPage = () => {
    setSurahPage(1);
  }



  return (
    // main body tag for the whole compoenet
    <body className=" 2xl:h-screen xl:h-auto lg:h-auto md:h-auto sm:h-auto h-auto" style={bgImg()}>
      {/* Define the ternary operator to check if loading then show skeleton other wise error */}
      {isLoading ? <SurahSkeleton />
        : isFetching ? <Spinner/>


          // in else part define if error then show error
          : isError ? (
            <div className="pt-52 text-white text-center">Data is not fetched</div>
            // then again in else part if there is no error then show the rest of the component
          ) : (
            <div className="pt-28 text-white">

              <div className="px-4 mx-auto max-w-screen-2xl py-8 mt-10 bg-neutral-400 rounded-lg">
                <h1 className="2xl:text-4xl xl:text-4xl lg:text-4xl md:text-3xl sm:text-2xl text-2xl text-center font-sans">
                  بِسْمِ ٱللّٰهِ الرَّحْمٰنِ الرَّحِيْمِ
                </h1>
                <h1 className="text-3xl font-serif text-white font-bold">
                  READ HOLY QURAN BY SURAH.
                </h1>







                {/* fetch the data here from the data variable and display it dynamically */}


                <div className="py-5 mt-2  h-96 bottom-0 top-0  overflow-y-scroll   rounded-lg bg-white px-3 cursor-pointe" >
                  {/* Display fetched data */}

                  {/* fetch the data here and display dynamically */}
                  {data?.data.ayahs.map((item, i) => (

                    <div key={i}>
                      <h1 className="text-2xl flex flex-row-reverse items-start flex-wrap gap-2 p-3 hover:rounded-lg hover:cursor-pointer hover:text-white  text-end text-black hover:bg-stone-600  font-bold pb-4 font-serif">
                        {item.text}
                      </h1>
                      <audio src={`${item.audioSecondary}`} onError={(e) => console.log("Audio Error", e)} controls></audio>
                      <p className='text-black'></p>
                    </div>
                  ))}
                </div>




                <div className='flex flex-row flex-wrap gap-4 my-4'>
                  <button className='bg-white flex items-center gap-2 hover:bg-gray-100 text-black px-5 py-2' onClick={nextPage}>Next {surahPage}(114)<FaArrowRightLong /></button>

                  {/* button for the prev page */}
                  {
                    surahPage > 1 ? <button className='bg-white hover:bg-gray-100 flex items-center gap-2 text-black px-5 py-2' onClick={previousPage}><FaArrowLeftLong /> back</button> : ""
                  }

                  {/* button for reset the page */}
                  {
                    surahPage > 10 ? <button className='bg-white flex items-center  gap-2 hover:bg-gray-100 text-black px-5 py-2' onClick={resetPage}><GrPowerReset />Reset</button> : ""
                  }
                </div>
                <div className="flex justify-end my-4">
                  {/* define the button to back to the QuranPak page */}
                  <NavLink to={"/QuranPak"}>
                    <button className="bg-black flex items-center gap-3  text-white px-3 py-2 hover:bg-purple-500"><FaArrowLeftLong />B A C K</button>
                  </NavLink>
                </div>

              </div>

            </div>
          )}
    </body>
    // end of the main body wrapper tag here
  );
};

export default Surah;
