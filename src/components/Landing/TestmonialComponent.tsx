"use client"; // Add this line at the very top
import { useState } from 'react';
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


const TestmonialComponent: React.FC = () => {

    return (
        <>
            <div className='pt-12'>
                <p className='font-inter text-customblack test_title font-bold text-center'>
                    What Other Cashflow Innovators Are <span className='text-customorange'>Saying</span> About The <span className='text-customorange'>Platform</span>
                </p>
                <div className='mt-6 relative'>
                    <div className="rotating-container" style={{ paddingBottom: "28.25rem" }}>
                        <Image src={Group} alt='test' className="rotating-image" style={{ paddingTop: "18rem" }} />
                        <Image src={Group_one} alt='test' className="rotating-image" style={{ position: "absolute", left: "11rem", top: "17rem" }} />
                        <Image src={Group_two} alt='test' className="rotating-image" style={{ position: "absolute", left: "17rem", top: "10rem" }} />
                        <Image src={Group_three} alt='test' className="rotating-image" style={{ position: "absolute", left: "28rem", top: "8rem" }} />
                        <Image src={Group_four} alt='test' className="rotating-image" style={{ position: "absolute", left: "35rem", top: "2rem" }} />
                        <Image src={Group_five} alt='test' className="rotating-image" style={{ position: "absolute", left: "47rem", top: "7rem" }} />
                        <Image src={Group_six} alt='test' className="rotating-image" style={{ position: "absolute", left: "55rem", top: "7rem" }} />
                        <Image src={Group_three} alt='test' className="rotating-image" style={{ position: "absolute", left: "67rem", top: "12rem" }} />
                        <Image src={Group_two} alt='test' className="rotating-image" style={{ position: "absolute", right: "18rem", top: "14rem" }} />
                        <Image src={Group_one} alt='test' className="rotating-image" style={{ position: "absolute", right: "11rem", top: "21rem" }} />
                        <Image src={Group} alt='test' className="rotating-image" style={{ position: "absolute", right: "0rem", top: "21rem" }} />
                    </div>
                    <div className='flex justify-center absolute top-0 left-0 w-full testmonial_box' >
                        <div className='test_box relative'>
                            <div className='test_quotes'>
                                <div className='bg-customblack test_circle'>
                                    <ImQuotesLeft className='text-white test_icon' />
                                </div>
                            </div>
                            <div className='flex justify-center absolute top-0 left-0 w-full circle_img'>
                                <Image src={Circle} alt='circle' />
                            </div>
                            <p className='font-inter text-xl font-medium px-6'>Their team's commitment to finding properties that generate</p>
                            <p className='font-inter text-xl font-medium'>positive cash flow was evident, as they presented me with several</p>
                            <p className='font-inter text-xl font-medium px-4'>lucrative opportunities that aligned perfectly with my financial</p>
                            <p className='font-inter text-xl font-medium px-4'>objectives. They took the time to educate me on market trends,</p>
                            <p className='font-inter text-xl font-medium'>potential risks, and the benefits of each property, ensuring I made</p>
                            <p className='font-inter text-xl font-medium text-center'>informed decisions.</p>
                            <div className='flex justify-between items-center mt-9' style={{ paddingRight: "3.813rem" }}>
                                <div className='flex flex-col'>
                                    <div className='font-inter text-customblack text-2xl font-bold'>
                                        ARON LOEB
                                    </div>
                                    <div className='font-inter text-customblack text-lg font-medium'>
                                        CEO, Company
                                    </div>
                                </div>
                                <div>
                                    <Image src={Signature} alt='signature' />
                                </div>
                                <div>
                                    <Image src={Star} alt='star' />
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