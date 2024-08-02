"use client"; // Add this line at the very top
import { useState, useRef, useEffect } from 'react';
import '../styles/Navbar.css'
import Link from 'next/link';
import Image from 'next/image';
import Logo from "../../public/images/logo/Logo.png";
import { IoReorderThree } from "react-icons/io5";
import { Dialog } from '@headlessui/react';
import { IoMdCloseCircle } from "react-icons/io";

const Navbar: React.FC = () => {

    // const [isOpen, setIsOpen] = useState(false);
    const buttonRef = useRef(null);

    useEffect(() => {
        const interval = setInterval(() => {
            if (buttonRef.current) {
                buttonRef.current.classList.add('shake-active');
                setTimeout(() => {
                    buttonRef.current.classList.remove('shake-active');
                }, 1000); // Shake animation duration
            }
        }, 6000); // 10 seconds delay + 1 second animation

        return () => clearInterval(interval);
    }, []);

    return (
        <>
            {/* Start of Navbar */}
            <nav className="bg-white navbar_body py-6 px-16 sm:px-6 md:px-10 fixed w-full top-0 z-20">
                <div className="flex justify-between items-center">
                    <div>
                        <Image src={Logo} alt="Logo" className='w-52 cursor-pointer' />
                    </div>
                    <div className='flex gap-5 items-center sm:hidden md:hidden lg:hidden'>
                        <Link href="" className='font-inter font-bold text-lg text-customblack hover:underline cursor-pointer hover:text-customblue'>
                            What’s Included
                        </Link>
                        <Link href="" className='font-inter font-bold text-lg text-customblack hover:underline cursor-pointer hover:text-customblue'>
                            Pricing
                        </Link>
                        <Link href="" className='font-inter font-bold text-lg text-customblack hover:underline cursor-pointer hover:text-customblue'>
                            FAQ’s
                        </Link>
                        <Link href="" className='font-inter font-bold text-lg text-customblack hover:underline cursor-pointer hover:text-customblue'>
                            Login
                        </Link>
                        <button ref={buttonRef} className='px-10 navbar_btn bg-customblue rounded text-white font-inter font-bold text-lg hover:bg-customorange shake-animation'>
                            Start Free Trial
                        </button>
                    </div>
                    {/* <button className='sm:block md:block lg:block xl:hidden 2xl:hidden hidden px-2 py-2 rounded' onClick={() => setIsOpen(true)}><IoReorderThree className='text-3xl' />
                    </button> */}
                </div>
            </nav >
        </>
    )
}

export default Navbar;