import { useGetAllProductsQuery } from "../../features/productSlice";
import { CardSkeleton } from "../../skeletons/preLoadingSkeleton";

const Products = () => {
    const { data, isFetching } = useGetAllProductsQuery();






    const products = data?.products || [];

    return (
        <>
            <div className="container mx-auto">
                <p className="text-2xl">
                    SPECIAL <span className="border-b border-b-red-500">RANGE-PERSONALIZED PRODUCTS</span>
                </p>
                {
                    isFetching ? <CardSkeleton /> : <> <div className="grid 2xl:grid-cols-4 gap-4 mt-10 lg:grid-cols-3 sm:grid-cols-1 justify-center">
                        {products.slice(3).map((item, index) => (
                            <div key={index} className="relative flex flex-col text-gray-700 bg-white shadow-lg bg-clip-border rounded-xl w-96 hover:cursor-pointer">
                                <div className="relative mx-4 mt-4 overflow-hidden text-gray-700 bg-white bg-clip-border rounded-xl h-96">
                                    <img
                                        src="https://images.unsplash.com/photo-1629367494173-c78a56567877?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=927&amp;q=80"
                                        alt="card-image"
                                        className="object-cover w-full h-full"
                                    />
                                </div>
                                <div className="p-6">
                                    <div className="flex items-center justify-between mb-2">
                                        <p className="block font-sans text-base antialiased font-medium leading-relaxed text-blue-gray-900">
                                            {item.productName}
                                        </p>
                                        <p className="block font-sans text-base antialiased font-medium leading-relaxed text-blue-gray-900">
                                            {item.price}
                                        </p>
                                    </div>
                                    <p className="block font-sans text-sm antialiased font-normal leading-normal text-gray-700 opacity-75">
                                        {item.description}
                                    </p>
                                </div>
                                <div className="p-6 pt-0">
                                    <button
                                        className="align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg shadow-gray-900/10 hover:shadow-gray-900/20 focus:opacity-[0.85] active:opacity-[0.85] active:shadow-none block w-full bg-blue-gray-900 text-blue-gray-900 shadow-none hover:scale-105 hover:shadow-none focus:scale-105 focus:shadow-none active:scale-100"
                                        type="button"
                                    >
                                        Add to Cart
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div></>
                }

                <div className="flex justify-evenly flex-wrap mt-10">
                    <div>
                        <img src="https://www.boat-lifestyle.com/cdn/shop/files/Group_334305_small.svg?v=1682336123" className=" w-28" alt="" />
                        <p className="text-center">1 year <br /> warranty</p>
                    </div>

                    <div>
                        <img src="https://www.boat-lifestyle.com/cdn/shop/files/Group_334304_small.svg?v=1682336123" className=" w-28"  alt=""/>
                        <p className="text-center">7 days <br /> Replacement</p>
                    </div>

                    <div>
                        <img src="https://www.boat-lifestyle.com/cdn/shop/files/Group_334303_small.svg?v=1682336123" className=" w-28"  alt="" />
                        <p className="text-center">Free <br /> Shipping</p>
                    </div>

                    <div>
                        <img src="https://www.boat-lifestyle.com/cdn/shop/files/Group_334302_small.svg?v=1682336123" className=" w-28"   alt="" />
                        <p className="text-center">GST <br /> Billing</p>
                    </div>
                </div>


               
            </div>
        </>
    );
};

export default Products;
