import Skeleton from "react-loading-skeleton";
import LoadingOverlay from 'react-loading-overlay-ts';


const PageWiseSkeleton = () => {
  return (
    <LoadingOverlay
    active
    spinner
    text='Loading your content...'
  >
    <body className="2xl:h-screen xl:h-screen lg:h-auto md:h-auto sm:h-auto h-auto bg-black">
   
      <div className="pt-28 text-white">
        <h1 className="2xl:text-4xl xl:text-4xl lg:text-4xl md:text-3xl sm:text-2xl text-2xl text-center font-sans">
          <Skeleton width={300} height={40} />
        </h1>
        <span className="w-52 h-10 bg-white text-white"></span>
        <div className="px-4 mx-auto max-w-screen-2xl py-8 mt-10 bg-neutral-400 rounded-lg">
          <h1 className="text-3xl font-serif text-white font-bold">
            <Skeleton width={400} height={50} />
          </h1>
          <div className="py-5 mt-2 h-96 bottom-0 top-0 overflow-y-scroll rounded-lg bg-white px-3 cursor-pointer">
            {/* Skeleton representation of fetched data */}
            {[...Array(3)].map((_, i) => (
              <div key={i}>
                <h1 className="text-2xl flex flex-row-reverse items-start flex-wrap gap-2 p-3 hover:rounded-lg hover:cursor-pointer hover:text-white text-end bg-stone-200 font-bold pb-4 font-serif">
                  <Skeleton width={300} height={5} />
                </h1>
                <p className="text-black text-lg my-2 bg-stone-300 ">
                  <Skeleton height={20} circle />
                </p>
              </div>
            ))}
          </div>
          {/* Button skeleton */}
          <div className="flex flex-row flex-wrap gap-4 my-4">
            <Skeleton width={150} height={40} />
            <Skeleton width={150} height={40} />
            <Skeleton width={150} height={40} />
          </div>
          <div className="flex justify-end my-4">
            <Skeleton width={150} height={40} />
          </div>
        </div>
      </div>
     
    </body>
    </LoadingOverlay>
  );
};

export default PageWiseSkeleton;
