import { useEffect } from "react";

function Reservation() {
  useEffect(() => {});
  return (
    <>
      <div>
      <div className="lg:text-6xl md:text-5xl text-4xl font-black leading-10 text-center   ">
              <h1 className=" text-indigo-700">Book a Reservation</h1><br />
                </div>
                <center>
                <div className="w-full lg:w-1/2   xl:pt-10 lg:pl-24">
                            <div className="flex flex-col items-start xl:justify-start 2xl:justify-end xl:px-0 px-4">
                                <div className="w-full 2xl:w-8/12 mt-3">
                                    <h2 className="text-gray-800 text-base md:text-lg leading-8 tracking-wider"></h2>
                                    <div className="mt-4 md:mt-8">
                                        <p className="text-gray-800 text-base font-medium">Date</p>
                                        <input className="mt-3 text-base border-2 w-11/12 lg:w-full xl:w-10/12 hover:border-indigo-600 focus:border-indigo-600 focus:outline-none border-black py-5 pl-4 text-gray-800" type="Date" placeholder="date" />
                                    </div>
                                    <div className="mt-4 md:mt-8">
                                        <p className="text-gray-800 text-base font-medium">Time</p>
                                        <input className="mt-3 text-base border-2 w-11/12 lg:w-full xl:w-10/12 hover:border-indigo-600 focus:border-indigo-600 focus:outline-none border-black py-5 pl-4 text-gray-800" type="Time" placeholder="9:00" />
                                    </div>
                                    <div className="mt-4 md:mt-8">
                                        <p className="text-gray-800 text-base font-medium">Service</p>
                                        <input className="mt-3 text-base border-2 w-11/12 lg:w-full xl:w-10/12 hover:border-indigo-600 focus:border-indigo-600 focus:outline-none border-black py-5 pl-4 text-gray-800" type="text" placeholder="Laptop or Desktop" />
                                    </div>
                                    <div className="mt-4 md:mt-8">
                                        <p className="text-gray-800 text-base font-medium">Name</p>
                                        <input className="mt-3 text-base border-2 w-11/12 lg:w-full xl:w-10/12 hover:border-indigo-600 focus:border-indigo-600 focus:outline-none border-black py-5 pl-4 text-gray-800" type="text" placeholder="Ajay" />
                                    </div>
                                    <div className="mt-4 md:mt-8">
                                        <p className="text-gray-800 text-base font-medium">Phone</p>
                                        <input className="mt-3 text-base border-2 w-11/12 lg:w-full xl:w-10/12 hover:border-indigo-600 focus:border-indigo-600 focus:outline-none border-black py-5 pl-4 text-gray-800" type="text" placeholder="Mobile number" />
                                    </div>
                                    <div className="mt-4 md:mt-8">
                                        <p className="text-gray-800 text-base font-medium">Email Address</p>
                                        <input className="mt-3 text-base border-2 w-11/12 lg:w-full xl:w-10/12 hover:border-indigo-600 focus:border-indigo-600 focus:outline-none border-black py-5 pl-4 text-gray-800" type="email" placeholder="example@mail.com" />
                                    </div>
                                    <div className="mt-4 md:mt-8">
                                        <p className="text-gray-800 text-base font-medium">Complaint</p>
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
