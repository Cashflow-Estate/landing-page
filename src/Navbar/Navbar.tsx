"use client"; // Add this line at the very top
import { useState, useRef, useEffect } from 'react';
import '../styles/Navbar.css'
import Link from 'next/link';
import Image from 'next/image';
import Logo from "../../public/images/logo/Logo.png";
import { IoReorderThree } from "react-icons/io5";
import { IoMdCloseCircle } from "react-icons/io";

interface NavbarProps {
    faqRef: React.RefObject<HTMLDivElement>;
    priceRef: React.RefObject<HTMLDivElement>;
    whatRef: React.RefObject<HTMLDivElement>;
}

const Navbar: React.FC<NavbarProps> = ({ faqRef, priceRef, whatRef }) => {

    const scrollToFaq = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
        if (faqRef.current) {
          faqRef.current.scrollIntoView({ behavior: 'smooth' });
        }
      };
    
      const scrollToPricing = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
        if (priceRef.current) {
          priceRef.current.scrollIntoView({ behavior: 'smooth' });
        }
      };

      const scrollToWhat = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
        if (whatRef.current) {
          whatRef.current.scrollIntoView({ behavior: 'smooth' });
        }
      };

    // const buttonRef = useRef<HTMLButtonElement | null>(null);

    // useEffect(() => {
    //     const interval = setInterval(() => {
    //         if (buttonRef.current) {
    //             buttonRef.current.classList.add('shake-active');
    //             setTimeout(() => {
    //                 if (buttonRef.current) {
    //                     buttonRef.current.classList.remove('shake-active');
    //                 }
    //             }, 1000); // Shake animation duration
    //         }
    //     }, 6000); // 5 seconds delay + 1 second animation

    //     return () => clearInterval(interval);
    // }, []);

    return (
        <>
            {/* Start of Navbar */}
            <nav className="bg-white navbar_body py-5 px-12 sm:px-6 md:px-10 fixed w-full top-0 z-20">
                <div className="flex justify-between items-center">
                    <div>
                        <Image src={Logo} alt="Logo" className='w-52 cursor-pointer' />
                    </div>
                    <div className='flex gap-5 items-center sm:hidden md:hidden lg:hidden'>
                        <button onClick={scrollToWhat} className='font-inter font-bold text-xl text-customblack hover:underline cursor-pointer hover:text-customblue'>
                            What’s Included
                        </button>
                        <button onClick={scrollToPricing} className='font-inter font-bold text-xl text-customblack hover:underline cursor-pointer hover:text-customblue'>
                            Pricing
                        </button>
                        <button onClick={scrollToFaq} className='font-inter font-bold text-xl text-customblack hover:underline cursor-pointer hover:text-customblue'>
                            FAQ’s
                        </button>
                        <button className='font-inter font-bold text-xl text-customblack hover:underline cursor-pointer hover:text-customblue'>
                            Login
                        </button>
                        <button className='px-10 navbar_btn bg-customblue rounded text-white font-inter font-bold text-lg hover:bg-customorange shake-animation'>
                            Start Free Trial
                        </button>
                    </div>
                    <button className='sm:block md:block lg:block xl:hidden 2xl:hidden hidden px-2 py-2 rounded'><IoReorderThree className='text-3xl' />
                    </button>
                </div>
            </nav >
        </>
    )
}

export default Navbar;