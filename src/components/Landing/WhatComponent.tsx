"use client"; // Add this line at the very top
import { useState, useEffect, useRef } from 'react';
import '../../styles/What.css'
import Link from 'next/link';
import Image from 'next/image';
// import ImageWrapper from '../../data/imagewrapper/imagewrapper';
import Left from '../../../public/images/what/left.png'
import Right from '../../../public/images/what/right.png'
import Vector_one from '../../../public/images/what/Vector1.png'
import Vector from '../../../public/images/what/Vector.png'
import Garden from '../../../public/images/what/garden.png'
import Cross from '../../../public/images/what/cross.png'
import Group from '../../../public/images/what/Group.png'
import Group_one from '../../../public/images/what/Group1.png'
import Group_two from '../../../public/images/what/Group2.png'
import Group_three from '../../../public/images/what/Group3.png'
import Bank from '../../../public/images/what/bank.png'
import Grouping from '../../../public/images/what/grouping.png'
import Laptop from '../../../public/images/what/laptop.png'
import Left_arrow from '../../../public/images/what/left_arrow.png'
import Right_arrow from '../../../public/images/what/right_arrow.png'
import { IoHome } from "react-icons/io5";
import { FaBuilding } from "react-icons/fa";
import { IoPersonSharp } from "react-icons/io5";
import { FaMoneyBill } from "react-icons/fa";
import AOS from 'aos';
import 'aos/dist/aos.css';


