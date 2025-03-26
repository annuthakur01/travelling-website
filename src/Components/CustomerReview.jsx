
import React from 'react'

const ComentData = [
    { id: 1, dp: "/images/dp.png", name: "Arlene", date: "7 October 2021", icon: "text-[#FFA432] fa-solid fa-star", title: "Good tour, really well organised", description: "The tour was very well organised. One minus is that you get completely bombarded with information. You also have to stand up for too long at the private entrance to the Tower of London, which leads to a lack of time later. Lunch was the same, too stress, the quality was great but you couldn't enjoy it. I'd like to ask the organisers: please", },
    { id: 2, dp: "/images/dp1.png", name: "Jenny Wilson", date: "2 October 2012", icon: "text-[#FFA432] fa-solid fa-star", title: "Good tour, really well organised", description: "The tour was very well organised. One minus is that you get completely bombarded with information. You also have to stand up for too long at the private entrance to the Tower of London, which leads to a lack of time later. Lunch was the same, too stress, the quality was great but you couldn't enjoy it. I'd like to ask the organisers: please", },
    { id: 3, dp: "/images/dp2.png", name: "Jenny Wilson", date: "2 October 2012", icon: "text-[#FFA432] fa-solid fa-star", title: "Good tour, really well organised", description: "The tour was very well organised. One minus is that you get completely bombarded with information. You also have to stand up for too long at the private entrance to the Tower of London, which leads to a lack of time later. Lunch was the same, too stress, the quality was great but you couldn't enjoy it. I'd like to ask the organisers: please", },
    { id: 4, dp: "/images/dp3.png", name: "Jenny Wilson", date: "2 October 2012", icon: "text-[#FFA432] fa-solid fa-star", title: "Good tour, really well organised", description: "The tour was very well organised. One minus is that you get completely bombarded with information. You also have to stand up for too long at the private entrance to the Tower of London, which leads to a lack of time later. Lunch was the same, too stress, the quality was great but you couldn't enjoy it. I'd like to ask the organisers: please", },
    { id: 5, dp: "/images/dp4.png", name: "Jenny Wilson", date: "2 October 2012", icon: "text-[#FFA432] fa-solid fa-star", title: "Good tour, really well organised", description: "The tour was very well organised. One minus is that you get completely bombarded with information. You also have to stand up for too long at the private entrance to the Tower of London, which leads to a lack of time later. Lunch was the same, too stress, the quality was great but you couldn't enjoy it. I'd like to ask the organisers: please", },
]
const CustomerReview = () => {
    return (
        <div className=" px-20 mt-5">
            <div className=" flex  justify-between  ">
                <div>
                    <h3 className="font-[700] text-[22px] ">Customer Review</h3>
                    <div>
                        <h4 className="font-[700] text-[22px] ">4,30</h4>
                        <p>854 reviews</p>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                    </div>
                </div>
                <div>
                    <p>Guide</p>
                    <p>Transportation</p>
                    <p>Value for money</p>
                    <p>Safety</p>
                </div>
            </div>
            <div>
                {ComentData.map((props) => {
                    return (
                        <div key={props.id} className="flex py-10 border-b-2 gap-5 flex-wrap lg:justify-between justify-center items-center">
                            <div className="flex lg:flex-row flex-col gap-5 items-center">
                                <img src={props.dp} alt="" className="h-[60px] w-[60px] rounded-full " />
                                <div>
                                    <div><i className={props.icon}></i> <i className={props.icon}></i> <i className={props.icon}></i> <i className={props.icon}></i> <i className={props.icon}></i></div>
                                    <h5 className="lg:text-start text-center text-[15px] text-[#1C2B38] font-[700]">{props.name}</h5>
                                    <p className="text-[#778088] text-[13px] font-[600]">{props.date}</p>
                                </div>
                            </div>
                            <div>
                                <h4 className="text-[15px] font-[700] text-[#1C2B38]">{props.title}</h4>
                                <p className="max-w-[800px] text-[#495560] text-[15px] font-[400] lg:text-start text-center">{props.description}</p>
                            </div>
                        </div>
                    )
                })}
                <div className="flex justify-center py-5">
                    <a href="#" className="text-[14px] text-center  text-[#7BBCB0] font-[700]">View More Comments</a>
                </div>
            </div>
        </div>
    )
}

export default CustomerReview
