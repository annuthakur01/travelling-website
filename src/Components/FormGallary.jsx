import React from 'react'
const GalleryImg = [
    {
        id: 1,
        Image: "/images/rode 148.png"
    },
    {
        id: 2,
        Image: "/images/crousel-image.png"
    },
    {
        id: 3,
        Image: "/images/sky.png"
    },
    {
        id: 4,
        Image: "/images/Rectangle 152.png"
    },
    {
        id: 5,
        Image: "/images/Rectangle 151.png"
    },
    {
        id: 6,
        Image: "/images/Rectangle 154.png"
    },
    {
        id: 7,
        Image: "/images/Rectangle 155.png"
    },
    {
        id: 8,
        Image: "/images/Rectangle 154.png"
    },

]

function FormGallary() {
    return (
        <div className="max-w-[1340px] flex flex-col justify-center">
            <div className="flex space-y-5 lg:justify-between justify-center items-center  p-14 flex-wrap ">
                <div className=" ">
                    <div className="flex text-[30px]  ml-4">From The Gallery</div>
                    <p className=" flex lg:text-start md:text-start text-center max-w-[536px] ml-5 ">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit</p>
                </div>
                <div className=" flex ">
                    <div className="  bg-[#495560] rounded-lg max-w-[190] py-1 px-2 text-[#FFFFFF]"><button>View All Images</button></div>
                </div>
            </div>
            <div className="flex flex-wrap justify-center ">
                {GalleryImg.map((props) => {
                    return (
                        <div key={props.id} className="p-2">
                            <img src={props.Image} alt="" />
                        </div>
                    )
                })}
            </div>

        </div>


    )
}

export default FormGallary
