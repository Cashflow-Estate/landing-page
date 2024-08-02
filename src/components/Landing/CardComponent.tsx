"use client"; // Add this line at the very top
import { useState } from 'react';
import '../../styles/Card.css'
import Link from 'next/link';
import Image from 'next/image';
import { card } from "@/data/card/card"


const CardComponent: React.FC = () => {

    const [isMonthly, setIsMonthly] = useState(card.reduce((acc, item) => {
        acc[item.id] = true;
        return acc;
    }, {}));

    const togglePlan = (id) => {
        setIsMonthly(prevState => ({ ...prevState, [id]: !prevState[id] }));
    };

    return (
        <>
            <div className='card_img card_portion pt-10 pb-16'>
                <div className='font-inter text-3xl font-extrabold text-center'>
                    Become a Cashflow Innovator Now
                </div>
                    <div className="grid grid-cols-3 gap-7 mt-12 relative">
                        {card.map((item) => (
                            <div key={item.id} className="bg-white pt-10 px-5 pb-8 card_body relative">
                                {item.tie && (
                                    <div className='flex justify-center'>
                                        <div className='font-inter font-base text-white bg-customorange pl-8 pr-6 py-2.5 w-40 absolute' style={{ borderRadius: "40px", top: "-20px" }}>
                                            {item.tie}
                                        </div>
                                    </div>
                                )}
                                <h2 className="font-inter text-4xl font-semibold text-center">{item.title}</h2>
                                {item.price ? (
                                    <p className="text-center pt-2 text-customblue font-inter text-5xl font-normal">{item.price}</p>
                                ) : (
                                    <p className="text-center pt-2 text-customblue font-inter text-3xl font-normal">{item.desp}</p>
                                )}
                                {item.btn && (
                                    <div className='flex items-center justify-center'>
                                        <div className="flex bg-white shadow rounded-full mt-5 w-80">
                                            <button
                                                className={`px-4 py-2 rounded-full focus:outline-none w-48 font-inter text-xl font-normal ${isMonthly[item.id] ? 'bg-customblue text-white' : 'text-gray-600'}`}
                                                onClick={() => togglePlan(item.id)}
                                            >
                                                {item.btn.type1}
                                            </button>
                                            <button
                                                className={`px-4 py-2 rounded-full focus:outline-none w-48 font-inter text-xl font-normal ${!isMonthly[item.id] ? 'bg-customblue text-white' : 'text-gray-600'}`}
                                                onClick={() => togglePlan(item.id)}
                                            >
                                                {item.btn.type2}
                                            </button>
                                        </div>
                                    </div>
                                )}
                                <div className={item.id === "3" ? 'pl-7' : 'pl-12 pt-10'} style={item.id === "3" ? { paddingTop: "4.7rem" } : {}}>
                                    <p className="font-inter text-xl font-bold text-customblack">{item.point}</p>
                                    <ul className="pt-7 flex flex-col gap-3">
                                        {(isMonthly[item.id] ? item.descriptions : item.descriptions1).map((desc, index) => (
                                            <li key={index} className={`font-inter text-base font-normal text-customblack ${item.id === "3" ? 'custom-list-item' : ''}`}>{desc}</li>
                                        ))}
                                    </ul>
                                </div>
                                <div className='flex justify-center items-center mt-6'>
                                    <button className="bg-customblue text-white px-5 py-3 card_btn">{item.button}</button>
                                </div>
                            </div>
                        ))}
                    </div>
            </div>
        </>
    )
}

export default CardComponent;