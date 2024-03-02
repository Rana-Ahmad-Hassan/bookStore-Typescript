import { BrowserRouter, Routes, Route } from "react-router-dom"
import Navbar from "../components/headers/navbar"
import HomePage from "../pages/Home/Home"
import ProductsPage from "../pages/Products/productsPage"
import Footer from "../components/footer/footer"
const AppRoutes = () => {
  return (
    <>
    <BrowserRouter>
    <Navbar/>
    <Routes>
        <Route path="/" element={<HomePage/>}></Route>
        <Route path="/products" element={<ProductsPage/>}></Route>
    </Routes>
    <Footer/>
    </BrowserRouter>
    </>
  )
}

export default AppRoutes