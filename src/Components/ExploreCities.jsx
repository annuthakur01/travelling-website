import React, { useState } from 'react';

const BtnData = [
    { id: 1, value: "New York" },
    { id: 2, value: "California" },
    { id: 3, value: "Alaska" },
    { id: 4, value: "Sidney" },
    { id: 5, value: "Dubai" },
    { id: 6, value: "London" },
    { id: 7, value: "Tokyo" },
    { id: 8, value: "Delhi" },
];

function ExploreCities() {
    const [activeButton, setActiveButton] = useState(null);

    // Handle button click and set the active button id
    const btnHandler = (id) => {
        setActiveButton(id);
    };

    return (
        <div className="flex mt-[80px] flex-col justify-center items-center">
            {/* Title and description */}
            <div className="flex flex-col items-center mb-8">
                <div className="text-[36px] font-[700] text-[#1C2B38]">Explore Popular Cities</div>
                <p className="text-[#778088] text-center text-[16px] max-w-[700px] font-[600]">
                    Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.
                </p>
            </div>

            {/* Button container */}
            <div className="flex justify-center flex-wrap gap-2">
                {BtnData.map((data) => (
                    <button
                        key={data.id}
                        className="focus:outline-none border-[#7BBCB0] border w-[130px] text-[#495560] rounded-[50px] px-[20px] py-[10px]"
                        onClick={() => btnHandler(data.id)}
                        style={{
                            backgroundColor: activeButton === data.id ? '#7BBCB0' : ''
                          
                        }}
                    >
                        {data.value}
                    </button>
                ))}
            </div>
        </div>
    );
}

export default ExploreCities;
