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

    const sectionRefs = useRef([]);

    // Function to add section refs
    const addToSectionRefs = (el) => {
        if (el && !sectionRefs.current.includes(el)) {
            sectionRefs.current.push(el);
        }
    };

    useEffect(() => {
        const handleScroll = () => {
            sectionRefs.current.forEach((section, index) => {
                const sectionRect = section.getBoundingClientRect();
                const isVisible = sectionRect.top < window.innerHeight && sectionRect.bottom > 0;

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
                    <Image src={Circle_bg} alt='' style={{ position: "absolute", left: "2rem", top: "3rem" }} />
                    <Image src={Circle_small} alt='' style={{ position: "absolute", left: "5rem", top: "6rem" }} />
                    <Image src={Circle_bg} alt='' style={{ position: "absolute", right: "8rem", top: "20rem" }} />
                    <Image src={Circle_small} alt='' style={{ position: "absolute", right: "5.9rem", top: "22.5rem" }} />
                    <p className='font-inter why_title font-bold text-center'>Why <span className='text-customorange'>Choose</span> Cashflow Innovator ?</p>
                    <div ref={addToSectionRefs} className={`flex gap-1 justify-center items-center stairs-animation`}
                        style={{ marginTop: "3.125rem" }}>
                        <div className='why_table_title bg-customblue text-white font-inter text-2xl font-bold'>
                            Features
                        </div>
                        <div className='why_table_title1 bg-customblue text-white font-inter text-xl font-bold'>
                            With Cashflow Innovator
                        </div>
                        <div className='why_table_title2 bg-customblue text-white font-inter text-xl font-bold'>
                            Without Cashflow Innovator
                        </div>
                    </div>

                    <div ref={addToSectionRefs} className={`flex gap-1 justify-center items-center stairs-animation`}
                        style={{ marginTop: "0.625rem" }}>
                        <div className='why_table_content bg-white text-customblackish font-inter text-base font-bold'>
                            Stream of Customers
                        </div>
                        <div className='why_table_content1 bg-white text-customblackish'>
                            <div className='w-9 h-9 bg-customlight flex justify-center items-center' style={{ borderRadius: "50px" }}>
                                <TiTick className='text-customgreen text-xl' />
                            </div>
                        </div>
                        <div className='why_table_content2 bg-white text-customblackish'>
                            <div className='bg-customlight flex justify-center items-center' style={{ width: "2.125rem", height: "2.125rem", borderRadius: "4px" }}>
                                <IoCloseSharp className='text-customred text-xl' />
                            </div>
                        </div>
                    </div>

                    <div ref={addToSectionRefs} className={`flex gap-1 justify-center items-center stairs-animation`}
                        style={{ marginTop: "0.625rem" }}>
                        <div className='why_table_content bg-white text-customblackish font-inter text-base font-bold'>
                            Simple Buying Process
                        </div>
                        <div className='why_table_content1 bg-white text-customblackish'>
                            <div className='w-9 h-9 bg-customlight flex justify-center items-center' style={{ borderRadius: "50px" }}>
                                <TiTick className='text-customgreen text-xl' />
                            </div>
                        </div>
                        <div className='why_table_content2 bg-white text-customblackish'>
                            <div className='bg-customlight flex justify-center items-center' style={{ width: "2.125rem", height: "2.125rem", borderRadius: "4px" }}>
                                <IoCloseSharp className='text-customred text-xl' />
                            </div>
                        </div>
                    </div>

                    <div ref={addToSectionRefs} className={`flex gap-1 justify-center items-center stairs-animation`}
                        style={{ marginTop: "0.625rem" }}>
                        <div className='why_table_content bg-white text-customblackish font-inter text-base font-bold'>
                            Sales Grow
                        </div>
                        <div className='why_table_content1 bg-white text-customblackish'>
                            <div className='w-9 h-9 bg-customlight flex justify-center items-center' style={{ borderRadius: "50px" }}>
                                <TiTick className='text-customgreen text-xl' />
                            </div>
                        </div>
                        <div className='why_table_content2 bg-white text-customblackish'>
                            <div className='bg-customlight flex justify-center items-center' style={{ width: "2.125rem", height: "2.125rem", borderRadius: "4px" }}>
                                <IoCloseSharp className='text-customred text-xl' />
                            </div>
                        </div>
                    </div>

                    <div ref={addToSectionRefs} className={`flex gap-1 justify-center items-center stairs-animation`}
                        style={{ marginTop: "0.625rem" }}>
                        <div className='why_table_content bg-white text-customblackish font-inter text-base font-bold'>
                            Opposite of Saddness
                        </div>
                        <div className='why_table_content1 bg-white text-customblackish'>
                            <div className='w-9 h-9 bg-customlight flex justify-center items-center' style={{ borderRadius: "50px" }}>
                                <TiTick className='text-customgreen text-xl' />
                            </div>
                        </div>
                        <div className='why_table_content2 bg-white text-customblackish'>
                            <div className='bg-customlight flex justify-center items-center' style={{ width: "2.125rem", height: "2.125rem", borderRadius: "4px" }}>
                                <IoCloseSharp className='text-customred text-xl' />
                            </div>
                        </div>
                    </div>

                    <div ref={addToSectionRefs} className={`flex gap-1 justify-center items-center stairs-animation`}
                        style={{ marginTop: "0.625rem" }}>
                        <div className='why_table_content bg-white text-customblackish font-inter text-base font-bold'>
                            AI Agent
                        </div>
                        <div className='why_table_content1 bg-white text-customblackish'>
                            <div className='w-9 h-9 bg-customlight flex justify-center items-center' style={{ borderRadius: "50px" }}>
                                <TiTick className='text-customgreen text-xl' />
                            </div>
                        </div>
                        <div className='why_table_content2 bg-white text-customblackish'>
                            <div className='bg-customlight flex justify-center items-center' style={{ width: "2.125rem", height: "2.125rem", borderRadius: "4px" }}>
                                <IoCloseSharp className='text-customred text-xl' />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default WhyComponent;