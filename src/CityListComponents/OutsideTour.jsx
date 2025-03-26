import React from 'react'
import FormGallary from '../Components/FormGallary'
import LatestStories from '../Components/LatestStories'
const TravelData = [
    {
        id: 1,
        image: "/images/beach.png",
        title: "Alaska: Westminster to Greenwich River Thames",
        time: "Duration 2 hours",
        transport: "Transport Facility",
        plan: "Family Plan",
        rating: "fa-solid fa-star",
        reviews: "584 reviews",
        rate: " $35.00",


    },
    {
        id: 2,
        image: "/images/Rect.png",
        title: "Alaska: Vintage Double Decker Bus Tour & Thames ",
        time: "Duration 2 hours",
        transport: "Transport Facility",
        plan: "Family Plan",
        rating: "fa-solid fa-star",
        reviews: "584 reviews",
        rate: " $35.00",
    },
    {
        id: 3,
        image: "/images/Rectangle129.png",
        title: "Alaska: Magic of London Tour with Afternoon Tea at ",
        time: "Duration 2 hours",
        transport: "Transport Facility",
        plan: "Family Plan",
        rating: "fa-solid fa-star",
        reviews: "584 reviews",
        rate: " $35.00",
    },
    {
        id: 4,
        image: "/images/road129.png",
        title: "Alaska: Magic of London Tour with Afternoon Tea at  ",
        time: "Duration 2 hours",
        transport: "Transport Facility",
        plan: "Family Plan",
        rating: "fa-solid fa-star",
        reviews: "584 reviews",
        rate: " $35.00",
    },
]

