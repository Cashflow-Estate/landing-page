"use client"; // Add this line at the very top
import { useState, useEffect } from 'react';
import '../../styles/Test.css'
import Link from 'next/link';
import Image from 'next/image';
import Group from '../../../public/images/testmonial/Group.png'
import Group_one from '../../../public/images/testmonial/Group1.png'
import Group_two from '../../../public/images/testmonial/Group2.png'
import Group_three from '../../../public/images/testmonial/Group3.png'
import Group_four from '../../../public/images/testmonial/Group4.png'
import Group_five from '../../../public/images/testmonial/Group5.png'
import Group_six from '../../../public/images/testmonial/Group6.png'
import Circle from '../../../public/images/testmonial/circle.png'
import Signature from '../../../public/images/testmonial/signature.png'
import Star from '../../../public/images/testmonial/star.png'
import { ImQuotesLeft, ImQuotesRight } from "react-icons/im";
import AOS from 'aos';
import 'aos/dist/aos.css';

const TestmonialComponent: React.FC = () => {

    useEffect(() => {
        const wrappers = Array.from(document.querySelectorAll<HTMLDivElement>(".img__w"));
        const calDeg = 360 / wrappers.length;

        wrappers.forEach((wrp, idx) => {
            wrp.style.transform = `translate(-50%, 0%) rotate(${calDeg * idx}deg)`;
        });
    }, []);

    return (
        <>
            <div className='pt-12 relative'>
                <div className='flex justify-center'>
                    <div className='test_width'>
                        <p className='font-inter text-customblack test_title font-bold text-center text-center'>
                            What Other Cashflow Innovators Are <span className='text-customorange'>Saying</span> About The <span className='text-customorange'>Platform</span>
                        </p>
                    </div>
                </div>
                <div className='mt-6'>
                    <div className="elementor-widget-container">
                        <div className="elementor-shortcode">
                            <div className="imgs rotating">
                                <div className="img__w " style={{ transform: "translate(-50%, 0%) rotate(0deg)" }}>
                                    <div className="img">
                                        <Image src={Group} alt='test' className='circle_img_one' />
                                    </div>
                                </div>
                                <div className="img__w " style={{ transform: "translate(-50%, 0%) rotate(10deg)" }}>
                                    <div className="img">
                                        <Image src={Group} alt='test' className='circle_img_one' />
                                    </div>
                                </div>
                                <div className="img__w " style={{ transform: "translate(-50%, 0%) rotate(20deg)" }}>
                                    <div className="img">
                                        <Image src={Group_one} alt='test' className='circle_img_one' />
                                    </div>
                                </div>
                                <div className="img__w " style={{ transform: "translate(-50%, 0%) rotate(30deg)" }}>
                                    <div className="img">
                                        <Image src={Group_two} alt='test' className='circle_img_one' />
                                    </div>
                                </div>
                                <div className="img__w " style={{ transform: "translate(-50%, 0%) rotate(40deg)" }} >
                                    <div className="img">
                                        <Image src={Group_three} alt='test' className='circle_img_one' />
                                    </div>
                                </div>
                                <div className="img__w " style={{ transform: "translate(-50%, 0%) rotate(50deg)" }}>
                                    <div className="img">
                                        <Image src={Group_four} alt='test' className='circle_img_one' />
                                    </div>
                                </div>
                                <div className="img__w " style={{ transform: "translate(-50%, 0%) rotate(60deg)" }}>
                                    <div className="img">
                                        <Image src={Group_five} alt='test' className='circle_img_one' />
                                    </div>
                                </div>
                                <div className="img__w " style={{ transform: "translate(-50%, 0%) rotate(70deg)" }} >
                                    <div className="img">
                                        <Image src={Group_six} alt='test' className='circle_img_one' />
                                    </div>
                                </div>
                                <div className="img__w " style={{ transform: "translate(-50%, 0%) rotate(80deg)" }} >
                                    <div className="img">
                                        <Image src={Group} alt='test' className='circle_img_one' />
                                    </div>
                                </div>
                                <div className="img__w " style={{ transform: "translate(-50%, 0%) rotate(90deg)" }}>
                                    <div className="img">
                                        <Image src={Group_one} alt='test' className='circle_img_one' />
                                    </div>
                                </div>
                                <div className="img__w " style={{ transform: "translate(-50%, 0%) rotate(100deg)" }} >
                                    <div className="img">
                                        <Image src={Group_two} alt='test' className='circle_img_one' />
                                    </div>
                                </div>
                                <div className="img__w " style={{ transform: "translate(-50%, 0%) rotate(110deg)" }} >
                                    <div className="img">
                                        <Image src={Group_three} alt='test' className='circle_img_one' />
                                    </div>
                                </div>
                                <div className="img__w " style={{ transform: "translate(-50%, 0%) rotate(120deg)" }} >
                                    <div className="img">
                                        <Image src={Group_four} alt='test' className='circle_img_one' />
                                    </div>
                                </div>
                                <div className="img__w " style={{ transform: "translate(-50%, 0%) rotate(130deg)" }} >
                                    <div className="img">
                                        <Image src={Group_five} alt='test' className='circle_img_one' />
                                    </div>
                                </div>
                                <div className="img__w " style={{ transform: "translate(-50%, 0%) rotate(140deg)" }} >
                                    <div className="img">
                                        <Image src={Group_six} alt='test' className='circle_img_one' />
                                    </div>
                                </div>
                                <div className="img__w " style={{ transform: "translate(-50%, 0%) rotate(150deg)" }} >
                                    <div className="img">
                                        <Image src={Group} alt='test' className='circle_img_one' />
                                    </div>
                                </div>
                                <div className="img__w " style={{ transform: "translate(-50%, 0%) rotate(160deg)" }} >
                                    <div className="img">
                                        <Image src={Group_one} alt='test' className='circle_img_one' />
                                    </div>
                                </div>
                                <div className="img__w " style={{ transform: "translate(-50%, 0%) rotate(170deg)" }} >
                                    <div className="img">
                                        <Image src={Group_two} alt='test' className='circle_img_one' />
                                    </div>
                                </div>
                                <div className="img__w " style={{ transform: "translate(-50%, 0%) rotate(180deg)" }} >
                                    <div className="img">
                                        <Image src={Group_three} alt='test' className='circle_img_one' />
                                    </div>
                                </div>
                                <div className="img__w " style={{ transform: "translate(-50%, 0%) rotate(190deg)" }} >
                                    <div className="img">
                                        <Image src={Group_four} alt='test' className='circle_img_one' />
                                    </div>
                                </div>
                                <div className="img__w " style={{ transform: "translate(-50%, 0%) rotate(200deg)" }} >
                                    <div className="img">
                                        <Image src={Group_five} alt='test' className='circle_img_one' />
                                    </div>
                                </div>
                                <div className="img__w " style={{ transform: "translate(-50%, 0%) rotate(210deg)" }} >
                                    <div className="img">
                                        <Image src={Group_six} alt='test' className='circle_img_one' />
                                    </div>
                                </div>
                                <div className="img__w " style={{ transform: "translate(-50%, 0%) rotate(220deg)" }} >
                                    <div className="img">
                                        <Image src={Group} alt='test' className='circle_img_one' />
                                    </div>
                                </div>
                                <div className="img__w " style={{ transform: "translate(-50%, 0%) rotate(230deg)" }} >
                                    <div className="img">
                                        <Image src={Group_one} alt='test' className='circle_img_one' />
                                    </div>
                                </div>
                                <div className="img__w " style={{ transform: "translate(-50%, 0%) rotate(240deg)" }} >
                                    <div className="img">
                                        <Image src={Group_two} alt='test' className='circle_img_one' />
                                    </div>
                                </div>
                                <div className="img__w " style={{ transform: "translate(-50%, 0%) rotate(250deg)" }} >
                                    <div className="img">
                                        <Image src={Group_three} alt='test' className='circle_img_one' />
                                    </div>
                                </div>
                                <div className="img__w " style={{ transform: "translate(-50%, 0%) rotate(260deg)" }} >
                                    <div className="img">
                                        <Image src={Group_four} alt='test' className='circle_img_one' />
                                    </div>
                                </div>
                                <div className="img__w " style={{ transform: "translate(-50%, 0%) rotate(270deg)" }} >
                                    <div className="img">
                                        <Image src={Group_five} alt='test' className='circle_img_one' />
                                    </div>
                                </div>
                                <div className="img__w " style={{ transform: "translate(-50%, 0%) rotate(280deg)" }} >
                                    <div className="img">
                                        <Image src={Group_six} alt='test' className='circle_img_one' />
                                    </div>
                                </div>
                                <div className="img__w " style={{ transform: "translate(-50%, 0%) rotate(290deg)" }} >
                                    <div className="img">
                                        <Image src={Group} alt='test' className='circle_img_one' />
                                    </div>
                                </div>
                                <div className="img__w " style={{ transform: "translate(-50%, 0%) rotate(300deg)" }} >
                                    <div className="img">
                                        <Image src={Group_one} alt='test' className='circle_img_one' />
                                    </div>
                                </div>
                                <div className="img__w " style={{ transform: "translate(-50%, 0%) rotate(310deg)" }} >
                                    <div className="img">
                                        <Image src={Group_two} alt='test' className='circle_img_one' />
                                    </div>
                                </div>
                                <div className="img__w " style={{ transform: "translate(-50%, 0%) rotate(320deg)" }} >
                                    <div className="img">
                                        <Image src={Group_three} alt='test' className='circle_img_one' />
                                    </div>
                                </div>
                                <div className="img__w " style={{ transform: "translate(-50%, 0%) rotate(330deg)" }} >
                                    <div className="img">
                                        <Image src={Group_four} alt='test' className='circle_img_one' />
                                    </div>
                                </div>
                                <div className="img__w " style={{ transform: "translate(-50%, 0%) rotate(340deg)" }} >
                                    <div className="img">
                                        <Image src={Group_five} alt='test' className='circle_img_one' />
                                    </div>
                                </div>
                                <div className="img__w " style={{ transform: "translate(-50%, 0%) rotate(350deg)" }} >
                                    <div className="img">
                                        <Image src={Group_six} alt='test' className='circle_img_one' />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='flex justify-center absolute top-0 left-0 w-full testmonial_box'>
                        <div className='test_box relative'>
                            <div className='test_quotes'>
                                <div className='bg-customblack test_circle'>
                                    <ImQuotesLeft className='text-white test_icon' />
                                </div>
                            </div>
                            <div className='flex justify-center absolute top-0 left-0 w-full circle_img'>
                                <Image src={Circle} alt='circle' className='circle_img_width' />
                            </div>
                            <p className='font-inter text-xl sm:hidden md:text-sm lg:text-lg font-medium line'>Their team's commitment to finding properties that generate</p>
                            <p className='font-inter text-xl sm:hidden md:text-sm lg:text-lg font-medium'>positive cash flow was evident, as they presented me with several</p>
                            <p className='font-inter text-xl sm:hidden md:text-sm lg:text-lg font-medium px-4'>lucrative opportunities that aligned perfectly with my financial</p>
                            <p className='font-inter text-xl sm:hidden md:text-sm lg:text-lg font-medium px-4'>objectives. They took the time to educate me on market trends,</p>
                            <p className='font-inter text-xl sm:hidden md:text-sm lg:text-lg font-medium'>potential risks, and the benefits of each property, ensuring I made</p>
                            <p className='font-inter text-xl sm:hidden md:text-sm lg:text-lg font-medium text-center'>informed decisions.</p>

                            <p className='font-inter text-xl sm:text-sm md:text-sm lg:text-lg font-medium line sm:block hidden'>Their team's commitment to finding properties</p>
                            <p className='font-inter text-xl sm:text-sm md:text-sm lg:text-lg font-medium sm:block hidden'>that generate positive cash flow was evident, as</p>
                            <p className='font-inter text-xl sm:text-sm md:text-sm lg:text-lg font-medium px-4 sm:block hidden'>they presented me with several lucrative</p>
                            <p className='font-inter text-xl sm:text-sm md:text-sm lg:text-lg font-medium px-4 sm:block hidden'>opportunities that aligned perfectly with my</p>
                            <p className='font-inter text-xl sm:text-sm md:text-sm lg:text-lg font-medium sm:block hidden'>financial objectives. They took the time to educate me on market trends, potential risks, and</p>
                            <p className='font-inter text-xl sm:text-sm md:text-sm lg:text-lg font-medium text-center sm:block hidden'>the benefits of each property, ensuring I made</p>
                            <p className='font-inter text-xl sm:text-sm md:text-sm lg:text-lg font-medium text-center sm:block hidden'>informed decisions.</p>
                            <div className='flex justify-between items-center mt-9 test_last_portion'>
                                <div className='flex flex-col'>
                                    <div className='font-inter text-customblack text-2xl sm:text-sm md:text-lg font-bold'>
                                        ARON LOEB
                                    </div>
                                    <div className='font-inter text-customblack text-lg sm:text-xs md:text-base font-medium'>
                                        CEO, Company
                                    </div>
                                </div>
                                <div>
                                    <Image src={Signature} alt='signature' className='sm:w-16' />
                                </div>
                                <div>
                                    <Image src={Star} alt='star' className='sm:w-28' />
                                </div>
                            </div>
                            <div className='test_quotes_right'>
                                <div className='bg-customblack test_circle'>
                                    <ImQuotesRight className='text-white test_icon' />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default TestmonialComponent;