import React from 'react'

const TravelRating = [
    {
        id: 1,
        backgroundimage: 'url("/images/Rectangle 159.png")',
        image: "",
        title: "Wilderlife of Alaska",
        location: "Alaska, USA",
        icon: "fa-solid fa-star",
        rating: "4.9",
        reviews: "(300 reviews)",
        description: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
    },
    // {
    //     id: 2,
    //     backgroundimage: 'url("/images/Rectangle 159.png")',
    //     image: "",
    //     title: "Wilderlife of Alaska",
    //     location: "Alaska, USA",
    //     icon: "fa-solid fa-star",
    //     rating: "4.9",
    //     reviews: "(300 reviews)",
    //     description: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",

    // },
    // {
    //     id: 3,
    //     backgroundimage: 'url("/images/Rectangle 159.png")',
    //     image: "",
    //     title: "Wilderlife of Alaska",
    //     location: "Alaska, USA",
    //     icon: "fa-solid fa-star",
    //     rating: "4.9",
    //     reviews: "(300 reviews)",
    //     description: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
    // },
    // {
    //     id: 4,
    //     bimage: 'url("/images/Rectangle 159.png")',
    //     image: "",
    //     title: "Wilderlife of Alaska",
    //     location: "Alaska, USA",
    //     icon: "fa-solid fa-star",
    //     rating: "4.9",
    //     reviews: "(300 reviews)",
    //     description: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
    // },
]

const TrevelData = () => {
    
    return (
        <div className="flex mt-8 ">
            {TravelRating.map((props) => (
                <div key={props.id} style={{ width: '100%', height: '', backgroundImage:'url("/images/Rectangle 159.png")', backgroundRepeat: "no-repeat"}}>
                    <div className="flex flex-wrap justify-center gap-32 px-[30px] py-[50px] items-center ">
                    <div className="">
                        <img src="/images/crousel-image.png" alt="" />
                    </div>
                    <div className="max-w-[500px]">
                        <p className="bg-[#AFFFF0] text-[12px] font-[600] px-[20px] py-[10px] rounded-[50px] w-[120px]">Trending Now</p>
                        <h1 className="text-[36px] font-[600] text-[white]">{props.title}</h1>
                        <div className="flex gap-2 mt-2 ml-1 text-[white] text-[14px] font-[600]">
                           <p>{props.location}</p>
                           <p className="border-l-[1px] px-2 text-[#FFA432]">
                            <i className={props.icon}></i>
                            <i className={props.icon}></i>
                            <i className={props.icon}></i>
                            <i className={props.icon}></i>
                            <i className={props.icon}></i>

                           </p>
                           <p>{props.rating}</p>
                           <p>{props.reviews}</p>
                        </div>
                        <p className="text-[white] mt-2 ml-1 text-center lg:text-start">{props.description}</p>
                        <div className="flex items-center mt-5 gap-5">
                            <button className="bg-[#FFDA32] px-[30px] py-[10px] rounded-[50px] text-[16px] font-[700]">Book Now</button>
                            <div className="flex gap-2 border-l px-3 text-[white]">
                                <button className="px-3 py-2 bg-stone-400 rounded-[100px]"><i class="fa-solid fa-heart"></i></button>
                                <button  className="px-3 py-2 bg-stone-400 rounded-[100px]"><i class="fa-solid fa-share"></i></button>
                            </div>
                        </div>
                    </div>
                    </div>
                   

                </div>
            ) 
            
            ) }
        </div>
    )
}


export default TrevelData
