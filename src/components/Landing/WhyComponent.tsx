"use client"; // Add this line at the very top
import { useState, useEffect, useRef } from 'react';
import '../../styles/Why.css'
import Link from 'next/link';
import Image from 'next/image';
import { TiTick } from "react-icons/ti";
import { IoCloseSharp } from "react-icons/io5";
import Circle_bg from '../../../public/images/why/circle_big.png'
import Circle_small from '../../../public/images/why/circle_small.png'

const WhyComponent: React.FC = () => {

    // Typing the useRef to hold an array of HTMLDivElement elements
    const sectionRefs = useRef<HTMLDivElement[]>([]);

    // Function to add section refs
    const addToSectionRefs = (el: HTMLDivElement) => {
        if (el && !sectionRefs.current.includes(el)) {
            sectionRefs.current.push(el);
        }
    };

    useEffect(() => {
        const handleScroll = () => {
            sectionRefs.current.forEach((section) => {
                const sectionRect = section.getBoundingClientRect();
                const isVisible = sectionRect.top < window.innerHeight;

                if (isVisible) {
                    section.classList.add('show');
                } else {
                    section.classList.remove('show');
                }
            });
        };

        window.addEventListener('scroll', handleScroll);
        // Trigger scroll event on mount to check initial visibility
        handleScroll();
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <>
            <div className='body_why'>
                <div className='why_box relative'>
                    <Image src={Circle_bg} alt='' className='dot' />
                    <Image src={Circle_small} alt='' className='dot_one' />
                    <Image src={Circle_bg} alt='' className='dot_two'  />
                    <Image src={Circle_small} alt='' className='dot_three' />
                    <p className='font-inter why_title font-bold text-center'>Why <span className='text-customorange'>Choose</span> Cashflow Innovator ?</p>
                    <div ref={addToSectionRefs} className={`flex gap-1 justify-center items-center stairs-animation table_margin`}>
                        <div className='why_table_title bg-customblue text-white font-inter text-2xl sm:text-base md:text-lg lg:text-lg xl:text-xl font-bold text-center'>
                            Features
                        </div>
                        <div className='why_table_title1 bg-customblue text-white font-inter text-xl sm:text-xs md:text-base lg:text-base xl:text-lg font-bold text-center'>
                            With Cashflow Innovator
                        </div>
                        <div className='why_table_title2 bg-customblue text-white font-inter text-xl sm:text-xs md:text-base lg:text-base xl:text-lg font-bold text-center'>
                            Without Cashflow Innovator
                        </div>
                    </div>

                    <div ref={addToSectionRefs} className={`flex gap-1 justify-center items-center stairs-animation`}
                        style={{ marginTop: "0.625rem" }}>
                        <div className='why_table_content bg-white text-customblackish font-inter text-base sm:text-xs md:text-sm lg:text-sm xl:text-sm 2xl:text-sm	text-center font-bold flex items-center justify-center'>
                            Stream of Customers
                        </div>
                        <div className='why_table_content1 bg-white text-customblackish'>
                            <div className='w-9 h-9 bg-customlight flex justify-center items-center' style={{ borderRadius: "50px" }}>
                                <TiTick className='text-customgreen text-2xl' />
                            </div>
                        </div>
                        <div className='why_table_content2 bg-white text-customblackish'>
                            <div className='bg-customlight flex justify-center items-center' style={{ width: "2.125rem", height: "2.125rem", borderRadius: "4px" }}>
                                <IoCloseSharp className='text-customred text-2xl' />
                            </div>
                        </div>
                    </div>

                    <div ref={addToSectionRefs} className={`flex gap-1 justify-center items-center stairs-animation`}
                        style={{ marginTop: "0.625rem" }}>
                        <div className='why_table_content bg-white text-customblackish font-inter text-base sm:text-xs md:text-sm lg:text-sm xl:text-sm 2xl:text-sm text-center font-bold flex items-center justify-center'>
                        Automatic Amortization Calculation
                        </div>
                        <div className='why_table_content1 bg-white text-customblackish'>
                            <div className='w-9 h-9 bg-customlight flex justify-center items-center' style={{ borderRadius: "50px" }}>
                                <TiTick className='text-customgreen text-2xl' />
                            </div>
                        </div>
                        <div className='why_table_content2 bg-white text-customblackish'>
                            <div className='bg-customlight flex justify-center items-center' style={{ width: "2.125rem", height: "2.125rem", borderRadius: "4px" }}>
                                <IoCloseSharp className='text-customred text-2xl' />
                            </div>
                        </div>
                    </div>

                    <div ref={addToSectionRefs} className={`flex gap-1 justify-center items-center stairs-animation`}
                        style={{ marginTop: "0.625rem" }}>
                        <div className='why_table_content bg-white text-customblackish font-inter text-base sm:text-xs md:text-sm lg:text-sm xl:text-sm 2xl:text-sm text-center font-bold flex items-center justify-center'>
                        Automatic Payment Collection 
                        </div>
                        <div className='why_table_content1 bg-white text-customblackish'>
                            <div className='w-9 h-9 bg-customlight flex justify-center items-center' style={{ borderRadius: "50px" }}>
                                <TiTick className='text-customgreen text-2xl' />
                            </div>
                        </div>
                        <div className='why_table_content2 bg-white text-customblackish'>
                            <div className='bg-customlight flex justify-center items-center' style={{ width: "2.125rem", height: "2.125rem", borderRadius: "4px" }}>
                                <IoCloseSharp className='text-customred text-2xl' />
                            </div>
                        </div>
                    </div>

                    <div ref={addToSectionRefs} className={`flex gap-1 justify-center items-center stairs-animation`}
                        style={{ marginTop: "0.625rem" }}>
                        <div className='why_table_content bg-white text-customblackish font-inter text-base sm:text-xs md:text-sm lg:text-sm xl:text-sm 2xl:text-sm text-center font-bold flex items-center justify-center'>
                        Eviction Initiating
                        </div>
                        <div className='why_table_content1 bg-white text-customblackish'>
                            <div className='w-9 h-9 bg-customlight flex justify-center items-center' style={{ borderRadius: "50px" }}>
                                <TiTick className='text-customgreen text-2xl' />
                            </div>
                        </div>
                        <div className='why_table_content2 bg-white text-customblackish'>
                            <div className='bg-customlight flex justify-center items-center' style={{ width: "2.125rem", height: "2.125rem", borderRadius: "4px" }}>
                                <IoCloseSharp className='text-customred text-2xl' />
                            </div>
                        </div>
                    </div>

                    <div ref={addToSectionRefs} className={`flex gap-1 justify-center items-center stairs-animation`}
                        style={{ marginTop: "0.625rem" }}>
                        <div className='why_table_content bg-white text-customblackish font-inter text-base sm:text-xs md:text-sm lg:text-sm xl:text-sm 2xl:text-sm text-center font-bold flex justify-center items-center'>
                        AI Property Management
                        </div>
                        <div className='why_table_content1 bg-white text-customblackish'>
                            <div className='w-9 h-9 bg-customlight flex justify-center items-center' style={{ borderRadius: "50px" }}>
                                <TiTick className='text-customgreen text-2xl' />
                            </div>
                        </div>
                        <div className='why_table_content2 bg-white text-customblackish'>
                            <div className='bg-customlight flex justify-center items-center' style={{ width: "2.125rem", height: "2.125rem", borderRadius: "4px" }}>
                                <IoCloseSharp className='text-customred text-2xl' />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default WhyComponent;