import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// import the pageWiseInterface for defining the data coming from api
import { AhadithBooksInterface } from '../interface/AhadithBooksInterface';


// export the QuranApi which equal to createApi fuction that returns the object
export const AhadithBooksApi = createApi({
   // define the reducerPath here
  reducerPath: 'AhadithBooksDataApi',
   // Fetch the data from the url of api
  baseQuery: fetchBaseQuery({ baseUrl: 'https://www.hadithapi.com/api'}),
  // define the end points of the api
  endpoints: (builder) => ({
    // define the merhod that we fetch the data means get the data query here
    getBooksData: builder.query<AhadithBooksInterface,void>({
      query: () => `books?apiKey=$2y$10$lC03iaoIZKzNgIuNcRg7wwpfzOssudPpv0G4c81q121L5byC`,
      // Just delay the response little for showing the skeleton of particular page
     
    
    }),
  }),
});

// export the hook for getting the data from this particular slice
export const { useGetBooksDataQuery } = AhadithBooksApi;
