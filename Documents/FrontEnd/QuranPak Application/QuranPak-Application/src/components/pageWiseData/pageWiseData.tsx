import { useState } from 'react';
// import the hook from the slice in the feature folder
import { useGetDataByPageQuery } from '../../featues/pageWiseArabicData';

// import the react icons
import { FaArrowRightLong } from "react-icons/fa6";
import { FaArrowLeftLong } from "react-icons/fa6";
import { FaRegCircle } from "react-icons/fa";
import { GrPowerReset } from "react-icons/gr";

// import te navLink from the react router dom
import { NavLink } from 'react-router-dom';
// import the page wise skeleton for loadind state
import PageWiseSkeleton from '../skeletons/pageWiseSkeleton';
import { bgImg } from '../../styles/bgImgStyles';
import Spinner from '../spinner/spinner';






const PageWiseData: React.FC = () => {



    // state for tracking the page of the QuranPak
    const [page, setPage] = useState(1);

    // destructured the data loading and error from the hook
    const { data, isFetching, isError, isLoading } = useGetDataByPageQuery(page.toString());

    // define the function for next page
    const nextPage = () => {
        page < 604 ? setPage(nextPage => nextPage + 1) : alert("No more pages")
    };

    // define the previosPage function
    const previousPage = () => {
        setPage(backPage => backPage - 1)
    }

    // define the reset function
    const resetPage = () => {
        setPage(1);
    }




    return (

        // main wraaper div for this compoenet
        <body className="2xl:h-screen xl:h-screen lg:h-auto md:h-auto sm:h-auto h-auto " style={bgImg()}>
            {/* Define the ternary operator to check if loading then show skeleton other wise error */}
            {isLoading ? <PageWiseSkeleton />
            : isFetching ? <Spinner/>
                // in else part define if error then show error
                : isError ? (<h1>There is a error</h1>) 
                    // then again in else part if there is no error then show the rest of the component
                    : <div className="pt-28 text-white">

                        <span className='w-52 h-10 bg-white text-white'></span>
                        <div className="px-4 mx-auto max-w-screen-2xl  py-8 mt-10 bg-neutral-400 rounded-lg">
                            <h1 className="2xl:text-4xl xl:text-4xl lg:text-4xl md:text-3xl sm:text-2xl text-2xl text-center font-sans ">
                                بِسْمِ ٱللّٰهِ الرَّحْمٰنِ الرَّحِيْمِ
                            </h1>
                            <h1 className="text-3xl my-5 font-serif  text-white font-bold">
                                READ THE HOLY QURAN IN ARABIC
                            </h1>

                            <div className="py-5 mt-2   h-96 bottom-0 top-0  overflow-y-scroll   rounded-lg bg-white px-3 cursor-pointe" >
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
                                <button
                                    className='bg-white flex items-center gap-2 hover:bg-gray-100 text-black px-5 py-2'
                                    onClick={nextPage}

                                >
                                    Next {page}(604)
                                    <FaArrowRightLong />
                                </button>

                                {/* button for the prev page */}
                                {
                                    page > 1 ? <button className='bg-white hover:bg-gray-100 flex items-center gap-2 text-black px-5 py-2' onClick={previousPage}><FaArrowLeftLong /> back</button> : ""
                                }

                                {/* button for reset the page */}
                                {
                                    page > 10 ? <button className='bg-white flex items-center  gap-2 hover:bg-gray-100 text-black px-5 py-2' onClick={resetPage}><GrPowerReset />Reset</button> : ""
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
        </body >
        // end of the main wrapper body tag here
    );
};

export default PageWiseData;
