"use client"; // Add this line at the very top
import { useState, useEffect } from 'react';
import '../../styles/Card.css'
import Link from 'next/link';
import Image from 'next/image';
import { card } from "@/data/card/card"
import AOS from 'aos';
import 'aos/dist/aos.css';

type IsMonthlyState = { [key: string]: boolean };

const CardComponent: React.FC = () => {

    const [isMonthly, setIsMonthly] = useState<IsMonthlyState>(() =>
        card.reduce((acc, item) => {
            acc[item.id] = true;
            return acc;
        }, {} as IsMonthlyState)
    );

    const togglePlan = (id: string) => {
        setIsMonthly(prevState => ({ ...prevState, [id]: !prevState[id] }));
    };

    useEffect(() => {
        AOS.init({
            offset: 300,
            duration: 1000,
        });
    }, []); // Run this effect only once when the component mounts

    return (
        <>
            <div className='card_img card_portion pt-10 pb-16'>
                <div className='font-inter card_title font-extrabold text-white text-center' data-aos="fade-up">
                    Become a Cashflow Innovator Now
                </div>
                <div className="grid grid-cols-3 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 sm:gap-8 md:gap-8 lg:gap-3 sm:mt-7 md:mt-7 mt-12 relative card_padding" data-aos="fade-up">
                    {card.map((item) => (
                        <div key={item.id} className="bg-white pt-10 px-5 pb-8 card_body relative">
                            {item.tie && (
                                <div className='flex justify-center'>
                                    <div className='font-inter font-base text-white bg-customorange pl-8 pr-6 py-2.5 w-40 absolute' style={{ borderRadius: "40px", top: "-20px" }}>
                                        {item.tie}
                                    </div>
                                </div>
                            )}
                            <h2 className="font-inter text-4xl sm:text-3xl md:text-3xl lg:text-3xl xl:text-3xl font-semibold text-center">{item.title}</h2>
                            {item.price ? (
                                <p className="text-center pt-2 text-customblue font-inter text-5xl lg:text-4xl xl:text-4xl font-normal">{item.price}</p>
                            ) : (
                                <p className="text-center pt-2 text-customblue font-inter text-3xl sm:text-2xl md:text-2xl lg:text-2xl xl:text-2xl font-normal">{item.desp}</p>
                            )}
                            {item.btn && (
                                <div className='flex items-center justify-center'>
                                    <div className="flex bg-white shadow rounded-full mt-5 w-80 md:w-96 lg:w-64 xl:w-60 2xl:w-72">
                                        <button
                                            className={`px-4 py-2 rounded-full focus:outline-none w-48 font-inter text-xl lg:text-lg xl:text-lg font-normal ${isMonthly[item.id] ? 'bg-customblue text-white' : 'text-gray-600'}`}
                                            onClick={() => togglePlan(item.id)}
                                        >
                                            {item.btn.type1}
                                        </button>
                                        <button
                                            className={`px-4 py-2 rounded-full focus:outline-none w-48 font-inter text-xl lg:text-lg xl:text-lg font-normal ${!isMonthly[item.id] ? 'bg-customblue text-white' : 'text-gray-600'}`}
                                            onClick={() => togglePlan(item.id)}
                                        >
                                            {item.btn.type2}
                                        </button>
                                    </div>
                                </div>
                            )}
                            <div className={item.id === "3" ? 'pl-7 sm:pl-5 lg:pl-3 third_card_padding' : 'pl-12 sm:pl-6 lg:pl-5 xl:pl-8 pt-10'}>
                                <p className="font-inter text-xl sm:text-base xl:text-lg font-bold text-customblack">{item.point}</p>
                                <ul className={item.id === "3" ? 'third_card flex flex-col gap-3' : 'pt-7 flex flex-col gap-3'}>
                                    {(isMonthly[item.id] ? item.descriptions : item.descriptions1 ?? []).map((desc, index) => (
                                        <li key={index} className={`font-inter text-base sm:text-sm xl:text-sm font-normal text-customblack ${item.id === "3" ? 'custom-list-item' : ''}`}>{desc}</li>
                                    ))}
                                </ul>
                            </div>
                            <div className='flex justify-center items-center mt-6'>
                                <button className="bg-customblue text-white font-bold card_btn hover:bg-customorange">{item.button}</button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}

export default CardComponent;