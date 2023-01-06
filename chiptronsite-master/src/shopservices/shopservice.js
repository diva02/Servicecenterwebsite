import React from "react";

export default function OurService() {
  return (
    <div className="dark:bg-white">
      <section className="mx-auto container py-20 ">
        <div className="flex justify-center items-center flex-col">
          <div className="lg:text-6xl md:text-5xl text-4xl font-black leading-10 text-center ">
            <h1 className=" shadow-2xl bg-gray-50 text-indigo-700" >Our Laptop Services</h1>
          </div>
          <div className="pt-24 grid lg:grid-cols-3 md:grid-cols-2 justify-center items-center xl:gap-y-16 gap-y-20 gap-x-16 lg:gap-x-20 xl:gap-x-0 lg:px-10 xl:px-0">
            <div className="cursor-pointer hover:shadow py-6 xl:px-4 rounded xl:w-96 w-60 flex justify-center items-center flex-col">
              <div className="mb-6">
              <img src="https://cdn-icons-png.flaticon.com/512/78/78951.png" height={"80"} width={"80"} alt="" />
              </div>
              <div className="text-gray-800 dark:text-black text-2xl font-semibold text-center">
                <h2>Screen Replacement</h2>
              </div>
             
            </div>
            <div className="cursor-pointer hover:shadow py-6 xl:px-4 rounded xl:w-96 w-60 flex justify-center items-center flex-col">
              <div className="mb-6">
                
              <img src="https://cdn-icons-png.flaticon.com/512/22/22885.png" height={"80"} width={"80"} alt="" />
              </div>
              <div className="text-gray-800 dark:text-black text-2xl font-semibold text-center">
                <h2>Battery Replacement</h2>
              </div>
              
            </div>
            <div className="cursor-pointer hover:shadow py-6 xl:px-4 rounded xl:w-96 w-60 flex justify-center items-center flex-col">
              <div className="mb-6">
               
                <img src="https://cdn-icons-png.flaticon.com/512/4565/4565653.png" height={"80"} width={"80"} alt="" />
              </div>
              <div className="text-gray-800 dark:text-black text-2xl font-semibold text-center">
                <h2>Keyboard Replacement</h2>
              </div>
              
            </div>
            <div className="cursor-pointer hover:shadow py-6 xl:px-4 rounded xl:w-96 w-60 flex justify-center items-center flex-col">
              <div className="mb-6">
                
                <img src="https://cdn-icons-png.flaticon.com/512/22/22909.png" height={"90"} width={"90"} alt="" />
              </div>
              <div className="text-gray-800 dark:text-black text-2xl font-semibold text-center">
                <h2>Panel Replacement</h2>
              </div>
             
            </div>
            <div className="cursor-pointer hover:shadow py-6 xl:px-4 rounded xl:w-96 w-60 flex justify-center items-center flex-col">
              <div className="mb-6">
                
                <img src="https://cdn-icons-png.flaticon.com/512/849/849940.png" height={"90"} width={"90"} alt="" />
              </div>
              <div className="text-gray-800 dark:text-black text-2xl font-semibold text-center">
                <h2>Software Upgradation</h2>
              </div>
              
            </div>
            <div className="cursor-pointer hover:shadow py-6 xl:px-4 rounded xl:w-96 w-60 flex justify-center items-center flex-col">
              <div className="mb-6">
               
                <img src="https://cdn-icons-png.flaticon.com/512/1909/1909723.png" height={"90"} width={"90"} alt="" />
              </div>
              <div className="text-gray-800 dark:text-black text-2xl font-semibold text-center">
                <h2>Chip Level Services</h2>
              </div>              
            </div>

            <div className="cursor-pointer hover:shadow py-6 xl:px-4 rounded xl:w-96 w-60 flex justify-center items-center flex-col">
              <div className="mb-6">
               
                <img src="https://cdn-icons-png.flaticon.com/512/666/666511.png" height={"90"} width={"90"} alt="" />
              </div>
              <div className="text-gray-800 dark:text-black text-2xl font-semibold text-center">
                <h2>Data Recovery</h2>
              </div>              
            </div>
             
            <div className="cursor-pointer hover:shadow py-6 xl:px-4 rounded xl:w-96 w-60 flex justify-center items-center flex-col">
              <div className="mb-6">
               
                <img src="https://static.thenounproject.com/png/4756574-200.png" height={"90"} width={"90"} alt="" />
              </div>
              <div className="text-gray-800 dark:text-black text-2xl font-semibold text-center">
                <h2>Memory Upgrades</h2>
              </div>              
            </div>
            
          </div>
        </div>
      </section>
    </div>
  );
}