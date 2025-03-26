import React from 'react'
const StoryCard = [
  {
    id: 1,
    image: "/images/Group 37.png",
    dp: "/images/dp.png",
    name: "jackie Moncada",
    title: "7 Signs and Symptoms of Iodine Deficiency"
  },
  {
    id: 2,
    image: "/images/Group 37.png",
    dp: "/images/dp.png",
    name: "jackie Moncada",
    title: "7 Signs and Symptoms of Iodine Deficiency"
  },
  {
    id: 3,
    image: "/images/group1.png",
    dp: "/images/dp.png",
    name: "jackie Moncada",
    title: "7 Signs and Symptoms of Iodine Deficiency"
  },
  {
    id: 4,
    image: "/images/group4.png",
    dp: "/images/dp.png",
    name: "jackie Moncada",
    title: "7 Signs and Symptoms of Iodine Deficiency"
  },
]

function LatestStories() {
  return (
    <div className="mt-5 p-5" >
      <div className="flex space-y-5 lg:justify-between justify-center p-10 items-center flex-wrap ">
        <div className="space-y-5">
          <div className="flex text-[30px]  ml-4">From The Gallery</div>
          <p className=" flex  max-w-[536px] ml-5 lg:text-start md:text-start text-center">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit</p>
        </div>
        
          <button className="  bg-[#495560] rounded-lg max-w-[190] py-1 px-2 text-[#FFFFFF]">View All Images</button>
      
      </div>
      <div className="flex flex-wrap justify-around mt-3 md:gap-4 gap-10 lg:gap-2">
        {StoryCard.map((props) => {
          return (
            <div key={props.id}>
              <img src={props.image} alt="" />
              <div className="p-5">
                <div className="flex items-center mt-2 gap-2">
                  <img src={props.dp} alt="" />
                  <p className="text-[14px] text-[#778088]">{props.name}</p>
                </div>
                <h3 className="mt-3  max-w-[240px]">{props.title}</h3>
              </div>
           

            </div>
          )
        })}
      </div>
    </div>
  )
}

export default LatestStories
