"use client"; // Add this line at the very top
import { useState, useRef, useEffect } from 'react';
import '../styles/Navbar.css'
import Link from 'next/link';
import Image from 'next/image';
import Logo from "../../public/images/logo/Logo.png";
import Close from "../../public/images/logo/close.png";
import Line from "../../public/images/logo/Line.png";
import Quote from "../../public/images/logo/quote.png";
import Money from "../../public/images/logo/money.png";
import Faq from "../../public/images/logo/faq.png";
import Login from "../../public/images/logo/login.png";
import { IoReorderThree } from "react-icons/io5";

interface NavbarProps {
    faqRef: React.RefObject<HTMLDivElement>;
    priceRef: React.RefObject<HTMLDivElement>;
    whatRef: React.RefObject<HTMLDivElement>;
    heroRef: React.RefObject<HTMLDivElement>;
    onModalToggle: (isOpen: boolean) => void;
}

const Navbar: React.FC<NavbarProps> = ({ faqRef, priceRef, whatRef, heroRef, onModalToggle }) => {

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [modalClass, setModalClass] = useState('');
    const modalRef = useRef<HTMLDivElement>(null);

    const openModal = () => {
        setIsModalOpen(true);
        onModalToggle(true); // Call the parent handler
    };

    const closeModal = () => {
        setIsModalOpen(false);
        onModalToggle(false); // Call the parent handler
    };

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

    const scrollTohero = (event: React.MouseEvent<HTMLImageElement>) => {
        event.preventDefault();
        if (heroRef.current) {
            heroRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    };

    useEffect(() => {
        if (isModalOpen) {
            setModalClass('open');
            document.body.style.overflow = 'hidden'; // Prevent scrolling
        } else {
            setModalClass('close');
            document.body.style.overflow = 'auto'; // Restore scrolling
        }
    }, [isModalOpen]);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => { // Annotate event type
          if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
            closeModal(); // Close the modal on outside click
          }
        };
    
        if (isModalOpen) {
          document.addEventListener('mousedown', handleClickOutside);
        } else {
          document.removeEventListener('mousedown', handleClickOutside);
        }
    
        return () => {
          document.removeEventListener('mousedown', handleClickOutside);
        };
      }, [isModalOpen]);

    return (
        <>
            {/* Start of Navbar */}
            <nav className={`bg-white navbar_body py-3.5 px-20 sm:px-6 md:px-10 fixed w-full top-0 z-20 ${isModalOpen ? 'opacity-85' : 'opacity-100'}`}>
                <div className="flex justify-between items-center">
                    <div >
                        <Image src={Logo} alt="Logo" className='w-52 cursor-pointer' onClick={scrollTohero} />
                    </div>
                    <div className='flex gap-8 items-center sm:hidden md:hidden lg:hidden'>
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
                        <button className='px-12 navbar_btn bg-customblue rounded text-white font-inter font-bold text-lg hover:bg-customorange shake-animation'>
                            Start Free Trial
                        </button>
                    </div>
                    <button className='sm:block md:block lg:block xl:hidden 2xl:hidden hidden px-2 py-2 rounded' onClick={openModal}>
                        <IoReorderThree className='text-3xl' />
                    </button>
                </div>
            </nav>

            {/* Start of Offcanvas Right */}

            {isModalOpen && (
                <>
                    <div ref={modalRef} className={`fixed right-0 top-0 bg-white z-20 offcanvas_body transition-opacity duration-300 ${modalClass}`}>
                        <div className='flex justify-between items-center'>
                            <Image src={Logo} alt="Logo" className='w-40 cursor-pointer' />
                            <Image src={Close} alt="Logo" className='w-6 cursor-pointer' onClick={closeModal} />
                        </div>
                        <Image src={Line} alt="Logo" className='w-full mt-7' />
                        <div className='flex items-center gap-3 mt-7'>
                            <Image src={Quote} alt="Logo" className='w-5' />
                            <p className='font-inter font-bold text-sm text-customblack'>What’s Included</p>
                        </div>
                        <div className='flex items-center gap-3 mt-7'>
                            <Image src={Money} alt="Logo" className='w-5' />
                            <p className='font-inter font-bold text-sm text-customblack'>Pricing</p>
                        </div>
                        <div className='flex items-center gap-3 mt-7'>
                            <Image src={Faq} alt="Logo" className='w-3.5' />
                            <p className='font-inter font-bold text-sm text-customblack'>FAQ’s</p>
                        </div>
                        <div className='flex items-center gap-3 mt-7'>
                            <Image src={Login} alt="Logo" className='w-3.5' />
                            <p className='font-inter font-bold text-sm text-customblack'>Login</p>
                        </div>
                        <button className='mt-14 px-8 py-3.5 bg-customblue font-inter text-xs font-bold text-white offcanvas_btn hover:bg-customorange'>
                            Start Free Trial
                        </button>
                    </div>
                </>
            )}
        </>
    )
}

export default Navbar;