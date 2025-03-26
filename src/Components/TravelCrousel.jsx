import React from 'react'

const CrouselData = [
    {
        id: 1,
        image: "./images/beach.png",
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
        image: "./images/Rect.png",
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
        image: "./images/Rectangle129.png",
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
        image: "./images/road129.png",
        title: "Alaska: Magic of London Tour with Afternoon Tea at  ",
        time: "Duration 2 hours",
        transport: "Transport Facility",
        plan: "Family Plan",
        rating: "fa-solid fa-star",
        reviews: "584 reviews",
        rate: " $35.00",
    },
    {
        id: 5,
        image: "./images/road129.png",
        title: "Alaska: Magic of London Tour with Afternoon Tea at  ",
        time: "Duration 2 hours",
        transport: "Transport Facility",
        plan: "Family Plan",
        rating: "fa-solid fa-star",
        reviews: "584 reviews",
        rate: " $35.00",
    },
    {
        id: 6,
        image: "./images/road129.png",
        title: "Alaska: Magic of London Tour with Afternoon Tea at  ",
        time: "Duration 2 hours",
        transport: "Transport Facility",
        plan: "Family Plan",
        rating: "fa-solid fa-star",
        reviews: "584 reviews",
        rate: " $35.00",
    },
    {
        id: 7,
        image: "./images/road129.png",
        title: "Alaska: Magic of London Tour with Afternoon Tea at  ",
        time: "Duration 2 hours",
        transport: "Transport Facility",
        plan: "Family Plan",
        rating: "fa-solid fa-star",
        reviews: "584 reviews",
        rate: " $35.00",
    },
    {
        id: 8,
        image: "./images/road129.png",
        title: "Alaska: Magic of London Tour with Afternoon Tea at  ",
        time: "Duration 2 hours",
        transport: "Transport Facility",
        plan: "Family Plan",
        rating: "fa-solid fa-star",
        reviews: "584 reviews",
        rate: " $35.00",
    },



]

const TravelCrousel = () => {
    return (
        <div className="overflow-x-hidden  mt-10 justify-center items-center">
            <div className="flex flex-wrap  justify-center lg:justify-between items-center p-16 ">
                <div>
                    <div className="font-[700] text-[36px] text-[#1C2B38]">Featured Destinations</div>
                    <p className="max-w-[530px] text-[16px] font-[600] text-[#778088] mt-3">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit</p>
                </div>
                <div className="flex gap-3">
                    <button className="bg-[#FFDA32] py-2 px-3 rounded-[100%]"><i class="fa-solid fa-arrow-left"></i></button>
                    <button className="bg-[#FFDA32] py-2 px-3 rounded-[100%]"><i class="fa-solid fa-arrow-right"></i></button>
                </div>
            </div>
            <div className="flex justify-center  gap-8">
                {CrouselData.map((props) => (
                    <div className="p-4 shadow-md min-w-64"
                        key={props.id}>
                        <img src={props.image} alt="" />
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
        </div>

    )
}

export default TravelCrousel
