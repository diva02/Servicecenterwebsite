import React, { useState } from "react";
import Lottie from "lottie-react";
import Service from "./38834-service-animation.json"
import OurService from "../shopservices/shopservice";
import WhyChooseUs from "../why_choose_us/whychoose";
import Reservation from "../Reservation/reservation";
import Brands from "../Brands/Brands";
export default function Hero() {
    const [show, setShow] = useState(null);
    
    return (
        <>
            
        <div className="pt-12 bg-white overflow-y-hidden">
            {/* Code block starts */}
            <dh-component>
                <nav className="w-full">
                    <div className="container mx-auto px-6 flex items-center justify-between">
                        <div>
                            <button onClick={() => setShow(!show)} className="sm:block md:hidden lg:hidden text-gray-500 hover:text-gray-700 focus:text-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500">
                                {/* <img className="h-8 w-8" src="https://tuk-cdn.s3.amazonaws.com/can-uploader/center_aligned_with_image-svg4.svg" alt="show" /> */}
                            </button>
                            <div id="menu" className={`md:block lg:block ${show ? '' : 'hidden'}`}>
                                <button onClick={() => setShow(!show)} className="block md:hidden lg:hidden text-gray-500 hover:text-gray-700 focus:text-gray-700 fixed focus:outline-none focus:ring-2 focus:ring-gray-500 bg-white md:bg-transparent z-30 top-0 mt-3">
                                    <img className="h-8 w-8" src="https://tuk-cdn.s3.amazonaws.com/can-uploader/center_aligned_with_image-svg5.svg" alt="hide" />
                                </button>
                                
                            </div>
                        </div>
                    </div>
                </nav>
                <div className="w-full ">
                    <div className="mt-0 relative rounded-lg bg-indigo-700 w-fill flex flex-col items-center pt-10 sm:pt-24 pb-24 sm:pb-32 md:pb-48 lg:pb-56 xl:pb-64">
                        <img className="mr-2 lg:mr-12 mt-2 lg:mt-12 absolute right-0 top-0" src="https://tuk-cdn.s3.amazonaws.com/can-uploader/center_aligned_with_image-svg2.svg" alt="bg" />
                        <img className="ml-2 lg:ml-12 mb-2 lg:mb-12 absolute bottom-0 left-0" src="https://tuk-cdn.s3.amazonaws.com/can-uploader/center_aligned_with_image-svg3.svg" alt="bg" />
                        <div className="w-11/12 sm:w-2/3 mb-5 sm:mb-7">
                            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-center text-white font-bold leading-tight ">We're here for you whenever you need us</h1>
                        </div>
                        {/* <div className="flex justify-center items-center mb-10 sm:mb-20">
                            <button className="hover:text-white hover:bg-transparent lg:text-xl hover:border-white border bg-white transition duration-150 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2 ring-offset-indigo-700	focus:ring-white rounded text-indigo-700 px-4 sm:px-8 py-1 sm:py-3 text-sm">Get Started</button>
                            <button className="hover:bg-white hover:text-indigo-600 lg:text-xl hover:border-indigo-600 ml-3 sm:ml-6 bg-transparent transition duration-150 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2 ring-offset-indigo-700 focus:ring-white hover:bg-indigo-700-800 rounded border border-white text-white px-4 sm:px-8 py-1 sm:py-3 text-sm">Learn More</button>
                        </div> */}
                    </div>
                    <div className="container mx-auto flex justify-center md:-mt-80 -mt-20 sm:-mt-40">
                        <div className="relative sm:w-3/5 w-7/12 md:w-1/2">
                            {/* <img src="https://tuk-cdn.s3.amazonaws.com/assets/components/hero/h_2.png" alt="Sample Page" role="img" /> */}
                            <Lottie animationData={Service} className=" pb-0 " />
                        </div>
                    </div>
                </div>
            </dh-component>
            {/* Code block ends */}
        </div>
        <OurService />
        <WhyChooseUs /> 
        <br />
        <br /> 
        <Brands /> 
        <Reservation />
        
        </>
    );
}
