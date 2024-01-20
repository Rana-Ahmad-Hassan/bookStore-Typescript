import React, { useState } from "react";

// Import Iscons from React Icons
import { RxCross1 } from "react-icons/rx";
import { IoReorderThree } from "react-icons/io5";
import { FaRobot } from "react-icons/fa";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { TbVaccineBottle } from "react-icons/tb";
import { FaCalendarCheck } from "react-icons/fa";


// Import Link from React Router Dom
import { Link } from "react-router-dom";

const SideBar: React.FC = () => {


    // Array of side bar menues with multiple objects
    const menus = [
        { name: "AI Chatbot", link: "/chatAI", icon: FaRobot },
        { name: "Prayer Timings", link: "/", icon: BsFillMoonStarsFill },
        { name: "Zakat Calculator", link: "/", icon: TbVaccineBottle },
        { name: "Hijri Calender", link: "/", icon: FaCalendarCheck },


    ];

    // State for handling the toggle functionality of the sideBar
    const [open, setOpen] = useState(false);

    return (


        // This is the main section div of the sideBar
        <section className="flex flex-col  relative z-50 sideBar" style={{ overflowY: "scroll" }}>


            {/* The second main div for wrapping the elements of sideBar */}
            <div
                className={`h-screen absolute transition-all  duration-500 text-gray-100 px-4 ${open ? "w-72" : "w-20"
                    }`}
                style={{
                    position: "fixed",
                    top: 0,
                    left: 0,
                    backgroundColor: open ? 'rgba(255, 206, 129, 0.9)' : 'transparent',
                    backdropFilter: open ? 'blur(10px)' : 'none',
                }}
            >

                {/* This is the div for the toggle button for sideBar */}
                <div className=" flex justify-end pt-7">
                    {open ? (
                        <RxCross1
                            onClick={() => setOpen(!open)}
                            size={50}
                            className="cursor-pointer text-yellow-500"
                        />
                    ) : (
                        <IoReorderThree
                            onClick={() => setOpen(!open)}
                            size={50}
                            className="cursor-pointer text-orange-900   lg:mt-0 md:mt-20 mt-10 sm:mt-10"
                        />
                    )}
                </div>
                {/* End of the toggle bar div */}



                {/* This div contains the sideBar navigation links */}
                <div className={`mt-4 ${open ? "block" : "hidden"} flex flex-col gap-4`}>

                    {/* We can just map over the sideBar menus array */}
                    {menus?.map((menu, i) => (
                        <Link
                            to={menu?.link}
                            className={`group flex items-center text-sm gap-3.5 font-medium p-2 hover:bg-orange-500 rounded-md ${open ? "mt-5" : "hidden"
                                }`}
                        >
                            {open && (
                                <div className="text-black">{React.createElement(menu?.icon, { size: "30" })}</div>
                            )}
                            <h2
                                className={`transition-all text-2xl font-normal duration-500 whitespace-pre ${!open && "opacity-0 translate-x-28 overflow-hidden"
                                    }`}
                                style={{
                                    transitionDelay: `${i + 3}00ms`,
                                    color: "black"
                                }}
                            >
                                {menu?.name}
                            </h2>
                        </Link>
                    ))}
                </div>
                {/* This is the end of the sideBar navigation links div */}

            </div>
            {/* End of the second main wrapper div */}


        </section>
        // End of the section div
    );
};

export default SideBar;
