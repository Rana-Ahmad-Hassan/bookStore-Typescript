// here i import the custom hook for the api call from the feature folder
import { useGetBooksDataQuery } from "../../featues/ahadithBooksSlice"
// here i import the global style function for background image from styles folder
import { bgImg } from "../../styles/bgImgStyles"


// here i import the searchTextSkeleton for the loading state of the api
import SearchTextSkeleton from "../skeletons/searchTextSkeleton"





const AhadithBooks = () => {
    // destructure the data loading and error state from the custom hook
    const { data, isLoading, isError } = useGetBooksDataQuery()
    return (
        <>

            {/* main body div as a wrapper element of this component */}
            <body className=" 2xl:h-screen xl:h-screen lg:h-screen md:h-screen sm:h-auto h-auto pt-44" style={bgImg()}>
                {/* here i can set a condition using ternary operator if loading then show the skeleton component */}
                {/* else return the error message */}
                {/* and then if these both are not rendering then render the ahadith component */}
                {isLoading ? <SearchTextSkeleton /> : isError ? (<h1>Error is encountring</h1>) : (
                    <div className="max-w-screen-2xl bg-stone-400 p-5 rounded-lg  h-5/6   bottom-0 top-0 overflow-y-scroll mx-auto ">
                        <h1 className="text-white  text-2xl font-bold">MOST FAMOUS 9 AHADITH BOOKS.</h1>
                        <div className="flex justify-between px-3  text-black bg-[#FFCE81] text-2xl py-4">
                            <h1>Book Name</h1>
                            <h1>Writer's Name</h1>
                        </div>

                        {/* here i can just map over the data and show the data from api dynamically */}
                        {
                            data?.books.map((item, i) => {
                                return (
                                    <div key={i} className="py-5 bg-white shadow-2xl text-white mt-5 rounded-lg ">
                                        <div className="flex justify-between px-2 mb-5">
                                            <h1 className="text-2xl font-bold text-black">{item.bookName}</h1>
                                            <h1 className="text-black">{item.writerName}({item.writerDeath})</h1>
                                        </div>
                                        <div className="px-2 gap-y-5">
                                            <h1 className="text-black">No.of.Chapters: ({item.chapters_count})</h1>

                                        </div>

                                    </div>
                                )
                            })
                        }
                    </div>
                )}
            </body>
            {/* the main wrapper div for this component is end here */}
        </>
    )
}

export default AhadithBooks