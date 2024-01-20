import { useState } from "react";
import { useGetTextDataPageQuery } from "../../featues/serachTextData";
import { IoSearch } from "react-icons/io5";
import SearchTextSkeleton from "../skeletons/searchTextSkeleton";
import { bgImg } from "../../styles/bgImgStyles";
import Spinner from "../spinner/spinner";


const SearchText = () => {
    const [searchValue, setSearchValue] = useState("");
    const [searchClicked, setSearchClicked] = useState(false);

    const { data, isLoading,isFetching,isError } = useGetTextDataPageQuery(searchValue);

    const handleSearch = () => {

        searchValue ? setSearchClicked(true) : alert("Please enter something to search")
    };

    return (
        <body className="2xl:h-screen xl:h-screen lg:h-auto md:h-auto sm:h-auto h-auto " style={bgImg()}>
            <div className="pt-40 text-white">
                <div className="mb-3 max-w-screen-xl mx-auto ">
                    <h1 className="text-center text-3xl my-3 font-bold">SEARCH ANY KEYWORD AND VERSE FROM HOLY QURAN.</h1>
                    <div className="relative mb-4 flex w-full flex-wrap items-stretch">
                        <input
                            type="search"
                            className="relative m-0 -mr-0.5 block min-w-0 flex-auto rounded-l bg-clip-padding px-3 py-4 text-base font-normal leading-[1.6] outline-none text-black transition duration-200 ease-in-out focus:z-[3]"
                            placeholder="Search"
                            value={searchValue}
                            onChange={(e) => setSearchValue(e.target.value)}
                            aria-label="Search"
                            aria-describedby="button-addon1"
                        />
                        <button
                            className="relative z-[2] flex items-center rounded-r bg-primary px-6 py-2.5 text-xs font-medium uppercase leading-tight shadow-md transition duration-150 ease-in-out bg-purple-400 text-white  hover:bg-primary-700 hover:bg-stone-200 hover:text-black focus:bg-primary-700 focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg"
                            type="button"
                            id="button-addon1"
                            onClick={handleSearch}
                            data-te-ripple-init
                            data-te-ripple-color="light"
                        >
                            <IoSearch size={30} />
                        </button>
                    </div>
                </div>

                <div className="px-4 mx-auto max-w-screen-xl py-8 mt-10 bg-neutral-400 rounded-lg">
                    <div className={`py-5 mt-2 ${data && searchClicked ? "h-96" : "h-auto"}   bottom-0 top-0 overflow-y-scroll rounded-lg bg-white px-3 cursor-pointer`}>
                        {   isLoading && searchClicked ? (
                            <SearchTextSkeleton />
                        ) :   isFetching ? <Spinner/> : isError ? <h1>Data is not founf</h1> : (

                            data && searchClicked ? data.data.matches.map((item, i) => (
                                <div key={i}>
                                    <h1 className="text-2xl flex items-start flex-wrap gap-2 p-3 hover:rounded-lg hover:cursor-pointer hover:text-white  text-black hover:bg-stone-600 font-bold pb-4 font-serif">
                                        {item.text}
                                    </h1>
                                    <div className="flex flex-col  items-end">
                                        <p className="text-black text-lg">{item.surah.name}</p>
                                        <p className="text-black">{item.surah.englishNameTranslation}</p>
                                    </div>
                                </div>
                            )) : <h1 className="text-lg text-black">Nothin found corresponding to your search.</h1>
                        )}

                    </div>

                    {/* Button to fetch the next page */}
                    <div className="flex justify-end my-4">
                        {/* Define the button inside NavLink for back to the QuranPak page */}
                    </div>
                </div>
            </div>

        </body>
    );
};

export default SearchText;
