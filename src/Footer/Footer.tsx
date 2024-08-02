"use client"; // Add this line at the very top
import { useState } from 'react';
import '../../src/styles/Footer.css'
import Link from 'next/link';
import Image from 'next/image';
import Logo from '../../public/images/logo/Logo1.png'
import { TiTick } from "react-icons/ti";
import { IoClose } from "react-icons/io5";
import { FaYoutube, FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from "react-icons/fa";
import New from '../../public/images/footer/new.png'


const Footer: React.FC = () => {

    const [isTick, setIsTick] = useState(true);

    const handleClick = () => {
        setIsTick(!isTick);
    };


    return (
        <>
            <div className='footer_body bg-customblackish'>
                <div className="grid grid-cols-5 gap-7">
                    <div className='flex flex-col'>
                        <Image src={Logo} alt='' />
                        <p className='font-inter text-sm font-normal text-white mt-14'>Cash Flow Innovator, an Etison Product.
                            All Rights Reserved © 2019-2024.
                            3443 W. Bavaria St., Eagle, Idaho 83616.
                        </p>
                        <div className='flex gap-2 items-center mt-5'>
                            <div className="footer_btn bg-white flex items-center justify-between p-0.5 bg-white" onClick={handleClick}>
                                <button className={`inner-icon ${isTick ? 'bg-customblackish' : 'bg-white'}`}>
                                    <TiTick className={`w-3 h-3 ${isTick ? 'text-white' : 'text-black'}`} />
                                </button>
                                <button className={`inner-icon1 ${isTick ? 'bg-white' : 'bg-customblackish'}`}>
                                    <IoClose className={`w-3 h-3 ${!isTick ? 'text-white' : 'text-black'}`} />
                                </button>
                            </div>
                            <p className='font-inter footer_desp text-white'>Your Privacy Choices</p>
                        </div>
                        <div className='flex gap-2 mt-7'>
                            <FaYoutube className='text-custombrownish text-2xl cursor-pointer hover:text-white' />
                            <FaFacebook className='text-custombrownish text-2xl cursor-pointer hover:text-white' />
                            <FaTwitter className='text-custombrownish text-2xl cursor-pointer hover:text-white' />
                            <FaLinkedin className='text-custombrownish text-2xl cursor-pointer hover:text-white' />
                            <FaInstagram className='text-custombrownish text-2xl cursor-pointer hover:text-white' />
                        </div>
                    </div>
                    <div className='flex flex-col'>
                        <p className='font-inter text-sm font-bold text-white'>PRODUCT</p>
                        <p className='font-inter text-sm font-normal text-white mt-3.5 cursor-pointer hover:text-customer'>Cash Flow Innovator</p>
                        <div className='flex flex-col gap-3'>
                            <p className='font-inter text-sm font-normal text-white cursor-pointer hover:text-customer mt-3'>Websites</p>
                            <p className='font-inter text-sm font-normal text-white cursor-pointer hover:text-customer'>Ecommerce Store</p>
                            <p className='font-inter text-sm font-normal text-white cursor-pointer hover:text-customer'>Landing Pages</p>
                            <p className='font-inter text-sm font-normal text-white cursor-pointer hover:text-customer'>Blog</p>
                            <p className='font-inter text-sm font-normal text-white cursor-pointer hover:text-customer'>Customer Center</p>
                            <p className='font-inter text-sm font-normal text-white cursor-pointer hover:text-customer'>Email Marketing</p>
                            <p className='font-inter text-sm font-normal text-white cursor-pointer hover:text-customer'>Workflows</p>
                            <div className='flex gap-1 items-center'>
                                <p className='font-inter text-sm font-normal text-white cursor-pointer hover:text-customer'>Countdown Funnels</p>
                                <Image src={New} alt='' />
                            </div>
                            <div className='flex gap-1 items-center'>
                                <p className='font-inter text-sm font-normal text-white cursor-pointer hover:text-customer'>Store Funnels</p>
                                <Image src={New} alt='' />
                            </div>
                            <div className='flex gap-1 items-center'>
                                <p className='font-inter text-sm font-normal text-white cursor-pointer hover:text-customer'>Smart Checkout</p>
                                <Image src={New} alt='' />
                            </div>
                        </div>
                    </div>
                    <div className='flex flex-col'>
                        <p className='font-inter text-sm font-normal text-white cursor-pointer hover:text-customer mt-8'>Online Courses</p>
                        <div className='flex flex-col gap-3'>
                            <p className='font-inter text-sm font-normal text-white cursor-pointer hover:text-customer mt-3'>Membership Sites</p>
                            <p className='font-inter text-sm font-normal text-white cursor-pointer hover:text-customer'>ClickFunnels Editor</p>
                            <p className='font-inter text-sm font-normal text-white cursor-pointer hover:text-customer'>A/B Testing</p>
                            <p className='font-inter text-sm font-normal text-white cursor-pointer hover:text-customer'>Analytics</p>
                            <p className='font-inter text-sm font-normal text-white cursor-pointer hover:text-customer'>Global Products</p>
                            <div className='flex gap-1 items-center'>
                                <p className='font-inter text-sm font-normal text-white cursor-pointer hover:text-customer'>CRM</p>
                                <Image src={New} alt='' />
                            </div>
                            <div className='flex gap-1 items-center'>
                                <p className='font-inter text-sm font-normal text-white cursor-pointer hover:text-customer'>Community</p>
                                <Image src={New} alt='' />
                            </div>
                            <div className='flex gap-1 items-center'>
                                <p className='font-inter text-sm font-normal text-white cursor-pointer hover:text-customer'>API & Webhooks</p>
                                <Image src={New} alt='' />
                            </div>
                            <div className='flex gap-1 items-center'>
                                <p className='font-inter text-sm font-normal text-white cursor-pointer hover:text-customer'>Integrations</p>
                                <Image src={New} alt='' />
                            </div>
                            <p className='font-inter text-sm font-normal text-white cursor-pointer hover:text-customer'>Pricing</p>
                        </div>
                    </div>
                    <div className='flex flex-col'>
                        <p className='font-inter text-sm font-bold text-white'>COMPANY</p>
                        <p className='font-inter text-sm font-normal text-white cursor-pointer hover:text-customer mt-3.5'>Origin Story</p>
                        <div className='flex flex-col gap-3'>
                            <p className='font-inter text-sm font-normal text-white cursor-pointer hover:text-customer mt-3'>Meet The Team</p>
                            <p className='font-inter text-sm font-normal text-white cursor-pointer hover:text-customer'>Locations</p>
                            <p className='font-inter text-sm font-normal text-white cursor-pointer hover:text-customer'>Careers</p>
                            <p className='font-inter text-sm font-normal text-white cursor-pointer hover:text-customer'>Affiliate Program</p>
                            <p className='font-inter text-sm font-normal text-white cursor-pointer hover:text-customer'>Legal</p>
                            <p className='font-inter text-sm font-normal text-white cursor-pointer hover:text-customer'>Privacy Policy</p>
                        </div>
                    </div>
                    <div className='flex flex-col'>
                        <p className='font-inter text-sm font-bold text-white'>Help</p>
                        <p className='font-inter text-sm font-normal text-white cursor-pointer hover:text-customer mt-3.5'>Cash Flow Innovator Login</p>
                        <div className='flex flex-col gap-3'>
                            <p className='font-inter text-sm font-normal text-white cursor-pointer hover:text-customer mt-3'>Cash Flow Innovator Blog</p>
                            <p className='font-inter text-sm font-normal text-white cursor-pointer hover:text-customer'>Help Centre</p>
                            <p className='font-inter text-sm font-normal text-white cursor-pointer hover:text-customer'>Official FaceBook Group</p>
                            <p className='font-inter text-sm font-normal text-white cursor-pointer hover:text-customer'>Business Tools</p>
                            <p className='font-inter text-sm font-normal text-white cursor-pointer hover:text-customer'>Cash Flow Innovator 2.0 Status </p>
                        </div>
                    </div>
                </div>
                <p className='font-inter text-white font-medium	text-lg text-center' style={{ marginTop: "3.875rem" }}>
                    Copyright © 2024 CashFlow Innovator | All Rights Reserved
                </p>
            </div>

        </>
    )
}

export default Footer;