const OutsideTour = () => {
    return (
        <div className="flex pb-10 bg-gray-100 flex-col justify-center ">
            <div className=" px-20 py-5 border-b-2 ">
                <div className="font-[700] text-[36px] text-[#1C2B38]">Outside The City Special</div>
            </div>
            <div className="flex py-5 flex-wrap  justify-center gap-10 lg:justify-between items-center px-20 ">
                <div className="text-[11px] w-28 hidden lg:block bg-[#7BBCB0] font-[700] text-[white]  rounded-full px-3 py-2">Water Activities</div>

                <div className="flex gap-3">
                    <button className="bg-[#FFDA32] py-2 px-3 rounded-[100%]"><i class="fa-solid fa-arrow-left"></i></button>
                    <button className="bg-[#FFDA32] py-2 px-3 rounded-[100%]"><i class="fa-solid fa-arrow-right"></i></button>
                </div>
            </div>

            <div className="flex flex-wrap justify-center  gap-3">
                {TravelData.map((props) => (
                    <div className="p-4 shadow-md "
                        key={props.id}>
                        <img src={props.image} alt="" className="max-w-[235px]" />
                        <div className="p-2">
                            <div>
                                <h3 className="max-w-[200px] font-[400] mt-2 text-[#1C2B38]">{props.title}</h3>
                                <div className="flex flex-col gap-1 mt-3">
                                    <div className="text-[14px] flex items-center gap-2 text-[#495560] font-[400]"><i className="fa-solid fa-clock"></i><p>{props.time}</p></div>
                                    <div className="text-[14px] flex items-center gap-2 text-[#495560] font-[400]"><i class="fa-solid fa-car"></i><p>{props.transport}</p></div>
                                    <div className="text-[14px] flex items-center gap-2 text-[#495560] font-[400]"><i class="fa-solid fa-user"></i><p>{props.plan}</p></div>
                                </div>
                            </div>
                            <div className="flex justify-between border-t-[1px] mt-2 items-center">
                                <div className="mt-2">
                                    <div>
                                        <i className={props.rating}></i>
                                        <i className={props.rating}></i>
                                        <i className={props.rating}></i>
                                        <i className={props.rating}></i>
                                        <i className={props.rating}></i>
                                    </div>
                                    <p>{props.reviews}</p>
                                </div>
                                <div className="mt-2">
                                    <p>{props.rate}</p>
                                    <p>Per person</p>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <div className="flex py-5 flex-wrap  justify-center gap-10 lg:justify-between items-center px-20 ">
                <div className="text-[11px] w-28 hidden lg:block bg-[#59A9FE] font-[700] text-[white]  rounded-full px-5 py-2">Special Food</div>

                <div className="flex gap-3">
                    <button className="bg-[#FFDA32] py-2 px-3 rounded-[100%]"><i class="fa-solid fa-arrow-left"></i></button>
                    <button className="bg-[#FFDA32] py-2 px-3 rounded-[100%]"><i class="fa-solid fa-arrow-right"></i></button>
                </div>
            </div>

            <div className="flex flex-wrap justify-center  gap-3">
                {TravelData.map((props) => (
                    <div className="p-4 shadow-md "
                        key={props.id}>
                        <img src={props.image} alt="" className="max-w-[235px]" />
                        <div className="p-2">
                            <div>
                                <h3 className="max-w-[200px] font-[400] mt-2 text-[#1C2B38]">{props.title}</h3>
                                <div className="flex flex-col gap-1 mt-3">
                                    <div className="text-[14px] flex items-center gap-2 text-[#495560] font-[400]"><i className="fa-solid fa-clock"></i><p>{props.time}</p></div>
                                    <div className="text-[14px] flex items-center gap-2 text-[#495560] font-[400]"><i class="fa-solid fa-car"></i><p>{props.transport}</p></div>
                                    <div className="text-[14px] flex items-center gap-2 text-[#495560] font-[400]"><i class="fa-solid fa-user"></i><p>{props.plan}</p></div>
                                </div>
                            </div>
                            <div className="flex justify-between border-t-[1px] mt-2 items-center">
                                <div className="mt-2">
                                    <div>
                                        <i className={props.rating}></i>
                                        <i className={props.rating}></i>
                                        <i className={props.rating}></i>
                                        <i className={props.rating}></i>
                                        <i className={props.rating}></i>
                                    </div>
                                    <p>{props.reviews}</p>
                                </div>
                                <div className="mt-2">
                                    <p>{props.rate}</p>
                                    <p>Per person</p>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <div className="flex py-5 flex-wrap  justify-center gap-10 lg:justify-between items-center px-20 ">
                <div className="text-[11px] w-28 hidden lg:block bg-[#FF6969] font-[700] text-[white]  rounded-full px-4 py-2">River Activities</div>

                <div className="flex gap-3">
                    <button className="bg-[#FFDA32] py-2 px-3 rounded-[100%]"><i class="fa-solid fa-arrow-left"></i></button>
                    <button className="bg-[#FFDA32] py-2 px-3 rounded-[100%]"><i class="fa-solid fa-arrow-right"></i></button>
                </div>
            </div>

            <div className="flex flex-wrap justify-center  gap-3">
                {TravelData.map((props) => (
                    <div className="p-4 shadow-md "
                        key={props.id}>
                        <img src={props.image} alt="" className="max-w-[235px]" />
                        <div className="p-2">
                            <div>
                                <h3 className="max-w-[200px] font-[400] mt-2 text-[#1C2B38]">{props.title}</h3>
                                <div className="flex flex-col gap-1 mt-3">
                                    <div className="text-[14px] flex items-center gap-2 text-[#495560] font-[400]"><i className="fa-solid fa-clock"></i><p>{props.time}</p></div>
                                    <div className="text-[14px] flex items-center gap-2 text-[#495560] font-[400]"><i class="fa-solid fa-car"></i><p>{props.transport}</p></div>
                                    <div className="text-[14px] flex items-center gap-2 text-[#495560] font-[400]"><i class="fa-solid fa-user"></i><p>{props.plan}</p></div>
                                </div>
                            </div>
                            <div className="flex justify-between border-t-[1px] mt-2 items-center">
                                <div className="mt-2">
                                    <div>
                                        <i className={props.rating}></i>
                                        <i className={props.rating}></i>
                                        <i className={props.rating}></i>
                                        <i className={props.rating}></i>
                                        <i className={props.rating}></i>
                                    </div>
                                    <p>{props.reviews}</p>
                                </div>
                                <div className="mt-2">
                                    <p>{props.rate}</p>
                                    <p>Per person</p>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <FormGallary />
            <LatestStories />



        </div>
    )
}

export default OutsideTour
