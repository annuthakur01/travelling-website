import { data } from 'autoprefixer'
import React from 'react'
const Info = [
    { id: 1, icon: "fa-solid fa-ban", title: "Free cancellation", description: "Cancel up to 24 hours in advance to receive a full refund", },
    { id: 2, icon: "fa-solid fa-ban", title: "Free cancellation", description: "Cancel up to 24 hours in advance to receive a full refund", },
    { id: 3, icon: "fa-solid fa-ban", title: "Free cancellation", description: "Cancel up to 24 hours in advance to receive a full refund", },
    { id: 4, icon: "fa-solid fa-ban", title: "Free cancellation", description: "Cancel up to 24 hours in advance to receive a full refund", },
    { id: 5, icon: "fa-solid fa-ban", title: "Free cancellation", description: "Cancel up to 24 hours in advance to receive a full refund", },
    { id: 6, icon: "fa-solid fa-ban", title: "Free cancellation", description: "Cancel up to 24 hours in advance to receive a full refund", },
]

const TourDescription = [
    { id: 1, description: "See the highlights of London via 2 classic modes of transport on this half-day adventure. First, you will enjoy great views of Westminster Abbey, the Houses of Parliament, and the London Eye, as you meander through the historic streets on board a vintage double decker bus.", },
    { id: 2, description: "See the highlights of London via 2 classic modes of transport on this half-day adventure. First, you will enjoy great views of Westminster Abbey, the Houses of Parliament, and the London Eye, as you meander through the historic streets on board a vintage double decker bus.", },
    { id: 3, description: "See the highlights of London via 2 classic modes of transport on this half-day adventure. First, you will enjoy great views of Westminster Abbey, the Houses of Parliament, and the London Eye, as you meander through the historic streets on board a vintage double decker bus.", },
    { id: 4, description: "See the highlights of London via 2 classic modes of transport on this half-day adventure. First, you will enjoy great views of Westminster Abbey, the Houses of Parliament, and the London Eye, as you meander through the historic streets on board a vintage double decker bus.", },

]

const TourInfo = () => {
    return (
        <div className="lg:px-20 ">
            <div className="max-w-[750px] border gap-10 px-[20px] py-10 rounded-lg justify-center items-center  flex flex-wrap ">
                {Info.map((props) => {
                    return (
                        <div key={props.id}>
                            <div className="flex items-center gap-1">
                                <div className="text-[#7BBCB0]"><i className={props.icon}></i></div>
                                <div className=" font-[700] text-[16px] text-[#1C2B38]">{props.title}</div>
                            </div>
                            <p className="max-w-[270px] text-[14px] font-[400] text-[#495560] mt-2 ml-5">{props.description}</p>
                        </div>
                    )
                })}
            </div>
            <div className="max-w-[750px] p-5 mt-6 border-b-2">
                <h3 className=" font-[600] text-[22px] text-[#1C2B38]">Description</h3>
                {TourDescription.map((data) => {
                    return (
                        <div key={data.id}>
                            <p className="mt-10 font-[400] text-[15px] text-[#495560]">{data.description}</p>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default TourInfo
