
import Skeleton from 'react-loading-skeleton';
import LoadingOverlay from 'react-loading-overlay-ts';

const SearchTextSkeleton = () => {
  return (
    <body className="bg-black h-screen">
      <LoadingOverlay
        active
        spinner
        text='Loading your content...'
      >
      <div className="pt-28 text-white">
        <h1 className="2xl:text-4xl xl:text-4xl lg:text-4xl md:text-3xl sm:text-2xl text-2xl text-center font-sans">
          <Skeleton width={300} height={40} />
        </h1>
        <div className="px-4 mx-auto max-w-screen-2xl py-8 mt-10 bg-neutral-400 rounded-lg">
          <h1 className="text-3xl font-serif text-white font-bold">
            <Skeleton width={300} height={40} />
          </h1>

          {/* Simulated multiple card skeletons */}
          {[...Array(1)].map((_, i) => (
            <div
              key={i}
              className="py-5 mt-5 flex flex-wrap justify-between items-center text-black rounded-lg bg-stone-200 px-3  hover:bg-gray-200"
            >
              <div>
                <h1 className="text-2xl   font-bold pb-4">
                  <Skeleton width={200} />
                </h1>
                <p className="text-lg">
                  <Skeleton width={100} />
                </p>
              </div>
              <div>
                <h1 className="text-2xl  text-start font-bold pb-4">
                  <Skeleton width={150} />
                </h1>
                <p className="2xl:text-end xl:text-end lg:text-end md:text-center sm:text-start text-start">
                  <Skeleton width={100} />
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
      </LoadingOverlay>
    </body>
  );
};

export default SearchTextSkeleton;
