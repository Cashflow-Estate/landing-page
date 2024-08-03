"use client"; // Add this line at the very top
import { useState, useEffect } from 'react';
import '../../styles/Understand.css'
import Link from 'next/link';
import Image from 'next/image';
import { understand } from '@/data/understand/understand';
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import AOS from 'aos';
import 'aos/dist/aos.css';


const UnderstandComponent: React.FC = () => {

    useEffect(() => {
        AOS.init({
            offset: 300,
            duration: 1000,
        });
    }, []); // Run this effect only once when the component mounts

    return (
        <>
            <div className='bg-customligher understand_body'>
                <p className='font-inter text-center text-customblack font-bold understand_title' data-aos="fade-up">
                    Understanding The <span className='text-customorange'>Key</span> Components
                </p>
                <div className="grid grid-cols-3 gap-6 mt-10">
                    {understand.map(item => (
                        <div key={item.id} className='flex flex-col rounded-lg overflow-hidden' data-aos="fade-up">
                            <div className='understand_img relative' style={{ backgroundImage: `url(${item.img})` }}>
                                <div className="bg-customblue pt-5 pb-5 pl-9 pr-3.5 flex justify-between items-center absolute bottom-0 w-full default_div" style={{ borderRadius: "0px 0px 20px 20px;" }}>
                                    <p className='font-inter font-semibold text-xl text-white'>{item.title}</p>
                                    <div className='understand_circle'>
                                        <IoIosArrowUp className='text-base text-customblue arrow-up' />
                                    </div>
                                </div>
                                <div className="bg-customblue pt-5 pb-5 pl-9 pr-3.5 under_body">
                                    <div className='flex justify-between items-center'>
                                        <p className='font-inter font-semibold text-xl text-white'>{item.title}</p>
                                        <div className='understand_circle'>
                                            <IoIosArrowDown className='text-base text-customblue' />
                                        </div>
                                    </div>
                                    <p className='bg-customblue desp_body font-inter text-base font-medium text-white'>{item.desp}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}

export default UnderstandComponent;