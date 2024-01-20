
import { FaSpinner } from "react-icons/fa"

const PreLoader = () => {
  return (
    <>
       <div className="flex items-center flex-col justify-center bg-black text-white h-screen">
        <h1 className="text-4xl text-yellowish ">مكتبة الأحاديث</h1>
        <FaSpinner className="animate-spin text-4xl text-[#FFCE81]" /></div>
    </>
  )
}

export default PreLoader