import React from "react";
function WhyChooseUs() {
    return (
        <>
            <div class="mx-auto container my-0 lg:mt-0 lg:mb-0 dark:bg-white">
             <div className="lg:text-6xl md:text-5xl text-4xl font-black leading-10 text-center  ">
              <h1 className=" text-indigo-700">Why Choose Us ?</h1><br />
                </div>
                <div class="grid-center sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-40 gap-1 gap-x-12 gap-y-1 ">
                    <div class="flex justify-center w-full border-b border-gray-300 py-6">
                        
                        <img src="https://t3.ftcdn.net/jpg/03/75/40/88/360_F_375408810_hLscdrIZGYYgK3XolLEqRO77H7oKJQRq.jpg" height={"100"} width={"100"} alt="" />
                        <div class="text-gray-800 pl-12 w-1/2">
                            <h1 class="font-bold text-2xl lg:text-4xl tracking-1px">Experienced Staffs</h1>
                            <h2 class="text-base lg:text-lg mt-4 leading-8 tracking-wide">Many years of Experience</h2>
                        </div>
                    </div>
                    <div class="flex justify-center w-full border-b border-gray-300 py-6">
                        
                        <img src="data:image/png;base64,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" alt="."></img>
                        <div class="text-gray-800 w-1/2 pl-12">
                            <h1 class="font-bold text-2xl lg:text-4xl tracking-1px">Trust</h1>
                            <h2 class="text-base lg:text-lg mt-4 leading-8 tracking-wide">Since 2014 in Erode</h2>
                        </div>
                    </div>
                    
                   
                </div>
            </div>
            <div class="mx-auto container my-0 lg:mt-0 lg:mb-0 dark:bg-white">
             
                <div class="grid-center gap-x-12 sm:grid-cols-10 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-30 gap-1">
                    
                    
                    <div class="flex justify-center w-full border-b border-gray-300 py-6">
                        
                        <img src="https://cdn-icons-png.flaticon.com/512/18/18154.png" height={"100"} width={"100"} alt="" />
                        <div class="text-gray-800 w-1/2 pl-12">
                            <h1 class="font-bold text-2xl lg:text-4xl tracking-1px">No.1</h1>
                            <h2 class="text-base lg:text-lg mt-4 leading-8 tracking-wide">Service provider in Erode</h2>
                        </div>
                    </div>
                    <div class="flex justify-center w-full py-6 border-b">
                        
                        <img src="https://cdn3.iconfinder.com/data/icons/finance-business-10/32/Service-Care-Quick-Fast-512.png" className="sm:h-6 sm:w-10 md:h-28 md:w-28 xl:h-28 xl:w-28" height={"100"} width={"100"} alt="" />
                        <div class="text-gray-800 w-1/2 pl-12">
                            <h1 class="font-bold text-2xl lg:text-4xl tracking-1px">Faster Services</h1>
                            <h2 class="text-base lg:text-lg mt-4 leading-8 tracking-wide">Faster than any other service center,we fix and diagnose the faults</h2>
                        </div>
                    </div>
                    <div class="flex justify-center w-full py-6">
                        
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTYAS7vLyMJxuojVgr-SrmSxt2m8lY9HcfjQ&usqp=CAU" height={"100"} width={"100"} alt="" />
                        <div class="text-gray-800 w-1/2 pl-12">
                            <h1 class="font-bold text-2xl lg:text-4xl tracking-1px">Competitive Service Rates</h1>
                            <h2 class="text-base lg:text-lg mt-4 leading-8 tracking-wide">Our Services rates are Competitive</h2>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default WhyChooseUs;
