import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// import the pageWiseInterface for defining the data coming from api
import { SearchTextInterface } from '../interface/searchTextInterface';

// export the QuranApi which equal to createApi fuction that returns the object
export const searchTextApi = createApi({
   // define the reducerPath here
  reducerPath: 'textDataApi',
   // Fetch the data from the url of api
  baseQuery: fetchBaseQuery({ baseUrl: 'https://api.alquran.cloud/v1/' }),
  // define the end points of the api
  endpoints: (builder) => ({
    // define the merhod that we fetch the data means get the data query here
    getTextDataPage: builder.query<SearchTextInterface, string>({
      query: (text) => `search/${text}/all/en`,
      // Just delay the response little for showing the skeleton of particular page
     
    
    }),
  }),
});

// export the hook for getting the data from this particular slice
export const { useGetTextDataPageQuery } = searchTextApi;
