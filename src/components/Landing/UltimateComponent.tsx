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
import AOS from 'aos';
import 'aos/dist/aos.css';

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

    useEffect(() => {
        AOS.init({
            offset: 300,
            duration: 1000,
        });
    }, []); // Run this effect only once when the component mounts

    // const imageRefs = useRef<HTMLDivElement[]>([]);
    // const [visibleStates, setVisibleStates] = useState({
    //     right1: false,
    //     left1: false,
    //     right2: false,
    //     left2: false,
    //     right3: false,
    //     left3: false,
    // });

    // useEffect(() => {
    //     const observer = new IntersectionObserver(
    //         ([entry]) => {
    //             const target = entry.target as HTMLElement; // Cast to HTMLElement
    //             const direction = target.dataset.direction;
    //             if (direction) {
    //                 setVisibleStates(prev => ({
    //                     ...prev,
    //                     [direction]: entry.isIntersecting,
    //                 }));
    //             }
    //         },
    //         { threshold: 0.1 }
    //     );

    //     imageRefs.current.forEach(ref => {
    //         if (ref) observer.observe(ref);
    //     });

    //     return () => {
    //         imageRefs.current.forEach(ref => {
    //             if (ref) observer.unobserve(ref);
    //         });
    //     };
    // }, []);


    return (
        <>
            <div className='ultimate_body'>
                <p className='font-inter text-white font-bold text-center ultimate_title' data-aos="fade-up">
                    The Ultimate Solution For Streamlining Every Slow Flip Deal.
                </p>
                <div className='flex flex-col gap-7 relative' style={{ marginTop: "3.755rem" }}>
                    <div className='bg-white ultimate_box' data-aos="fade-up">
                        <div className="grid grid-cols-2 gap-3">
                            <div className='flex flex-col justify-center ultimate_width' data-aos="fade-up">
                                <p className='font-inter font-bold text-3xl text-center'>
                                    Cashflow Innovator is the <span className='text-customorange'>Platform</span> For
                                    Your Slow Flip <span className='text-customorange'>KPI</span> Dashboard.
                                </p>
                                <div className='flex justify-center'>
                                    <button className='box_btn bg-customblue text-white font-inter text-xl font-semibold mt-10 hover:bg-customorange'>Start Your Free Trial Today</button>
                                </div>
                            </div>
                            <div className='flex justify-end relative' data-aos="fade-up">
                                <Image src={Circle} alt='circle' />
                                <Image src={One} alt='one' style={{ position: "absolute", top: "3rem" }} />
                            </div>
                        </div>
                    </div>

                    <Image src={Right} alt='' className='right_arrow right_arrow_play' ref={addToImageRefs} />

                    <div className='bg-white ultimate_box1' data-aos="fade-up">
                        <div className="grid grid-cols-2 gap-3">
                            <div className=' relative' data-aos="fade-up">
                                <Image src={Circle} alt='circle' />
                                <Image src={Two} alt='one' style={{ position: "absolute", top: "3rem", left: "-2rem" }} />
                            </div>
                            <div className='flex flex-col justify-center ultimate_width2' data-aos="fade-up">
                                <p className='font-inter font-bold text-3xl text-center'>
                                    Cashflow <span className='text-customorange'>Innovator</span> is Your Platform For
                                    <span className='text-customorange'> Slow</span> Flip Property Management.
                                </p>
                                <div className='flex justify-center'>
                                    <button className='box_btn bg-customblue text-white font-inter text-xl font-semibold mt-10 hover:bg-customorange'>Start Your Free Trial Today</button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <Image src={Left} alt='' className='left_arrow right_arrow_play' ref={addToImageRefs} />

                    <div className='bg-white ultimate_box' data-aos="fade-up">
                        <div className="grid grid-cols-2 gap-3">
                            <div className='flex flex-col justify-center ultimate_width' data-aos="fade-up">
                                <p className='font-inter font-bold text-3xl'>
                                    Cashflow Innovator Is Your Platform For <span className='text-customorange'>Streamlined</span> Eviction Processing.
                                </p>
                                <div className='flex justify-center'>
                                    <button className='box_btn bg-customblue text-white font-inter text-xl font-semibold mt-10 hover:bg-customorange'>Start Your Free Trial Today</button>
                                </div>
                            </div>
                            <div className='flex justify-end relative' data-aos="fade-up">
                                <Image src={Circle} alt='circle' />
                                <Image src={Three} alt='one' style={{ position: "absolute", top: "4rem" }} />
                            </div>
                        </div>
                    </div>

                    <Image src={Right} alt='' className='right_arrow1 right_arrow_play' ref={addToImageRefs} />

                    <div className='bg-white ultimate_box1' data-aos="fade-up">
                        <div className="grid grid-cols-2 gap-3">
                            <div className=' relative' data-aos="fade-up">
                                <Image src={Circle} alt='circle' />
                                <Image src={Four} alt='one' style={{ position: "absolute", top: "3rem", left: "1rem" }} />
                            </div>
                            <div className='flex flex-col justify-center ultimate_width1' data-aos="fade-up">
                                <p className='font-inter font-bold text-3xl text-center'>
                                    Cashflow Innovator Is The <span className='text-customorange'>Platform</span> For
                                    <span className='text-customorange'> Filling</span> Your Slow Flips Properties.
                                </p>
                                <div className='flex justify-center'>
                                    <button className='box_btn bg-customblue text-white font-inter text-xl font-semibold mt-10 hover:bg-customorange'>Start Your Free Trial Today</button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <Image src={Left} alt='' className='left_arrow1 right_arrow_play' ref={addToImageRefs} />

                    <div className='bg-white ultimate_box' data-aos="fade-up">
                        <div className="grid grid-cols-2 gap-3">
                            <div className='flex flex-col justify-center ultimate_width' data-aos="fade-up">
                                <p className='font-inter font-bold text-3xl text-center'>
                                    Cashflow Innovator <span className='text-customorange'>Stores</span> Your Agreement.
                                </p>
                                <div className='flex justify-center'>
                                    <button className='box_btn bg-customblue text-white font-inter text-xl font-semibold mt-10 hover:bg-customorange'>Start Your Free Trial Today</button>
                                </div>
                            </div>
                            <div className='relative' style={{ paddingLeft: "10rem" }} data-aos="fade-up">
                                <Image src={Circle} alt='circle' />
                                <Image src={Four} alt='one' style={{ position: "absolute", top: "4rem", right: "-1rem" }} />
                            </div>
                        </div>
                    </div>

                    <Image src={Right} alt='' className='right_arrow2 right_arrow_play' ref={addToImageRefs} />

                    <div className='bg-white ultimate_box1' data-aos="fade-up">
                        <div className="grid grid-cols-2 gap-3">
                            <div className=' relative' data-aos="fade-up">
                                <Image src={Circle} alt='circle' />
                                <Image src={Five} alt='one' style={{ position: "absolute", top: "3rem", left: "1rem" }} />
                            </div>
                            <div className='flex flex-col justify-center ultimate_width1' data-aos="fade-up">
                                <p className='font-inter font-bold text-3xl text-center'>
                                    Cashflow Innovator Is The Platform For <span className='text-customorange'>Receiving</span>  Monthly Payments On Each Slow Flip Property, <span className='text-customorange'>Deposited</span> Directly Into Your Bank Account.
                                </p>
                                <div className='flex justify-center'>
                                    <button className='box_btn bg-customblue text-white font-inter text-xl font-semibold mt-10 hover:bg-customorange'>Start Your Free Trial Today</button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <Image src={Left} alt='' className='left_arrow2 right_arrow_play' ref={addToImageRefs} />

                    <div className='bg-white ultimate_box' data-aos="fade-up">
                        <div className="grid grid-cols-2 gap-3">
                            <div className='flex flex-col justify-center ultimate_width' data-aos="fade-up">
                                <p className='font-inter font-bold text-3xl text-center'>
                                    Cashflow Innovator Is Your One <span className='text-customorange'>Stop</span> Shop For <span className='text-customorange'>Emails</span> and Messaging.
                                </p>
                                <div className='flex justify-center'>
                                    <button className='box_btn bg-customblue text-white font-inter text-xl font-semibold mt-10 hover:bg-customorange'>Start Your Free Trial Today</button>
                                </div>
                            </div>
                            <div className='flex justify-end relative' data-aos="fade-up">
                                <Image src={Circle} alt='circle' />
                                <Image src={Six} alt='one' style={{ position: "absolute", top: "4rem", right: "-0.5rem" }} />
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default UltimateComponent;