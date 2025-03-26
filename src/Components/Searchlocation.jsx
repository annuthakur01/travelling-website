import React from 'react'

const Searchlocation = () => {
    return (
    <div className="flex p-[15px] lg:-mt-14 -mt-24 item-center justify-center ">
        <div className="flex flex-wrap gap-4 shadow-lg shadow-cyan-500/50  bg-[white] rounded-[10px] p-5 justify-around w-[1000px]">
            <div>
                <div className="flex items-center gap-2">
                    <i className="text-[#7BBCB0] fa-solid fa-location-dot"></i>
                    <p className="text-[#7BBCB0] "> Location </p>
                </div>

                <p>Search For A Destination</p>
            </div>
            <div>
            <div className="flex items-center gap-2">
                    <i className="text-[#7BBCB0] fa-solid fa-user"></i>
                    <p className="text-[#7BBCB0] ">Guests  </p>
                </div>
                <p>How many Guests?</p>
            </div>
            <div>
            <div className="flex items-center gap-2">
            <i className=" text-[#7BBCB0] fa-solid fa-user"></i>

                    <p className="text-[#7BBCB0] "> Location </p>
                </div>
                <p>Pick a date</p>
            </div>
            <button className="bg-[#FFDA3280] px-[30px] py-[10px] rounded-[50px]">Search</button>
        </div> 
        </div>
    )
}

export default Searchlocation
