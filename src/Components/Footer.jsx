import React from 'react'

const Footer = () => {
    return (
        <div className="">
            <div className="bg-[#13253F] ">
                <div className="flex justify-between lg:flex-row md:flex-row flex-col gap-5 flex-wrap px-[10px] lg:px-[50px] py-[30px]">
                    <div className="space-y-5">
                        <div className="">
                            <p className="text-[15px] font-[700] text-[#FFFFFFCC]">Language</p>
                            <select className="border text-[#FFFFFF99] px-[20px] py-[10px] bg-[#13253F] focus:outline-none" name="" id="">
                                <option value="">English</option>
                                <option value="">Hindi</option>
                            </select>
                        </div>
                        <div>
                            <p className="text-[15px] font-[700] text-[#FFFFFFCC]">Currency</p>
                            <select className="border text-[#FFFFFF99] px-[20px] py-[10px] bg-[#13253F] focus:outline-none" name="" id="">
                                <option value="">U.S. Dollor</option>
                                <option value="">INR</option>
                            </select>
                        </div>
                    </div>
                    <div>
                        <ul>
                            <li className="text-[15px] font-[700] text-[#FFFFFFCC]">Companey </li>
                            <li className="text-[15px] font-[400] text-[#FFFFFFCC]">About Us</li>
                            <li className="text-[15px] font-[400] text-[#FFFFFFCC]">Blog</li>
                            <li className="text-[15px] font-[400] text-[#FFFFFFCC]">Press Room</li>
                            <li className="text-[15px] font-[400] text-[#FFFFFFCC]">Careers</li>
                        </ul>
                    </div>
                    <div>
                        <ul>
                            <li className="text-[15px] font-[700] text-[#FFFFFFCC]">Help</li>
                            <li className="text-[15px] font-[400] text-[#FFFFFFCC]">Contact us</li>
                            <li className="text-[15px] font-[400] text-[#FFFFFFCC]">FAQs</li>
                            <li className="text-[15px] font-[400] text-[#FFFFFFCC]">Terms and conditions</li>
                            <li className="text-[15px] font-[400] text-[#FFFFFFCC]">Privacy Policy</li>
                            <li className="text-[15px] font-[400] text-[#FFFFFFCC]">Sitemap</li>
                        </ul>
                    </div>
                    <div>
                        <p className="text-[15px] font-[700] text-[#FFFFFFCC]">Payment Methods Possible</p>
                        <div className="gap-3">

                            <img src="/images/Group 408.png" alt="" />
                            <img src="/images/Group 408.png" alt="" />

                        </div>
                        <p className="text-[15px] font-[400] text-[#FFFFFFCC]">Companey</p>
                        <p className="text-[15px] font-[400] text-[#FFFFFFCC]">Become a Tour guide for Us</p>
                    </div>
                </div>
            </div>
            <div className="bg-[#162c4b] flex gap-5 justify-between flex-wrap px-[10px] lg:px-[50px] py-[30px]">
                <div className="text-[15px] font-[400] text-[#FFFFFFCC]">
                    Copyright 2021 Tour Guide. All Rights Reserved
                </div>
                <div className="flex gap-3   ">
                    <i class="fa-brands fa-instagram"></i>
                    <i class="fa-brands fa-facebook"></i>
                    <i class="fa-brands fa-pinterest"></i>
                    <i class="fa-brands fa-twitter"></i>
                </div>
            </div>
        </div>
    )
}

export default Footer
