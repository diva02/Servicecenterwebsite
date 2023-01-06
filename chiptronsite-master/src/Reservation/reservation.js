import { useEffect } from "react";

function Reservation() {
  useEffect(() => {});
  return (
    <>
      <div>
      <div className=" w-full flex justify-center  lg:pl-24  lg:text-6xl md:text-5xl text-4xl font-black leading-10 text-center   ">
              <h1 className=" xl:shadow-2xl xl:bg-gray-50 text-indigo-700">Reservation</h1>
                </div>
                <center>
                <div className="w-full  lg:w-1/2   xl:pt-10 lg:pl-24">
                            <div className="flex flex-col items-center xl:justify-start 2xl:justify-end xl:px-0 px-4">
                                <div className="w-full 2xl:w-8/12 mt-3">
                                    <h2 className="text-gray-800  md:text-lg font-bold xl:text-3xl leading-8 tracking-wider">Book a Service</h2>
                                    <div className="mt-4 md:mt-8">
                                        <p className="text-gray-800  text-2xl font-medium">Date</p>
                                        <input className="mt-3 text-base border-2 w-11/12 lg:w-full xl:w-10/12 hover:border-indigo-600 focus:border-indigo-600 focus:outline-none border-black py-5 pl-4 text-gray-800" type="Date" placeholder="date" />
                                    </div>
                                    <div className="mt-4 md:mt-8">
                                        <p className="text-gray-800 text-2xl font-medium">Time</p>
                                        <input className="mt-3 text-base border-2 w-11/12 lg:w-full xl:w-10/12 hover:border-indigo-600 focus:border-indigo-600 focus:outline-none border-black py-5 pl-4 text-gray-800" type="Time" placeholder="9:00" />
                                    </div>
                                    <div className="mt-4 md:mt-8">
                                        <p className="text-gray-800 text-2xl font-medium">Service</p>
                                        <input className="mt-3 text-base border-2 w-11/12 lg:w-full xl:w-10/12 hover:border-indigo-600 focus:border-indigo-600 focus:outline-none border-black py-5 pl-4 text-gray-800" type="text" placeholder="Laptop or Desktop" />
                                    </div>
                                    <div className="mt-4 md:mt-8">
                                        <p className="text-gray-800 text-2xl font-medium">Name</p>
                                        <input className="mt-3 text-base border-2 w-11/12 lg:w-full xl:w-10/12 hover:border-indigo-600 focus:border-indigo-600 focus:outline-none border-black py-5 pl-4 text-gray-800" type="text" placeholder="Ajay" />
                                    </div>
                                    <div className="mt-4 md:mt-8">
                                        <p className="text-gray-800 text-2xl font-medium">Phone</p>
                                        <input className="mt-3 text-base border-2 w-11/12 lg:w-full xl:w-10/12 hover:border-indigo-600 focus:border-indigo-600 focus:outline-none border-black py-5 pl-4 text-gray-800" type="text" placeholder="Mobile number" />
                                    </div>
                                    <div className="mt-4 md:mt-8">
                                        <p className="text-gray-800 text-2xl font-medium">Email Address</p>
                                        <input className="mt-3 text-base border-2 w-11/12 lg:w-full xl:w-10/12 hover:border-indigo-600 focus:border-indigo-600 focus:outline-none border-black py-5 pl-4 text-gray-800" type="email" placeholder="example@mail.com" />
                                    </div>
                                    <div className="mt-4 md:mt-8">
                                        <p className="text-gray-800 text-2xl font-medium">Complaint</p>
                                        <textarea className="mt-3 text-base border-2 w-11/12 lg:w-full xl:w-10/12 resize-none hover:border-indigo-600 focus:border-indigo-600 focus:outline-none border-black xl:h-40 py-5 pl-4 text-gray-800" type="text" placeholder="problems..." defaultValue={""} />
                                    </div>
                                    <div className="py-5">
                                        <button className="py-3 md:py-5 px-5 md:px-10 bg-indigo-700 text-white hover:opacity-90 ease-in duration-150 text-sm md:text-lg tracking-wider font-semibold">Book Service</button>
                                    </div>
                                </div>
                            </div>
                        </div> 
                        </center> 
      </div>
    </>
  );
}

export default Reservation;
