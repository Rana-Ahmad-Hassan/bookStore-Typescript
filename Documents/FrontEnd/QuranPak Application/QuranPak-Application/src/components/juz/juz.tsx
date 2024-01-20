import { useState } from "react"

// import the hook for getting data from feature folder
import { useGetJuzDataQuery } from "../../featues/juzSlice"
// import the react icons
import { FaArrowRightLong } from "react-icons/fa6";
import { FaArrowLeftLong } from "react-icons/fa6";
import { GrPowerReset } from "react-icons/gr";

// import the NavLink from react router dom
import { NavLink } from "react-router-dom";
// import the skeleton for loading state
import PageWiseSkeleton from "../skeletons/pageWiseSkeleton";
import { bgImg } from "../../styles/bgImgStyles";
// Spinner Component
import Spinner from "../spinner/spinner";


const JuzNumber = () => {

    // defining the state to track the page of the juz
    const [juzPage, setJuzPage] = useState(1)
    // destructured the data loading and erorr from the hook made in juz Slice
    const { data, isFetching, isLoading, isError } = useGetJuzDataQuery(juzPage.toString())





    // define the function for the next juz
    const nextJuz = () => {
        juzPage < 30 ? setJuzPage((juzPage) => juzPage + 1) : alert("No more Juz")
    }
    // define the function for the previous page
    const preJuz = () => {
        setJuzPage(juzPage - 1)
    }

    // define the function to reset the state to 0 again
    const resetJuz = () => {
        setJuzPage(1)
    }

    return (
        <>
            {/* Main wrapper body tag to wrap this component */}
            <body className="2xl:h-auto xl:h-screen lg:h-auto md:h-auto sm:h-auto h-auto shadow-2xl" style={bgImg()}>
                {/* Define the ternary operator to check if loading then show skeleton other wise error */}
                {
                    isLoading ? <PageWiseSkeleton />
                        : isFetching ? <Spinner/>
                            // in else part define if error then show error
                            : isError ? <h1>Unknown error is encountring</h1> :
                                // then again in else part if there is no error then show the rest of the component

                                <div className="pt-28 text-white pb-20">

                                    <span className='w-52 h-10 bg-white text-white'></span>
                                    <div className="px-4 mx-auto max-w-screen-2xl py-8 mt-10 bg-neutral-400 rounded-lg">
                                        <h1 className="2xl:text-4xl xl:text-4xl lg:text-4xl md:text-3xl sm:text-2xl text-2xl text-center font-sans ">
                                            بِسْمِ ٱللّٰهِ الرَّحْمٰنِ الرَّحِيْمِ
                                        </h1>
                                        <h1 className="text-3xl font-serif text-white font-bold">
                                            READ THE HOLY QURAN IN ARABIC BY JUZ
                                        </h1>

                                        <div className="py-5 mt-2  h-96 bottom-0 top-0  overflow-y-scroll  z-0   rounded-lg bg-white px-3 cursor-pointe" >
                                            {/* Display fetched data */}




                                            {
                                                data?.data.ayahs.map((item, i) => {

                                                    return (
                                                        <>

                                                            <div key={i} >

                                                                <h1 className="text-2xl flex flex-row-reverse items-start flex-wrap gap-2 p-3 hover:rounded-lg hover:cursor-pointer hover:text-white  text-end text-black hover:bg-stone-600  font-bold pb-4 font-serif">
                                                                    {item.text}
                                                                </h1>
                                                                <p className="text-black text-lg">{item.surah.name} </p>
                                                                <p className='text-black'>{item.number}</p>
                                                            </div>
                                                        </>
                                                    )
                                                })
                                            }



                                        </div>
                                        {/* Button to fetch the next page */}
                                        <div className='flex flex-row flex-wrap gap-4 my-4'>
                                            <button className='bg-white flex items-center gap-2 hover:bg-gray-100 text-black px-5 py-2' onClick={nextJuz}> JUZ {juzPage}(30) <FaArrowRightLong /></button>

                                            {/* button to back to the prev page */}

                                            {
                                                juzPage > 1 ? <button className='bg-white hover:bg-gray-100 flex items-center gap-2 text-black px-5 py-2' onClick={preJuz}><FaArrowLeftLong />back</button> : ""
                                            }

                                            {/* button to reset the page */}
                                            {
                                                juzPage > 10 ? <button className='bg-white flex items-center  gap-2 hover:bg-gray-100 text-black px-5 py-2' onClick={resetJuz} ><GrPowerReset />Reset</button> : ""
                                            }


                                        </div>
                                        <div className="flex justify-end my-4">

                                            {/* define the button inside the navlik for back to the quran page */}
                                            <NavLink to={"/QuranPak"}>
                                                <button className="bg-black flex items-center gap-3  text-white px-3 py-2 hover:bg-purple-500"><FaArrowLeftLong />B A C K</button>

                                            </NavLink>
                                        </div>
                                    </div>
                                </div>
                }
            </body>
            {/* main wrapper body tag in end here */}

        </>
    )
}

export default JuzNumber