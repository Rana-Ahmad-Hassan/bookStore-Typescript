
// import navbar sidebar components from components folder


import Navbar2 from "../components/navbar/navbar";
import SideBar from "../components/sideBar/Sidebar";
import QuranPak from "../pages/QuranPak/QuranPak";



// import Home from Pages folder in src
import Home from "../pages/home/Home";

// import BrowserRouter Routes and Route from react-router-dom for routing
import { BrowserRouter, Routes, Route } from "react-router-dom"
import SurahPage from "../pages/surahPage/surahPage";
import Footer from "../components/footer/Footer";
import PageWiseQuranData from "../pages/pageWiseQuranData/pageWiseQuranData";
import JuzPage from "../pages/juzPage/juzPage";
import PageWiseEngData from "../components/pageWiseData/pageWiseEnglishData";
import SearchTextPage from "../pages/searchTextPage/searchTextPage";
import AhadithBooks from "../components/ahadithBooks/ahadithBooks";
import ManzilPage from "../pages/manzil/manzilPage";



function AppRoutes() {


    return (
        <>

            {/* BrowserROuter tag */}
            <BrowserRouter>
                <Navbar2 />
                <SideBar />
                {/* Routes tag for defininig the routes */}
                <Routes>
                    {/* Route for the home page or section */}

                    <Route path="/" element={<Home />}></Route>
                    <Route path="/chatAI" element={<h1 className="text-center text-2xl mt-24">
                        Chat AI</h1>} ></Route>
                    <Route path="/QuranPak" element={<QuranPak />}></Route>
                    <Route path="/surah" element={<SurahPage />}></Route>
                    <Route path="/pageWise" element={<PageWiseQuranData />}></Route>
                    <Route path="/juz" element={<JuzPage />}></Route>
                    <Route path="/engPageWise" element={<PageWiseEngData/>}></Route>
                    <Route path="/search" element={<SearchTextPage/>}></Route>
                    <Route path="/Books" element={<AhadithBooks/>}></Route>
                    <Route path="/Manzil" element={<ManzilPage/>}></Route>
                </Routes>
                {/* Routes tag is end here */}
                <Footer />
            </BrowserRouter>
            {/* BrowserRouter tag is end here */}


        </>
    )
}

export default AppRoutes;
