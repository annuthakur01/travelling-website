import React from 'react'

const TourLeft = () => {
    return (
        <div className="mt-5">
            <div className="lg:max-w-[270px] rounded-lg drop-shadow-lg bg-white p-5 w-full">
                <p className="text-[#1C2B38] font-[700] py-1 border-b-2">Availability</p>
                <div className="flex flex-col py-3 gap-3">
                    <label htmlFor="" className="text-[15px] font-[700] text-[#1C2B38] ">From</label>
                    <input type="date" className="px-4 w-full py-2 bg-[#F4F4F5] text-[#495560] text-[14px] font-[600]" />
                </div>
                <div className="flex flex-col  gap-3">
                    <label htmlFor="" className="text-[15px] font-[700] text-[#1C2B38] ">To</label>
                    <input type="date" className="px-4 w-full py-2 bg-[#F4F4F5] text-[#495560] text-[14px] font-[600]" />
                </div>
                <button className=" bg-[#7BBCB0] w-full my-5 rounded-md py-2 text-[white]">Check Availability</button>
            </div>
            <div className="lg:max-w-[270px] my-5 rounded-lg drop-shadow-lg bg-white p-5 w-full">
                <select name="" id="" className="w-full focus:outline-none text-[#1C2B38] font-[700] py-3 border-b-2 ">
                    <option value="">Theme</option>
                    <option value="">Filter</option>
                </select>
                <div className="flex items-center w-full my-2 gap-2">
                    <input type="checkbox" />
                    <label htmlFor="" className="text-[#495560] text-[14px] font-[600]">Water activities</label>
                </div>
                <div className="flex items-center w-full my-2 gap-2">
                    <input type="checkbox" />
                    <label htmlFor="" className="text-[#495560] text-[14px] font-[600]">Good for social distancing</label>
                </div>
                <div className="flex items-center w-full my-2 gap-2">
                    <input type="checkbox" />
                    <label htmlFor="" className="text-[#495560] text-[14px] font-[600]">Adrenaline</label>
                </div>
                <div className="flex items-center w-full my-2 gap-2">
                    <input type="checkbox" />
                    <label htmlFor="" className="text-[#495560] text-[14px] font-[600]">Nature</label>
                </div>
                <div className="flex items-center w-full my-2 gap-2">
                    <input type="checkbox" />
                    <label htmlFor="" className="text-[#495560] text-[14px] font-[600]">Hidden Games</label>
                </div>
                <div className="flex items-center w-full my-2 gap-2">
                    <input type="checkbox" />
                    <label htmlFor="" className="text-[#495560] text-[14px] font-[600]">Street art & grafitti</label>
                </div>
                <div className="flex items-center w-full my-2 gap-2">
                    <input type="checkbox" />
                    <label htmlFor="" className="text-[#495560] text-[14px] font-[600]">Food</label>
                </div>
                <a href="" className="text-[#7BBCB0] text-[14px] font-[600] ">Show More Destinations</a>
            </div>
            {/* Duration */}
            <div className="lg:max-w-[270px] my-5 rounded-lg drop-shadow-lg bg-white p-5 w-full">
                <select name="" id="" className="w-full focus:outline-none text-[#1C2B38] font-[700] py-3 border-b-2 ">
                    <option value="">Duration</option>
                    <option value="">Filter</option>
                </select>
                <div className="flex items-center w-full my-2 gap-2">
                    <input type="checkbox" />
                    <label htmlFor="" className="text-[#495560] text-[14px] font-[600]">0 - 3 Hours</label>
                </div>
                <div className="flex items-center w-full my-2 gap-2">
                    <input type="checkbox" />
                    <label htmlFor="" className="text-[#495560] text-[14px] font-[600]">3 - 5 Hours</label>
                </div>
                <div className="flex items-center w-full my-2 gap-2">
                    <input type="checkbox" />
                    <label htmlFor="" className="text-[#495560] text-[14px] font-[600]">5 - 7 Hours</label>
                </div>
                <div className="flex items-center w-full my-2 gap-2">
                    <input type="checkbox" />
                    <label htmlFor="" className="text-[#495560] text-[14px] font-[600]">Full day (7+Hours)</label>
                </div>
                <div className="flex items-center w-full my-2 gap-2">
                    <input type="checkbox" />
                    <label htmlFor="" className="text-[#495560] text-[14px] font-[600]">Multi-day</label>
                </div>
                <a href="" className="text-[#7BBCB0] text-[14px] font-[600] ">Show More Destinations</a>
            </div>
            {/* Destination */}
            <div className="lg:max-w-[270px] my-5 rounded-lg drop-shadow-lg bg-white p-5 w-full">
                <select name="" id="" className="w-full focus:outline-none text-[#1C2B38] font-[700] py-3 border-b-2 ">
                    <option value="">Destination</option>
                    <option value="">Filter</option>
                </select>
                <div className="flex items-center w-full my-2 gap-2">
                    <input type="checkbox" />
                    <label htmlFor="" className="text-[#495560] text-[14px] font-[600]">Biscayne Bay</label>
                </div>
                <div className="flex items-center w-full my-2 gap-2">
                    <input type="checkbox" />
                    <label htmlFor="" className="text-[#495560] text-[14px] font-[600]">Downtown Miami</label>
                </div>
                <div className="flex items-center w-full my-2 gap-2">
                    <input type="checkbox" />
                    <label htmlFor="" className="text-[#495560] text-[14px] font-[600]">Wynwood Arts District</label>
                </div>
                <div className="flex items-center w-full my-2 gap-2">
                    <input type="checkbox" />
                    <label htmlFor="" className="text-[#495560] text-[14px] font-[600]">Port of Miami</label>
                </div>
                <div className="flex items-center w-full my-2 gap-2">
                    <input type="checkbox" />
                    <label htmlFor="" className="text-[#495560] text-[14px] font-[600]">Everglades National Park</label>
                </div>
                <div className="flex items-center w-full my-2 gap-2">
                    <input type="checkbox" />
                    <label htmlFor="" className="text-[#495560] text-[14px] font-[600]">Fisher Island</label>
                </div>
                <a href="" className="text-[#7BBCB0] text-[14px] font-[600] ">Show More Destinations</a>
            </div>
        </div>
    )
}

export default TourLeft
