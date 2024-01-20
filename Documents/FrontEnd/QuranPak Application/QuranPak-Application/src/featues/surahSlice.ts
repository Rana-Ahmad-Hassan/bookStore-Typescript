import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// import the RootInterface for defining the data coming from api
import { SurahInterface } from '../interface/surahInterface';

// export the SurahApi which equal to createApi fuction that returns the object
export const Surahapi = createApi({
   // define the reducerPath here
    reducerPath: "api",
      // Fetch the data from the url of api
    baseQuery: fetchBaseQuery({ baseUrl: "https://api.alquran.cloud/v1/" }),
    // define the end points of the api
    endpoints: (builder) => ({
       // define the merhod that we fetch the data means get the data query here
        getSurahData: builder.query<SurahInterface, string>({
            query: (surahNumber) => `surah/${surahNumber}/ar.alafasy`,
             // Just delay the response little for showing the skeleton of particular page
            transformResponse: (response:SurahInterface) => {
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
export const { useGetSurahDataQuery } = Surahapi;
