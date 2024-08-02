"use client"; // Add this line at the very top
import { useState } from 'react';
import '../../styles/Faq.css'
import Link from 'next/link';
import Image from 'next/image';
import { faq } from "@/data/faq/faq"
import { MdOutlineKeyboardArrowRight, MdOutlineKeyboardArrowDown } from "react-icons/md";

const FaqComponent: React.FC = () => {

    const [openId, setOpenId] = useState<string | null>(faq[0].id);

    const handleToggle = (id: string) => {
        setOpenId(openId === id ? null : id);
    };

    return (
        <>
            <div className='faq_body'>
                <p className='font-inter text-customblack font-bold	font-title text-center'>Frequently Asked Questions</p>
                <div className='faqs_margin flex flex-col gap-7'>
                    {faq.map((item) => (
                        <div key={item.id} className='faqs_desp bg-white'>
                            <div className='flex justify-between items-center'>
                                <p className='font-dmSans text-customblack font-bold faqs_head'>{item.title}</p>
                                <div className={`faq_circle ${openId === item.id ? 'bg-customblack' : 'bg-white'}`} onClick={() => handleToggle(item.id)}>
                                    {openId === item.id ? (
                                        <MdOutlineKeyboardArrowDown className='text-white' style={{ fontSize: "25px" }} />
                                    ) : (
                                        <MdOutlineKeyboardArrowRight style={{ fontSize: "25px" }} />
                                    )}
                                </div>
                            </div>
                            {openId === item.id && (
                                <div className='faq_width'>
                                    <p className='font-dmSans text-lg font-normal text-customblack'>{item.description}</p>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}

export default FaqComponent;