const WhatComponent: React.FC = () => {

    const sectionRefs = useRef<HTMLDivElement[]>([]);
    const imageRefs = useRef<HTMLImageElement[]>([]);

    // Function to add section refs
    const addToSectionRefs = (el: HTMLDivElement) => {
        if (el && !sectionRefs.current.includes(el)) {
            sectionRefs.current.push(el);
        }
    };

    // Function to add image refs
    const addToImageRefs = (el: HTMLImageElement) => {
        if (el && !imageRefs.current.includes(el)) {
            imageRefs.current.push(el);
        }
    };

    useEffect(() => {
        const handleScroll = () => {
            sectionRefs.current.forEach((section, index) => {
                const sectionRect = section.getBoundingClientRect();
                const isVisible = sectionRect.top < window.innerHeight && sectionRect.bottom > 0;

                if (isVisible) {
                    if (imageRefs.current[index]) {
                        imageRefs.current[index].classList.add('animate');
                    }
                    section.style.opacity = '1';
                } else {
                    if (imageRefs.current[index]) {
                        imageRefs.current[index].classList.remove('animate');
                    }
                    section.style.opacity = '0.5';
                }

                console.log(`Section ${index} visibility: ${isVisible}`);
            });
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        AOS.init({
            offset: 300,
            duration: 1000,
        });
    }, []); // Run this effect only once when the component mounts

    return (
        <>
            <div className='what_body'>
                <div className='what_box relative'>
                    <Image src={Left} alt='' style={{ position: "absolute", left: "0", top: "0", zIndex: "0" }} />
                    <p className='font-inter what_title font-extrabold text-center' data-aos="fade-up">What Are <span className='text-customorange'>Slow</span> Flips?</p>
                    <div className='flex justify-center' data-aos="fade-up">
                        <div className='what_desp_width'>
                            <p className='font-inter font-semibold what_desp text-center mt-2.5 z-10 relative'>The process of buying a real estate property that provides you money upfront and generates you cashflow every month without having to be a landlord. </p>
                        </div>
                    </div>
                    <div ref={addToSectionRefs} className='flex justify-between items-center what_pad relative' style={{ marginTop: "4.5rem", opacity: '0.5', transition: 'opacity 0.5s' }}>
                        <p className='font-inter what_no font-semibold text-customblue'>01</p>
                        <div className='what_sub_box relative flex justify-center items-center flex-col' data-aos="fade-up">
                            <Image src={Vector_one} alt='' style={{ position: "absolute", top: "0", left: "0" }} />
                            <IoHome className='text-customblue text-7xl text-center' />
                            <div className='w-72 mt-7'>
                                <p className='font-inter text-customblack text-2xl font-semibold text-center'>Buy a Slow Flip Property and Make no Repairs.</p>
                            </div>
                        </div>
                        <div className='what_sub_box1 z-10' data-aos="fade-up">
                            <Image src={Garden} alt='' className='h-full' />
                        </div>
                    </div>
                    <div className='flex items-center justify-between mt-16 whats_pad relative'>
                        <Image src={Group_three} alt='' />
                        <Image src={Left_arrow} alt='' className='lefts_arrow left_arrow_play' ref={addToImageRefs} />
                    </div>

                    <div ref={addToSectionRefs} className='flex justify-between items-center what_pad1 relative' style={{ marginTop: "3.063rem", opacity: '0.5', transition: 'opacity 0.5s' }}>
                        <p className='font-inter what_no1 font-semibold text-customblue'>02</p>
                        <div className='what_sub_box1 z-10' data-aos="fade-up">
                            <Image src={Bank} alt='' className='h-full' />
                        </div>
                        <div className='what_sub_box relative flex justify-center items-center flex-col' data-aos="fade-up">
                            <Image src={Vector} alt='' style={{ position: "absolute", top: "0", right: "0" }} />
                            <FaBuilding className='text-customblue text-7xl text-center' />
                            <div className='w-80 mt-7'>
                                <p className='font-inter text-customblack text-2xl font-semibold text-center'>Close on Your Slow Flip Property With a Title Company.</p>
                            </div>
                        </div>
                    </div>

                    <div className='mt-16 flex justify-end relative group_one'>
                        <Image src={Group_three} alt='' />
                        <Image src={Right_arrow} alt='' className='rights_arrow left_arrow_play' ref={addToImageRefs} />
                    </div>

                    <div ref={addToSectionRefs} className='flex justify-between items-center what_pad relative' style={{ marginTop: "3.063rem", opacity: '0.5', transition: 'opacity 0.5s' }}>
                        <p className='font-inter what_no2 font-semibold text-customblue'>03</p>
                        <div className='what_sub_box relative flex justify-center items-center flex-col' data-aos="fade-up">
                            <Image src={Vector_one} alt='' style={{ position: "absolute", top: "0", left: "0" }} />
                            <IoPersonSharp className='text-customblue text-7xl text-center' />
                            <div className='w-80 mt-7'>
                                <p className='font-inter text-customblack text-2xl font-semibold text-center'>Sell Your Slow Flip To An Owner Occupant With Owner Financing, As Is.</p>
                            </div>
                        </div>
                        <div className='what_sub_box1 z-10' data-aos="fade-up">
                            <Image src={Grouping} alt='' className='h-full' />
                        </div>
                    </div>

                    <div className='mt-16 relative'>
                            <Image src={Left_arrow} alt='' className='lefts_arrow1 left_arrow_play' ref={addToImageRefs} />
                    </div>

                    <div className='relative z-10'>
                        <div ref={addToSectionRefs} className='flex justify-between items-center what_pad relative' style={{ marginTop: "12.8rem", opacity: '0.5', transition: 'opacity 0.5s' }}>
                            <p className='font-inter what_no3 font-semibold text-customblue'>04</p>
                            <div className='what_sub_box1 z-10' data-aos="fade-up">
                                <Image src={Laptop} alt='' className='h-full' />
                            </div>
                            <div className='what_sub_box relative flex justify-center items-center flex-col z-10' data-aos="fade-up">
                                <Image src={Vector} alt='' style={{ position: "absolute", top: "0", right: "0" }} />
                                <FaMoneyBill className='text-customblue text-7xl text-center' />
                                <div className='last_width mt-7'>
                                    <p className='font-inter text-customblack text-2xl font-semibold text-center'>Collect Your Monthly Payments On Autopilot Using Cashflow Innovator.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='flex justify-center relative' style={{ marginTop: "4.5rem" }}>
                        {/* <Image src={Group} alt='' style={{ paddingTop: "2.313rem" }} /> */}
                        <button className='font-inter what_btn bg-customorange text-2xl text-white z-10'>Become A CashFlow Innovator Today</button>
                        <Image src={Group_two} alt='' className='groups_img' />
                    </div>
                    <Image src={Right} alt='' style={{ position: "absolute", right: "0", bottom: "0", zIndex: "0" }} />
                </div>
            </div>
        </>
    )
}

export default WhatComponent;