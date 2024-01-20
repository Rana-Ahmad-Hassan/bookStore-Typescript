import { useState } from "react"
// import Navlink from the react router dom
import { NavLink } from "react-router-dom"

// import the pageWiseSkeleton from the components folder for the loading state
import PageWiseSkeleton from "../skeletons/pageWiseSkeleton"
// import the api hook from the manzil Slice from the feature folder
import { useGetManzilDataQuery } from "../../featues/manzilSlice"
import { bgImg } from "../../styles/bgImgStyles"
// import the react icons
import { FaArrowRightLong } from "react-icons/fa6"
import { FaArrowLeftLong } from "react-icons/fa6";
import { FaRegCircle } from "react-icons/fa";
import Spinner from "../spinner/spinner"


const Manzil = () => {
    const [manzilPage,setManzilPage]=useState(1)
    const {data,isLoading,isError,isFetching}=useGetManzilDataQuery(manzilPage.toString())

      // define the function for next page
      const nextPage = () => {
        manzilPage < 7 ? setManzilPage(nextPage => nextPage + 1) : alert("No more pages")
    };

    // define the previosPage function
    const previousPage = () => {
        setManzilPage(backPage => backPage - 1)
    }

  
    return (
        <>
     // main wraaper div for this compoenet
            <body className="2xl:h-screen xl:h-screen lg:h-auto md:h-auto sm:h-auto h-auto " style={bgImg()}>
                {/* Define the ternary operator to check if loading then show skeleton other wise error */}
                {isLoading ? <PageWiseSkeleton />
                : isFetching ? <Spinner/>
                    // in else part define if error then show error
                    : isError ? (<h1>There is a error</h1>) :
                        // then again in else part if there is no error then show the rest of the component
                        <div className="pt-28 text-white">

                            <span className='w-52 h-10 bg-white text-white'></span>
                            <div className="px-4 mx-auto max-w-screen-2xl py-8 mt-10 bg-neutral-400 rounded-lg">
                                <h1 className="2xl:text-4xl xl:text-4xl lg:text-4xl md:text-3xl sm:text-2xl text-2xl text-center font-sans ">
                                    بِسْمِ ٱللّٰهِ الرَّحْمٰنِ الرَّحِيْمِ
                                </h1>
                                <h1 className="text-3xl my-5 font-serif  text-white font-bold">
                                    READ THE HOLY QURAN IN ARABIC BY MANZIL
                                </h1>

                                <div className="py-5 mt-2  h-96 bottom-0 top-0  overflow-y-scroll   rounded-lg bg-white px-3 cursor-pointe" >
                                    {/* Display fetched data */}

                                    {/* fetch the data here and display dynamically */}
                                    {data?.data.ayahs.map((item, i) => (

                                        <div key={i}>
                                            <h1 className="text-2xl flex flex-row-reverse items-start flex-wrap gap-2 p-3 hover:rounded-lg hover:cursor-pointer hover:text-white  text-end text-black hover:bg-stone-600  font-bold pb-4 font-serif">
                                                <FaRegCircle /> {item.text}
                                            </h1>
                                            <p className="text-black text-lg">Manzil ({item.manzil})</p>
                                            <p className='text-black'>{item.surah.name}</p>
                                        </div>
                                    ))}
                                </div>


                                {/* Button to fetch the next page */}
                                <div className='flex flex-row flex-wrap gap-4 my-4'>
                                    <button className='bg-white flex items-center gap-2 hover:bg-gray-100 text-black px-5 py-2' onClick={nextPage}>Next {manzilPage}(7)<FaArrowRightLong /></button>

                                    {/* button for the prev page */}
                                    {
                                        manzilPage > 1 ? <button className='bg-white hover:bg-gray-100 flex items-center gap-2 text-black px-5 py-2' onClick={previousPage}><FaArrowLeftLong /> back</button> : ""
                                    }

                                    
                                  
                                </div>
                                <div className="flex justify-end my-4">

                                    {/* define the button inside navlink for back to the QuranPak page */}
                                    <NavLink to={"/QuranPak"}>
                                        <button className="bg-black flex items-center gap-3  text-white px-3 py-2 hover:bg-purple-500"><FaArrowLeftLong />B A C K</button>
                                    </NavLink>

                                </div>
                            </div>
                        </div>
                }
            </body>
        {/*  end of the main wrapper body tag here */}
        </>
    )
}

export default Manzil