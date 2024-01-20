
// import the createapi and fetchBaseQuery from the redux toolkit 
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// import the juzInterface to defining the data from the api
import { JuzInterface } from "../interface/juzInterface";

// export the juzApi which equal to createApi fuction that returns the object
export const juzApi = createApi({

    // define the reducerPath here
    reducerPath: "juz",
    // Fetch the data from the url of api
    baseQuery: fetchBaseQuery({ baseUrl: "https://api.alquran.cloud/v1/" }),
    // define the end points of the api
    endpoints: (builder) => ({
      // define the merhod that we fetch the data means get the data query here
        getJuzData: builder.query<JuzInterface, string>({
            query: (juzNumber) => `juz/${juzNumber}/quran-uthmani`,
      // Just delay the response little for showing the skeleton of particular page
            transformResponse: (response:JuzInterface) => {
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
export const { useGetJuzDataQuery } = juzApi;
