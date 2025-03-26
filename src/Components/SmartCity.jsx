import React from 'react'

const SmartCity = () => {
    return (
        <div className="flex lg:flex-row items-center flex-col-reverse justify-center  px-[30px] py-[50px]"
            style={{ width: '100%', height: '', backgroundImage: 'url("/images/smartcity.png")', backgroundRepeat: "no-repeat" }}>
            <div className="relative lg:w-[440px] h-[560px]">
                <img className="absolute lg:flex hidden top-12 right-0" src="/images/phone1.png" alt="" />
                <img className="absolute " src="/images/phone2.png" alt="" />
            </div>
            <div>
                <h1 className="text-[36px] font-[700] text-[#FFFFFF]">Smart City Tour Mobile App</h1>
                <p className="text-[16px] text-[white] mt-3 font-[700] ml-1">Available on IOS & Android</p>
                <p className="text-[16px] text-[white]  ml-1 max-w-[500px]">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
                <div className="flex ml-2 mt-6 gap-3">
                    <button className="bg-[#FFDA32] text-[16px] font-[700] text-[#1C2B38] flex gap-3 items-center px-[20px] py-[10px] rounded-[50px] "><i class="fa-brands fa-apple"></i>Download For IOS</button>
                    <button className="bg-[#FFDA32] flex gap-3  font-[700] text-[#1C2B38] items-center px-[20px] py-[10px] rounded-[50px] "><i class="fa-brands fa-android"></i>Download For Android</button>
                </div>
            </div>
        </div>
    )
}

export default SmartCity
