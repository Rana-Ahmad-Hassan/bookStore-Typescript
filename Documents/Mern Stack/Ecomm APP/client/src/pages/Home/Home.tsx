import BestSellers from "../../components/bestSellers/bestSellers"
import Blogs from "../../components/blogs/blogs"
import MainCrousal from "../../components/mainCrousal/mainCrousal"
import News from "../../components/news/news"
import Products from "../../components/products/products"
import Slider from "../../components/slider/slider"

const HomePage = () => {
  return (
    <>
    
    <MainCrousal/>
    <BestSellers/>
    <Products/>
    <Slider/>
    <Blogs/>
    <News/>
    </>
  )
}

export default HomePage