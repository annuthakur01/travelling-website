import React from 'react'


const Hero = () => {
  return (
    <div className="-mt-52"
    style={{ 
      backgroundImage: `url(/images/49.jpg)`, height:`650px`
    }}
    >
      {/* <img className="absolute top-0" src="/images/49.jpg" alt="" /> */}

      <div  className="flex justify-between items-center  flex-col">
        <div className="text-[48px] font-[700] text-center text-[#1C2B38] lg:mt-80 mt-52">We Find The Best Tours For You</div>
        <p className="text-[16px] font-[600] text-center mt-10 max-w-[600px] text-[#1C2B38]">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
        <div className="flex gap-3 items-center mt-5">
          
            <div  className="p-2 bg-[#99ff] rounded-[100px]">
              <div className="p-2 bg-[#9fff] rounded-[100px]">
                <button className="px-2 py-[2px] bg-white rounded-[100px]"><i className="fa-solid text-[#7BBCB0] fa-play"></i></button>
              </div>
            </div>
          
          <div className="font-[700px] text-[20px]">Watch Video</div>
        </div>
      </div>
    </div>
  )
}



export default Hero;
