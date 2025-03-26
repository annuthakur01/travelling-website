import React from 'react'
import TourLeft from './TourLeft'

const DataList = [
    { id: 1, image: "/images/list1.png", icon: "text-[#FFA432] fa-solid fa-star", review: "(584 Reviews)", title: "Westminster to Greenwich River Thames", time: "2 Hour", transport: "Transport", plan: "Family plan", rate: "$35.00" },
    { id: 2, image: "/images/list1.png", icon: "text-[#FFA432] fa-solid fa-star", review: "(584 Reviews)", title: "Westminster to Greenwich River Thames", time: "2 Hour", transport: "Transport", plan: "Family plan", rate: "$35.00" },
    { id: 3, image: "/images/list1.png", icon: "text-[#FFA432] fa-solid fa-star", review: "(584 Reviews)", title: "Westminster to Greenwich River Thames", time: "2 Hour", transport: "Transport", plan: "Family plan", rate: "$35.00" },
    { id: 4, image: "/images/list1.png", icon: "text-[#FFA432] fa-solid fa-star", review: "(584 Reviews)", title: "Westminster to Greenwich River Thames", time: "2 Hour", transport: "Transport", plan: "Family plan", rate: "$35.00" },
    { id: 5, image: "/images/list1.png", icon: "text-[#FFA432] fa-solid fa-star", review: "(584 Reviews)", title: "Westminster to Greenwich River Thames", time: "2 Hour", transport: "Transport", plan: "Family plan", rate: "$35.00" },
    { id: 6, image: "/images/list1.png", icon: "text-[#FFA432] fa-solid fa-star", review: "(584 Reviews)", title: "Westminster to Greenwich River Thames", time: "2 Hour", transport: "Transport", plan: "Family plan", rate: "$35.00" },
    { id: 7, image: "/images/list1.png", icon: "text-[#FFA432] fa-solid fa-star", review: "(584 Reviews)", title: "Westminster to Greenwich River Thames", time: "2 Hour", transport: "Transport", plan: "Family plan", rate: "$35.00" },
    { id: 8, image: "/images/list1.png", icon: "text-[#FFA432] fa-solid fa-star", review: "(584 Reviews)", title: "Westminster to Greenwich River Thames", time: "2 Hour", transport: "Transport", plan: "Family plan", rate: "$35.00" },
    { id: 9, image: "/images/list1.png", icon: "text-[#FFA432] fa-solid fa-star", review: "(584 Reviews)", title: "Westminster to Greenwich River Thames", time: "2 Hour", transport: "Transport", plan: "Family plan", rate: "$35.00" },

]
const TourList = () => {
    return (
        <div className="bg-gray-100">
            <div className="flex p-16 gap-5 flex-wrap lg:justify-between justify-center items-center">
                <div>
                    <h2 className="text-[#1C2B38] text-[22px] font-[700]">Things To Do In London</h2>
                    <p className="[#778088] text-[15px] lg:text-start md:text-start text-center  font-[600]">49 Activities Found</p>
                </div>
                <div className="lg:flex items-center gap-4">
                    <label htmlFor="" className="text-[15px] font-[700] text-[#1C2B38] ">Sort by:</label>
                    <select className="px-5 py-2 rounded-lg w-[310px] bg-[white] text-[14px] font-[600] text-[#495560]" name="" id="">
                        <option value="">Popularity</option>
                        <option value="">Common</option>
                        <option value="">Prioritise</option>
                    </select>
                </div>
            </div>
            <div className="flex gap-5 px-10 lg:px-20 flex-wrap">
                <TourLeft />
                <div >
                    {DataList.map((item) => {
                        return (
                            <div key={item.id} className="mt-5 lg:gap-20 gap-3 rounded-xl drop-shadow-lg bg-white items-center max-w-[850px] flex py-5 px-5 justify-between flex-wrap">
                                <div className="flex flex-wrap gap-5">
                                    <img src={item.image} alt="" className="lg:w-[150px] md:w-[150px] w-full" />
                                    <div className="flex flex-col justify-evenly">
                                        <div className="flex items-center gap-3">
                                            <div className="text-[11px] hidden lg:block bg-[#7BBCB0] font-[700] text-[white]  rounded-full px-3 py-2">Water Activities</div>
                                            <div className="lg:border-l-2 md:border-l-2 lg:px-3" ><i className={item.icon}></i><i className={item.icon}></i><i className={item.icon}></i><i className={item.icon}></i><i className={item.icon}></i></div>
                                            <p className="text-[#778088] text-[12px] font-[600]">{item.review}</p>
                                        </div>
                                        <h3 className="text-[20px] font-[700] text-[#1C2B38] ">{item.title}</h3>
                                        <div className="flex lg:flex-row md:flex-row flex-col">
                                            <div className="flex text-[#495560] pr-3 items-center gap-5">
                                                <i class="fa-solid fa-clock"></i>
                                                <p>{item.time}</p>
                                            </div>
                                            <div className="flex items-center text-[#495560] lg:border-l-2 lg:px-3 gap-5">
                                                <i class="fa-solid fa-car"></i>
                                                <p>{item.transport}</p>
                                            </div>
                                            <div className="flex items-center text-[#495560] lg:px-3 lg:border-l-2 gap-5">
                                                <i class="fa-solid fa-users"></i>
                                                <p>{item.plan}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="">
                                    <p className="text-[#7BBCB0] text-[20px] font-[700] ">{item.rate}</p>
                                    <p className="text-[12px] font-[400]  text-[#778088]">per person</p>
                                </div>
                            </div>
                        )
                    })}
                    <button className="text-center py-2 text-[16px] font-[700] text-[#7BBCB0] rounded-full w-full border-[#7BBCB0] border-[2px] my-5">Load More</button>
                </div>
            </div>

        </div>
    )
}

export default TourList
