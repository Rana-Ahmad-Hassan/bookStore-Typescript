import { NavLink } from "react-router-dom";
import { FaBookReader } from "react-icons/fa";
import { MdKeyboardDoubleArrowRight } from "react-icons/md"
import { bgImg } from "../../styles/bgImgStyles";




const QuranPak: React.FC = () => {



    return (
        <body style={bgImg()} className="h-auto" >
            <div className=" pt-20  text-white">


                <div className="px-4 mx-auto  max-w-screen-2xl shadow-lg py-8 mt-10  bg-neutral-400 rounded-lg "
                >
                    <h1 className="2xl:text-4xl xl:text-4xl lg:text-4xl md:text-3xl sm:text-2xl text-2xl text-center font-sans text-white font-bold pb-5">بِسْمِ ٱللّٰهِ الرَّحْمٰنِ الرَّحِيْمِ</h1>
                    <h1 className="2xl:text-4xl xl:text-4xl lg:text-4xl md:text-4xl text-2xl font-serif text-yellow font-bold">READ THE HOLY QURAN IN ARABIC</h1>


                    
                        <NavLink to={"/pageWise"}>
                            <div className="py-5 px-3  mt-5 rounded-lg bg-stone-600 cursor-pointer hover:bg-indigo-950">
                                <h1 className="2xl:text-3xl xl:text-3xl lg:text-3xl md:text-3xl sm:text-lg text-lg flex flex-wrap items-center gap-3 text-white font-bold pb-4"> <FaBookReader /> The Whole Holy Quran in Arabic</h1>
                                <p >Read and straem entire Quran in Arabic Page Wise</p>
                            </div>
                        </NavLink>


                        <NavLink to={"/engPageWise"}>
                            <div className="py-5 mt-5 rounded-lg bg-stone-600 px-3  cursor-pointer hover:bg-indigo-950">
                                <h1 className="2xl:text-3xl xl:text-3xl lg:text-3xl md:text-3xl sm:text-lg text-lg flex flex-wrap items-center gap-3 text-white font-bold pb-4"> <FaBookReader /> The Whole Holy Quran in English</h1>
                                <p >Read and straem entire Quran in English Page Wise</p>
                            </div>
                        </NavLink>
                    



                    {/* <div className="py-5  mt-2 rounded-lg  bg-stone-600 px-3 cursor-pointer hover:bg-indigo-950">
                        <h1 className="text-3xl flex flex-wrap items-center gap-3  text-white font-bold pb-4"> <MdKeyboardDoubleArrowRight /> By Ayah</h1>
                        <p >Read See the Ayah's in Holy Quran</p>
                    </div> */}


                    <NavLink to={"/surah"}>

                        <div className="py-5 mt-2 rounded-lg  bg-stone-600 px-3 cursor-pointer hover:bg-indigo-950">
                            <h1 className="2xl:text-3xl xl:text-3xl lg:text-3xl md:text-3xl sm:text-lg text-lg flex flex-wrap items-end gap-3 text-white font-bold pb-4"> <MdKeyboardDoubleArrowRight />By Surah</h1>
                            <p >Read the Surah's name in Holy Quran</p>
                        </div>
                    </NavLink>




                    <NavLink to={"/juz"}>
                        <div className="py-5 mt-2 rounded-lg  bg-stone-600 px-3 cursor-pointer hover:bg-indigo-950">
                            <h1 className="2xl:text-3xl xl:text-3xl lg:text-3xl md:text-3xl sm:text-lg text-lg flex flex-wrap items-center gap-3 text-white font-bold pb-4"><MdKeyboardDoubleArrowRight />By Juz</h1>
                            <p >Read The Holy Quran by Juz</p>
                        </div>
                    </NavLink>

                    <NavLink to={"/Manzil"}>
                        <div className="py-5 mt-2 rounded-lg  bg-stone-600 px-3 cursor-pointer hover:bg-indigo-950">
                            <h1 className="2xl:text-3xl xl:text-3xl lg:text-3xl md:text-3xl sm:text-lg text-lg flex flex-wrap items-center gap-3 text-white font-bold pb-4"><MdKeyboardDoubleArrowRight />By Manzil</h1>
                            <p >Read The Holy Quran by Manzil</p>
                        </div>
                    </NavLink>





                </div>

            </div>



        </body>
    );
};

export default QuranPak;
