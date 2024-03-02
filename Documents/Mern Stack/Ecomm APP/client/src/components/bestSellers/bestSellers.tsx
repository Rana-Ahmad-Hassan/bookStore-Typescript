
import { useEffect, useState } from "react"
import { useGetBestSellerQuery } from "../../features/categorieSlice";
import { BestSellerSekeleton } from "../../skeletons/preLoadingSkeleton";



const BestSellers = () => {
    const { data, isLoading } = useGetBestSellerQuery()


    const [clockStr, setClockStr] = useState('');




    useEffect(() => {
        const updateTime = () => {
            const now = new Date();
            const hours = now.getHours();
            const minutes = now.getMinutes();
            const seconds = now.getSeconds();


            const formattedTime = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
            setClockStr(formattedTime);
        };


        updateTime();
        const intervalId = setInterval(updateTime, 1000);


        return () => clearInterval(intervalId);
    }, []);




    return (
        <>
            <div className=" container mx-auto py-12">
                <p className="text-2xl my-3">EXPLORE <span className="font-bold border-b border-b-red-500"> BEST-SELLERS</span></p>











                {
                    isLoading ? <BestSellerSekeleton /> : <> <div className="grid 2xl:grid-cols-5  lg:grid-cols-5 md:grid-cols-2  sm:grid-cols-1 gap-5">

                        {
                            data?.allBestSellerProducts.map((item, i) => {
                                return (
                                    <div key={i}>
                                        <img src="https://9to5mac.com/wp-content/uploads/sites/6/2021/10/MacBook-Pro-2021.jpg?quality=82&strip=all&w=1024" className=" hover:scale-110 duration-700 cursor-pointer h-72" alt="" />
                                        <p className="text-center">{item.productName}</p>
                                    </div>
                                )
                            })
                        }

                    </div></>
                }















                <p className="text-2xl my-3">TODAY's <span className="font-bold border-b border-b-red-500">OFFER</span></p>


                <div className="  bg-black px-10 py-10 flex flex-wrap  justify-between items-center rounded-2xl text-white">
                    <div className=" w-auto">
                        <p className="text-3xl mb-3">Daily Deals</p>
                        <p className="p-4 text-center bg-red-600 rounded-lg text-white">Up to 70% off</p>
                    </div>

                    <div>
                        <p className="2xl:text-9xl sm:text-2xl">{clockStr}</p>

                    </div>
                    <p className="2xl:text-5xl xl:text-5xl lg:text-5xl md:text-3xl sm:text-2xl">Up To <br /> <span className="text-red-600">80% OFF</span></p>
                </div>
            </div>
        </>
    )
}

export default BestSellers