import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// import the RootInterface for defining the data coming from api
import { ManzilInterface } from '../interface/manzilInterface';

// export the SurahApi which equal to createApi fuction that returns the object
export const Manzilapi = createApi({
   // define the reducerPath here
    reducerPath: "manzilApi",
      // Fetch the data from the url of api
    baseQuery: fetchBaseQuery({ baseUrl: "https://api.alquran.cloud/v1/" }),
    // define the end points of the api
    endpoints: (builder) => ({
       // define the merhod that we fetch the data means get the data query here
        getManzilData: builder.query<ManzilInterface, string>({
            query: (manzilNumber) => `manzil/${manzilNumber}/quran-uthmani`,
             // Just delay the response little for showing the skeleton of particular page
            transformResponse: (response:ManzilInterface) => {
                return new Promise((resolve) => {
                  setTimeout(() => {
                    resolve(response);
                  }, 200); 
                });
            }
        })
    })
});

// export the hook for getting the data from this particular slice
export const { useGetManzilDataQuery } = Manzilapi;
