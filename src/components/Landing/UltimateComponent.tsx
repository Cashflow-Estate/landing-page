"use client"; // Add this line at the very top
import { useState, useEffect, useRef } from 'react';
import '../../styles/Ultimate.css'
import Link from 'next/link';
import Image from 'next/image';
import { ultimateCards } from '@/data/ultimate/ultimate';
import Circle from '../../../public/images/ultimate/circle.png'
import One from '../../../public/images/ultimate/one.png'
import Two from '../../../public/images/ultimate/two.png'
import Three from '../../../public/images/ultimate/three.png'
import Four from '../../../public/images/ultimate/four.png'
import Five from '../../../public/images/ultimate/five.png'
import Six from '../../../public/images/ultimate/six.png'
import Right from '../../../public/images/ultimate/right.png'
import Left from '../../../public/images/ultimate/left.png'

const UltimateComponent: React.FC = () => {

    const imageRefs = useRef<HTMLImageElement[]>([]);

    // Function to add image refs
    const addToImageRefs = (el: HTMLImageElement) => {
        if (el && !imageRefs.current.includes(el)) {
            imageRefs.current.push(el);
        }
    };

    useEffect(() => {
        const handleScroll = () => {
            imageRefs.current.forEach((image) => {
                const { top, bottom } = image.getBoundingClientRect();
                const isVisible = top < window.innerHeight && bottom > 0;

                if (isVisible) {
                    image.classList.add('animate');
                } else {
                    image.classList.remove('animate');
                }
            });
        };

        // Attach the scroll event listener
        window.addEventListener('scroll', handleScroll);

        // Clean up event listener on unmount
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <>
            <div className='ultimate_body'>
                <p className='font-inter text-white font-bold text-center ultimate_title'>
                    The Ultimate Solution For Streamlining Every Slow Flip Deal.
                </p>
                <div className='flex flex-col gap-7 relative ultimate_margin'>
                    <div className='bg-white ultimate_box'>
                        <div className="grid grid-cols-2 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-1 xl:grid-cols-1 gap-3 sm:gap-7 md:gap-7 lg:gap-7 xl:gap-7">
                            <div className='flex flex-col justify-center ultimate_width'>
                                <p className='font-inter font-bold text-3xl sm:text-base md:text-lg lg:text-2xl 2xl:text-2xl text-center'>
                                    Cashflow Innovator is the <span className='text-customorange'>Platform</span> For
                                    Your Slow Flip <span className='text-customorange'>KPI</span> Dashboard.
                                </p>
                                <div className='flex justify-center sm:hidden md:hidden lg:hidden xl:hidden'>
                                    <button className='box_btn bg-customblue text-white font-inter text-xl font-semibold mt-10 hover:bg-customorange'>Start Your Free Trial Today</button>
                                </div>
                            </div>
                            <div className='ultimate_circle_position relative'>
                                <Image src={Circle} alt='circle' />
                                <Image src={One} alt='one' className='one_img' />
                            </div>
                            <div className='sm:block md:block lg:block xl:block 2xl:hidden hidden'>
                                <div className='flex justify-center'>
                                    <button className='box_btn bg-customblue text-white font-inter text-xl sm:text-sm md:text-lg font-semibold mt-10 sm:mt-0 md:mt-0 lg:mt-0 xl:mt-0 hover:bg-customorange'>Start Your Free Trial Today</button>
                                </div>
                            </div>

                        </div>
                    </div>

                    <Image src={Right} alt='' className='right_arrow right_arrow_play' ref={addToImageRefs} />

                    <div className='bg-white ultimate_box1'>
                        <div className="grid grid-cols-2 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-1 xl:grid-cols-1 gap-3 sm:gap-7 md:gap-7 lg:gap-7 xl:gap-7">
                            <div className='sm:block md:block lg:block xl:block 2xl:hidden hidden'>
                                <div className='flex justify-center ultimate_width2'>
                                    <p className='font-inter font-bold text-3xl sm:text-base md:text-lg lg:text-2xl 2xl:text-2xl text-center'>
                                        Cashflow <span className='text-customorange'>Innovator</span> is Your Platform For
                                        <span className='text-customorange'> Slow</span> Flip Property Management.
                                    </p>
                                </div>
                            </div>

                            <div className='relative sm:flex sm:justify-center md:flex md:justify-center lg:flex lg:justify-center xl:flex xl:justify-center'>
                                <Image src={Circle} alt='circle' />
                                <Image src={Two} alt='one' className='two_img' />
                            </div>
                            <div className='flex flex-col justify-center ultimate_width2'>
                                <p className='font-inter font-bold text-3xl 2xl:text-2xl text-center sm:hidden md:hidden lg:hidden xl:hidden'>
                                    Cashflow <span className='text-customorange'>Innovator</span> is Your Platform For
                                    <span className='text-customorange'> Slow</span> Flip Property Management.
                                </p>
                                <div className='flex justify-center'>
                                    <button className='box_btn bg-customblue text-white font-inter text-xl sm:text-sm md:text-lg font-semibold mt-10 sm:mt-0 md:mt-0 lg:mt-0 xl:mt-0 hover:bg-customorange'>Start Your Free Trial Today</button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <Image src={Left} alt='' className='left_arrow right_arrow_play' ref={addToImageRefs} />

                    <div className='bg-white ultimate_box'>
                        <div className="grid grid-cols-2 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-1 xl:grid-cols-1 gap-3 sm:gap-7 md:gap-7 lg:gap-7 xl:gap-7">
                            <div className='flex flex-col justify-center ultimate_width'>
                                <p className='font-inter font-bold text-3xl sm:text-center sm:text-base md:text-center md:text-lg lg:text-center xl:text-center lg:text-2xl 2xl:text-center 2xl:text-2xl'>
                                    Cashflow Innovator Is Your Platform For <span className='text-customorange'>Streamlined</span> Eviction Processing.
                                </p>
                                <div className='flex justify-center sm:hidden md:hidden lg:hidden xl:hidden'>
                                    <button className='box_btn bg-customblue text-white font-inter text-xl font-semibold mt-10 hover:bg-customorange'>Start Your Free Trial Today</button>
                                </div>
                            </div>
                            <div className='ultimate_circle_position relative'>
                                <Image src={Circle} alt='circle' />
                                <Image src={Three} alt='one' className='three_img' />
                            </div>
                            <div className='sm:block md:block lg:block xl:block 2xl:hidden hidden'>
                                <div className='flex justify-center'>
                                    <button className='box_btn bg-customblue text-white font-inter text-xl sm:text-sm md:text-lg font-semibold mt-10 sm:mt-0 md:mt-0 lg:mt-0 xl:mt-0 hover:bg-customorange'>Start Your Free Trial Today</button>
                                </div>
                            </div>

                        </div>
                    </div>

                    <Image src={Right} alt='' className='right_arrow1 right_arrow_play' ref={addToImageRefs} />

                    <div className='bg-white ultimate_box1'>
                        <div className="grid grid-cols-2 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-1 xl:grid-cols-1 gap-3 sm:gap-7 md:gap-7 lg:gap-7 xl:gap-7">
                            <div className='sm:block md:block lg:block xl:block 2xl:hidden hidden'>
                                <div className='flex justify-center ultimate_width1'>
                                    <p className='font-inter font-bold text-3xl sm:text-base md:text-lg lg:text-2xl 2xl:text-2xl text-center'>
                                        Cashflow Innovator Is The <span className='text-customorange'>Platform</span> For
                                        <span className='text-customorange'> Filling</span> Your Slow Flips Properties.
                                    </p>
                                </div>

                            </div>
                            <div className='relative sm:flex sm:justify-center md:flex md:justify-center lg:flex lg:justify-center xl:flex xl:justify-center'>
                                <Image src={Circle} alt='circle' />
                                <Image src={Four} alt='one' className='four_img' />
                            </div>
                            <div className='flex flex-col justify-center ultimate_width1'>
                                <p className='font-inter font-bold text-3xl 2xl:text-2xl text-center sm:hidden md:hidden lg:hidden xl:hidden'>
                                    Cashflow Innovator Is The <span className='text-customorange'>Platform</span> For
                                    <span className='text-customorange'> Filling</span> Your Slow Flips Properties.
                                </p>
                                <div className='flex justify-center'>
                                    <button className='box_btn bg-customblue text-white font-inter text-xl sm:text-sm md:text-lg font-semibold mt-10 sm:mt-0 md:mt-0 lg:mt-0 xl:mt-0 hover:bg-customorange'>Start Your Free Trial Today</button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <Image src={Left} alt='' className='left_arrow1 right_arrow_play' ref={addToImageRefs} />

                    <div className='bg-white ultimate_box'>
                        <div className="grid grid-cols-2 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-1 xl:grid-cols-1 gap-3 sm:gap-7 md:gap-7 lg:gap-7 xl:gap-7">
                            <div className='flex flex-col justify-center ultimate_width'>
                                <p className='font-inter font-bold text-3xl sm:text-base md:text-lg lg:text-2xl 2xl:text-2xl text-center'>
                                    Cashflow Innovator <span className='text-customorange'>Stores</span> Your Agreement.
                                </p>
                                <div className='flex justify-center sm:hidden md:hidden lg:hidden xl:hidden'>
                                    <button className='box_btn bg-customblue text-white font-inter text-xl font-semibold mt-10 hover:bg-customorange'>Start Your Free Trial Today</button>
                                </div>
                            </div>
                            <div className='relative ultimate_circle_padding'>
                                <Image src={Circle} alt='circle' />
                                <Image src={Four} alt='one' className='five_img' />
                            </div>
                            <div className='sm:block md:block lg:block xl:block 2xl:hidden hidden'>
                                <div className='flex justify-center'>
                                    <button className='box_btn bg-customblue text-white font-inter text-xl sm:text-sm md:text-lg font-semibold mt-10 sm:mt-0 md:mt-0 lg:mt-0 xl:mt-0 hover:bg-customorange'>Start Your Free Trial Today</button>
                                </div>
                            </div>

                        </div>
                    </div>

                    <Image src={Right} alt='' className='right_arrow2 right_arrow_play' ref={addToImageRefs} />

                    <div className='bg-white ultimate_box1'>
                        <div className="grid grid-cols-2 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-1 xl:grid-cols-1 gap-3 sm:gap-7 md:gap-7 lg:gap-7 xl:gap-7">
                            <div className='sm:block md:block lg:block xl:block 2xl:hidden hidden'>
                                <div className='flex justify-center ultimate_width1'>
                                    <p className='font-inter font-bold text-3xl sm:text-base md:text-lg lg:text-2xl 2xl:text-2xl text-center'>
                                        Cashflow Innovator Is The Platform For <span className='text-customorange'>Receiving</span>  Monthly Payments On Each Slow Flip Property, <span className='text-customorange'>Deposited</span> Directly Into Your Bank Account.
                                    </p>
                                </div>
                            </div>

                            <div className='relative sm:flex sm:justify-center md:flex md:justify-center lg:flex lg:justify-center xl:flex xl:justify-center'>
                                <Image src={Circle} alt='circle' />
                                <Image src={Five} alt='one' className='six_img' />
                            </div>
                            <div className='flex flex-col justify-center ultimate_width1'>
                                <p className='font-inter font-bold text-3xl 2xl:text-2xl text-center sm:hidden md:hidden lg:hidden xl:hidden'>
                                    Cashflow Innovator Is The Platform For <span className='text-customorange'>Receiving</span>  Monthly Payments On Each Slow Flip Property, <span className='text-customorange'>Deposited</span> Directly Into Your Bank Account.
                                </p>
                                <div className='flex justify-center'>
                                    <button className='box_btn bg-customblue text-white font-inter text-xl sm:text-sm md:text-lg font-semibold mt-10 sm:mt-0 md:mt-0 lg:mt-0 xl:mt-0 hover:bg-customorange'>Start Your Free Trial Today</button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <Image src={Left} alt='' className='left_arrow2 right_arrow_play' ref={addToImageRefs} />

                    <div className='bg-white ultimate_box'>
                        <div className="grid grid-cols-2 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-1 xl:grid-cols-1 gap-3 sm:gap-7 md:gap-7 lg:gap-7 xl:gap-7">
                            <div className='flex flex-col justify-center ultimate_width'>
                                <p className='font-inter font-bold text-3xl sm:text-base md:text-lg lg:text-2xl 2xl:text-2xl text-center'>
                                    Cashflow Innovator Is Your One <span className='text-customorange'>Stop</span> Shop For <span className='text-customorange'>Emails</span> and Messaging.
                                </p>
                                <div className='flex justify-center sm:hidden md:hidden lg:hidden xl:hidden'>
                                    <button className='box_btn bg-customblue text-white font-inter text-xl font-semibold mt-10 hover:bg-customorange'>Start Your Free Trial Today</button>
                                </div>
                            </div>
                            <div className='ultimate_circle_position relative'>
                                <Image src={Circle} alt='circle' />
                                <Image src={Six} alt='one' className='seven_img' />
                            </div>
                            <div className='sm:block md:block lg:block xl:block 2xl:hidden hidden'>
                            <div className='flex justify-center'>
                                    <button className='box_btn bg-customblue text-white font-inter text-xl sm:text-sm md:text-lg font-semibold mt-10 sm:mt-0 md:mt-0 lg:mt-0 xl:mt-0 hover:bg-customorange'>Start Your Free Trial Today</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default UltimateComponent;