import React from 'react'


// react Icons
import { FaFacebook } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";
import { FaYoutube } from "react-icons/fa";
import { PiInstagramLogoFill } from "react-icons/pi";




const Footer: React.FC = () => {


  // mainPagesLinksName Array of objects
  const mainPagesLinksName = [
    { name: 'Quran' },
    { name: 'Hadith' },
    { name: 'Books' },
    { name: 'Search Text' },
    { name: 'AI Chatbot' },
    { name: 'Biographies' },
    { name: 'Prayer Timings' },
    { name: 'Zakat Calculator' },
    { name: 'Hijri Calender' },
    { name: 'Articles' },
    { name: 'Arabic Course' },
  ]

  //  frequentlyVisitedLinksName of objects
  const frequentlyVisitedLinksName = [
    { name: 'Surah al-Fatiha' },
    { name: 'Surah al-Kahf' },
    { name: 'Surah Ya-Sin' },
    { name: 'Surah al-Mulk' },
    { name: 'Sahih Bukhari' },
    { name: 'Sahih Muslim' },
    { name: 'Sunan Abhu Dawud' },
    { name: 'Jamia Sunan Tirmidhi' },
    { name: 'Sunan Nasai' },
    { name: 'Sunan Ibn Majah ' },
  ]

  // organizationLinksName Array of ojects
  const organizationLinksName = [
    { name: 'About Us' },
    { name: 'Feedback' },
    { name: 'Help/Faqs' },
    { name: 'Contact Us' },
    { name: 'Updates' },
    { name: 'Developers' },
    { name: 'Privacy Policy' },
    { name: 'Term of Use' },
  ]

  return (
    <>


      {/* This is the main Footer tag for thr footer component */}
      <footer style={{ backgroundColor: '#737373' }}>

        {/* This id the div to warp the footer section elements */}
        <div className=" 2xl:px-16 xl:px-16 lg:px-16 md:px-8 sm:px-4 px-4 pt-52 ">

          {/* Grid to divide the footer into various section */}
          <div className="grid  2xl:grid-cols-12    xl:grid-cols-12 lg:grid-cols-12 md:grid-cols-8  gap-16  text-white">





            {/* This is the section number 1 */}
            <div className='col-span-3 flex flex-col items-center'>
              <h1 className='text-white 2xl:text-5xl xl:text-4xl lg:text-3xl md:text-3xl sm:text-2xl text-2xl mb-10'>مكتبة الأحاديث</h1>
              <p className='2xl:text-lg xl:text-lg lg:text-lg md:text-lg sm:text-sm text-sm  text-center'>Maktabatulhadith.com makes it easy for everyone to read, learn and research Islamic texts by provision of the diverse library of Quran Pak, Ahadith, and other books with a wide range of advanced and modern tools.</p>

              <div className='justify-center flex mt-10'>
                <button className='px-5 py-3 bg-slate-700 hover:bg-orange-500 rounded'>Read More</button>
              </div>
            </div>

            {/* End of the section number 1 */}




            {/* This is the section number 2 */}
            <div className='col-span-2'>
              <p className='text-2xl lg:text-lg'>MAIN PAGES</p>
              <div className='flex flex-col gap-y-3 mt-11 text-lg'>
                {
                  mainPagesLinksName.map((item, i) => {
                    return (
                      <a key={i} href="" className='text-gray-400'>{item?.name}</a>
                    )
                  })
                }

              </div>
            </div>
            {/* End of the section number 2 */}



            {/* This is the section number 3 */}
            <div className='col-span-2'>
              <p className='text-2xl lg:text-lg'>FREQUENTLY VISITED</p>
              <div className='flex flex-col gap-y-3 mt-11 text-lg'>
                {
                  frequentlyVisitedLinksName.map((item, i) => {
                    return (
                      <a key={i} href="" className='text-gray-400'>{item?.name}</a>
                    )
                  })
                }


              </div>
            </div>
            {/* End of section no 3 */}



            {/* This is the section no 4 */}
            <div className='col-span-2'>
              <p className='text-2xl lg:text-lg'>ORGANIZATION</p>
              <div className='flex flex-col gap-y-3 mt-11 text-lg'>
                {
                  organizationLinksName.map((item, i) => {
                    return (
                      <a key={i} href="" className='text-gray-400'>{item?.name}</a>
                    )
                  })
                }


              </div>
            </div>
            {/* End of the section number 4 */}



            {/* This is the section number 5 */}
            <div className='col-span-3'>
              <p className='text-2xl lg:text-lg'>NEWSLETTER SIGN UP</p>
              <p className='text-xl text-gray-400 my-9'>Subscribe to our newsletter for free and never miss out with our latest features and updates!</p>

              <div >
                <input type="email" placeholder='Enter your mail' className='bg-gray-800 border-0 w-64' /> <br />
                <button className='bg-[#FFCE81] font-bold text-black text-lg px-7 py-2 mt-3 w-64 hover:bg-orange-500 hover:text-white'>Subscribe</button>
              </div>

              <div className='mt-10'>
                <p className='text-2xl'>CONNECT WITH US</p>
              </div>

              <div className='flex flex-row gap-x-5 my-5'>
                <FaFacebook size={30} className='cursor-pointer hover:text-orange-500' />
                <IoLogoWhatsapp size={30} className='cursor-pointer hover:text-orange-500' />
                <FaYoutube size={30} className='cursor-pointer hover:text-orange-500' />
                <PiInstagramLogoFill size={30} className='cursor-pointer hover:text-orange-500' />
              </div>

              <p className='text-lg'>Email us at:frazaslam10@gmail.com</p>
            </div>
            {/* End of the section number 5 */}



          </div>
        </div>



        {/* This is the bottom company copyright section */}
        <div className="grid grid-cols-1 mt-10 2xl:px-32">
          <hr />
          <p className='text-white text-center text-lg my-5'>Copyright @ Muktaba tul Ahadith. All Right Reserved.</p>
        </div>
        {/* End of the copyright section */}
      </footer>
      {/* This is the end of footer tag */}

    </>
  )
}

export default Footer;