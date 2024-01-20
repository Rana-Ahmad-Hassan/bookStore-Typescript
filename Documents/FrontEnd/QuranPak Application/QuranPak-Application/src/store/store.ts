import { configureStore } from "@reduxjs/toolkit";

// Import the api SLices from the folder features
import { Surahapi } from "../featues/surahSlice";
import { quranApi } from "../featues/pageWiseArabicData";
import { juzApi } from "../featues/juzSlice";
import { engQuranApi } from "../featues/pageWiseEnglishData";
import { searchTextApi } from "../featues/serachTextData";
import { AhadithBooksApi } from "../featues/ahadithBooksSlice";
import { Manzilapi } from "../featues/manzilSlice";

// Import the setypListners from redux toolkit
import { setupListeners } from "@reduxjs/toolkit/query";


export const store = configureStore({
  reducer: {
    [Surahapi.reducerPath]: Surahapi.reducer,
    [quranApi.reducerPath]: quranApi.reducer, 
    [juzApi.reducerPath]:juzApi.reducer,
    [engQuranApi.reducerPath]:engQuranApi.reducer,
    [searchTextApi.reducerPath]:searchTextApi.reducer,
    [AhadithBooksApi.reducerPath]:AhadithBooksApi.reducer,
    [Manzilapi.reducerPath]:Manzilapi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(Surahapi.middleware,quranApi.middleware,juzApi.middleware,engQuranApi.middleware,searchTextApi.middleware,AhadithBooksApi.middleware,Manzilapi.middleware),
    
});

setupListeners(store.dispatch);
