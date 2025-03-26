import React from 'react'

const MyProfile = () => {
    return (
        <div className="flex flex-wrap justify-center">
            <div className="lg:max-w-[301px]  w-full">
                <div className='flex flex-col justify-center items-center'>
                    <img src="/images/profile-dp.png" alt="" />
                    <div>
                        <h4 className="text-center text-[24px] font-[700] text-[#1C2B38] ">Masum Rana</h4>
                        <div className="text-center text-[14px] font-[600] text-[#495560]">
                            <p>Gothenburg</p>
                            <p>15th February</p>
                        </div>
                        <div className="mt-5 mx-auto text-center">
                            <button className="bg-[#7BBCB0] w-80 lg:w-full text-[16px] font-[600] px-3 py-5">Profile Information</button>
                            <button className=" text-[16px] w-80 lg:w-full font-[600] px-5 py-5">Booking History</button>
                            <button className=" text-[16px] w-80 lg:w-full font-[600] px-5 py-5">Newsletter Subscription</button>
                            <button className=" text-[16px] w-80 lg:w-full font-[600] px-5 py-5">Manage Notifications</button>
                        </div>
                    </div>
                </div>

            </div>
            <div className="lg:w-[700px] w-full p-10 space-y-20">
                <div className=" space-y-5">
                    <h3 className="text-[#1C2B38] text-[20px] font-[700] ">Personal Information</h3>
                    <div className="space-y-2">
                        <label htmlFor="" className="text-[#1C2B38] text-[15px] font-[600]">Name :</label>
                        <input type="text" placeholder="Full Name" className="w-full bg-[#F4F4F5] text-[#495560] text-[14px] font-[600] py-3 px-4 focus:outline-none rounded-md" />
                    </div>
                    <div className="space-y-2">
                        <label htmlFor="" className="text-[#1C2B38] text-[15px] font-[600]">Date Of Birth :</label>
                        <input type="date" className="w-full bg-[#F4F4F5] py-3 px-4 focus:outline-none text-[#495560] text-[14px] font-[600] rounded-md" />
                    </div>
                    <div className="space-y-2">
                        <label htmlFor="" className="text-[#1C2B38] text-[15px] font-[600]">Name :</label>
                        <input type="number" placeholder="+91-0123456789" className="w-full bg-[#F4F4F5] py-3 px-4 text-[#495560] text-[14px] font-[600] focus:outline-none rounded-md" />
                    </div>
                    <div className="space-y-2">
                        <label htmlFor="" className="text-[#1C2B38] text-[15px] font-[600]">Location :</label>
                        <input type="text" placeholder="Your Location" className="w-full bg-[#F4F4F5] py-3 px-4 text-[#495560] text-[14px] font-[600] focus:outline-none rounded-md" />
                    </div>
                    <button className="bg-[#7BBCB0] py-5 text-center text-[white] text-[18px] font-[600] rounded-md lg:w-[300px] w-full">Save</button>
                </div>
                <div className=" space-y-5">
                    <h3 className="text-[#1C2B38] text-[20px] font-[700] ">Security</h3>
                    <div className="space-y-2">
                        <label htmlFor="" className="text-[#1C2B38] text-[15px] font-[600]">Email Address :</label>
                        <input type="email" placeholder="masumrana15@gmail.com" className="w-full bg-[#F4F4F5] text-[#495560] text-[14px] font-[600] py-3 px-4 focus:outline-none rounded-md" />
                    </div>
                    <div className="space-y-2">
                        <label htmlFor="" className="text-[#1C2B38] text-[15px] font-[600]">Password :</label>
                        <input type="password" placeholder="********" className="w-full bg-[#F4F4F5] py-3 px-4 text-[#495560] text-[14px] font-[600] focus:outline-none rounded-md" />
                    </div>
                    <div className="space-y-2">
                        <label htmlFor="" className="text-[#1C2B38] text-[15px] font-[600]">Confirm Password :</label>
                        <input type="password" placeholder="********" className="w-full bg-[#F4F4F5] py-3 px-4 text-[#495560] text-[14px] font-[600] focus:outline-none rounded-md" />
                    </div>
                    <button className="bg-[#7BBCB0] py-5 text-center text-[white] text-[18px] font-[600] rounded-md lg:w-[300px] w-full">Save</button>
                </div>
            </div>

        </div>
    )
}

export default MyProfile
