import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// import the pageWiseInterface for defining the data coming from api
import { AllProductsInterface } from '../interface/allProductsInterface';

// export the QuranApi which equal to createApi fuction that returns the object
export const getAllProducts = createApi({
    // define the reducerPath here
    reducerPath: 'allProducts',
    // Fetch the data from the url of api
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3004/api/v1/' }),
    // define the end points of the api
    endpoints: (builder) => ({
        // define the merhod that we fetch the data means get the data query here
        getAllProducts: builder.query<AllProductsInterface, void>({
            query: () => `products/all-products`,
            // Just delay the response little for showing the skeleton of particular page
            transformResponse: (response:AllProductsInterface) => {
                return new Promise((resolve) => {
                  setTimeout(() => {
                    resolve(response);
                  }, 1000); 
                });
            }
        }),
    }),
});

// export the hook for getting the data from this particular slice
export const { useGetAllProductsQuery } = getAllProducts;