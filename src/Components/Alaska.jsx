import React from 'react'

const Alaska = () => {
    return (
        <div className="flex justify-center mt-20 ">
        
            <div className="flex flex-col items-center" style={{
                width: '80%',
                height: '400px',
                backgroundImage: 'url("/images/156.png")',
               
            }}>
                <div className=" flex flex-wrap mt-80 gap-20 shadow-md shadow-cyan-500/50  p-[40px] max-w-[90%] justify-between bg-[white] ">
                    <div className="flex justify-center max-w-[465px]  flex-col">
                        <div className="text-[64px] ">Alaska</div>
                        <p className="text-[#778088] text-[16px]">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
                    </div>
                    <div className="flex max-w-[250px] gap-1 flex-wrap">
                        <div className="flex  text-[#D176E0] rounded-[10px] shadow-sm shadow-cyan-500/50  px-3 py-2 gap-2 items-center">
                            <i class="fa-solid fa-bus"></i>
                            <div className=" text-[#D176E0] text-[14px] font-[700]">Public Transportations</div>

                        </div>
                        <div>
                            <div className="flex text-[#7BBCB0] rounded-[10px] shadow-sm shadow-cyan-500/50  px-3 py-2 gap-2 items-center">
                                <i className="fa-solid fa-feather-pointed"></i>
                                <div className="text-[#7BBCB0] text-[14px] font-[700]   ">Nature & Adventure</div>

                            </div>
                        </div>
                        <div>
                            <div className="flex text-[#FC3131] rounded-[10px] shadow-sm shadow-cyan-500/50  px-3 py-2">
                                <i className="fa-solid fa-signature-lock"></i>
                                <div className=" text-[#FC3131] text-[14px] font-[700]">Business Tours</div>

                            </div>
                        </div>
                        <div>
                            <div className="flex text-[#5C9BDE] rounded-[10px] shadow-sm shadow-cyan-500/50  px-3 py-2">
                                <i className="fa-solid fa-signature-lock"></i>
                                <div className=" text-[#5C9BDE] text-[14px] font-[700]">Business Tours</div>

                            </div>
                        </div>
                        <div>
                            <div className="flex text-[#E4B613] rounded-[10px] shadow-sm shadow-cyan-500/50  px-3 py-2">
                                <i className="fa-solid fa-signature-lock"></i>
                                <div className=" text-[#E4B613] text-[14px] font-[700]">Business Tours</div>

                            </div>
                        </div>

                    </div>


                </div>

            </div>


        </div>
    )
}

export default Alaska
