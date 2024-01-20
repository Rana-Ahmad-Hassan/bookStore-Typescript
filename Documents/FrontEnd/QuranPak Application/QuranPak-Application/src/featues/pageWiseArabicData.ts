import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// import the pageWiseInterface for defining the data coming from api
import { PageWiseInterface } from '../interface/pageWiseQuranInterface';

// export the QuranApi which equal to createApi fuction that returns the object
export const quranApi = createApi({
   // define the reducerPath here
  reducerPath: 'quranApi',
   // Fetch the data from the url of api
  baseQuery: fetchBaseQuery({ baseUrl: 'https://api.alquran.cloud/v1/' }),
  // define the end points of the api
  endpoints: (builder) => ({
    // define the merhod that we fetch the data means get the data query here
    getDataByPage: builder.query<PageWiseInterface, string>({
      query: (pageNumber) => `page/${pageNumber}/quran-uthmani`,
      // Just delay the response little for showing the skeleton of particular page
      transformResponse: (response:PageWiseInterface) => {
        return new Promise((resolve) => {
          setTimeout(() => {
            resolve(response);
          }, 400); 
        });
    }
    }),
  }),
});

// export the hook for getting the data from this particular slice
export const { useGetDataByPageQuery } = quranApi;
