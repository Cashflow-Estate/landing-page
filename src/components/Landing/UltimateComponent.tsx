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

    const imageRefs = useRef([]);

    const [visibleStates, setVisibleStates] = useState({
        right1: false,
        left1: false,
        right2: false,
        left2: false,
        right3: false,
        left3: false,
    });

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                const direction = entry.target.dataset.direction;
                setVisibleStates(prev => ({
                    ...prev,
                    [direction]: entry.isIntersecting,
                }));
            },
            { threshold: 0.1 }
        );

        imageRefs.current.forEach(ref => {
            if (ref.current) observer.observe(ref.current);
        });

        return () => {
            imageRefs.current.forEach(ref => {
                if (ref.current) observer.unobserve(ref.current);
            });
        };
    }, []);

    return (
        <>
            <div className='ultimate_body'>
                <div className='flex justify-center'>
                    <div className='ultimate_title_box'>
                        <p className='font-inter text-white font-bold text-center ultimate_title'>
                            The Ultimate Solution For Streamlining Every Slow Flip Deal.
                        </p>
                    </div>
                </div>
                <div className='flex flex-col gap-7 relative' style={{ marginTop: "3.755rem" }}>
                    <div className='bg-white ultimate_box'>
                        <div className="grid grid-cols-2 gap-3">
                            <div className='flex flex-col justify-center ultimate_width'>
                                <p className='font-inter font-bold text-3xl text-center'>
                                    Cashflow Innovator is the <span className='text-customorange'>Platform</span> For
                                    Your Slow Flip <span className='text-customorange'>KPI</span> Dashboard.
                                </p>
                                <div className='flex justify-center'>
                                    <button className='box_btn bg-customblue text-white font-inter text-xl font-semibold mt-10 hover:bg-customorange'>Start Your Free Trial Today</button>
                                </div>
                            </div>
                            <div className='flex justify-end relative'>
                                <Image src={Circle} alt='circle' />
                                <Image src={One} alt='one' style={{ position: "absolute", top: "3rem" }} />
                            </div>
                        </div>
                    </div>

                    <div
                        ref={el => (imageRefs.current[0] = el)}
                        data-direction="right1"
                        className={`image-container ${visibleStates.right1 ? 'show-right' : ''}`}
                        style={{ position: 'absolute', right: '-4rem', top: '27rem' }}
                    >
                        <Image src={Right} alt='' />
                    </div>

                    <div className='bg-white ultimate_box1'>
                        <div className="grid grid-cols-2 gap-3">
                            <div className=' relative'>
                                <Image src={Circle} alt='circle' />
                                <Image src={Two} alt='one' style={{ position: "absolute", top: "3rem", left: "-2rem" }} />
                            </div>
                            <div className='flex flex-col justify-center ultimate_width2'>
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

                    <div
                        ref={el => (imageRefs.current[1] = el)}
                        data-direction="left1"
                        className={`image-container ${visibleStates.left1 ? 'show-left' : ''}`}
                        style={{ position: 'absolute', left: '-4rem', top: '60rem' }}
                    >
                        <Image src={Left} alt='' />
                    </div>

                    <div className='bg-white ultimate_box'>
                        <div className="grid grid-cols-2 gap-3">
                            <div className='flex flex-col justify-center ultimate_width'>
                                <p className='font-inter font-bold text-3xl'>
                                    Cashflow Innovator Is Your Platform For <span className='text-customorange'>Streamlined</span> Eviction Processing.
                                </p>
                                <div className='flex justify-center'>
                                    <button className='box_btn bg-customblue text-white font-inter text-xl font-semibold mt-10 hover:bg-customorange'>Start Your Free Trial Today</button>
                                </div>
                            </div>
                            <div className='flex justify-end relative'>
                                <Image src={Circle} alt='circle' />
                                <Image src={Three} alt='one' style={{ position: "absolute", top: "4rem" }} />
                            </div>
                        </div>
                    </div>

                    <div
                        ref={el => (imageRefs.current[2] = el)}
                        data-direction="right2"
                        className={`image-container ${visibleStates.right2 ? 'show-right' : ''}`}
                        style={{ position: "absolute", right: "-4rem", top: "92rem" }}
                    >
                        <Image src={Right} alt='' />
                    </div>

                    <div className='bg-white ultimate_box1'>
                        <div className="grid grid-cols-2 gap-3">
                            <div className=' relative'>
                                <Image src={Circle} alt='circle' />
                                <Image src={Four} alt='one' style={{ position: "absolute", top: "3rem", left: "1rem" }} />
                            </div>
                            <div className='flex flex-col justify-center ultimate_width1'>
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

                    <div
                        ref={el => (imageRefs.current[3] = el)}
                        data-direction="left2"
                        className={`image-container ${visibleStates.left2 ? 'show-left' : ''}`}
                        style={{ position: "absolute", left: "-4rem", top: "125rem" }}
                    >
                        <Image src={Left} alt='' />
                    </div>

                    <div className='bg-white ultimate_box'>
                        <div className="grid grid-cols-2 gap-3">
                            <div className='flex flex-col justify-center ultimate_width'>
                                <p className='font-inter font-bold text-3xl text-center'>
                                    Cashflow Innovator <span className='text-customorange'>Stores</span> Your Agreement.
                                </p>
                                <div className='flex justify-center'>
                                    <button className='box_btn bg-customblue text-white font-inter text-xl font-semibold mt-10 hover:bg-customorange'>Start Your Free Trial Today</button>
                                </div>
                            </div>
                            <div className='relative' style={{ paddingLeft: "10rem" }}>
                                <Image src={Circle} alt='circle' />
                                <Image src={Four} alt='one' style={{ position: "absolute", top: "4rem", right: "-1rem" }} />
                            </div>
                        </div>
                    </div>

                    <div
                        ref={el => (imageRefs.current[4] = el)}
                        data-direction="right3"
                        className={`image-container ${visibleStates.right3 ? 'show-right' : ''}`}
                        style={{ position: "absolute", right: "-4rem", top: "157rem" }}
                    >
                        <Image src={Right} alt='' />
                    </div>

                    <div className='bg-white ultimate_box1'>
                        <div className="grid grid-cols-2 gap-3">
                            <div className=' relative'>
                                <Image src={Circle} alt='circle' />
                                <Image src={Five} alt='one' style={{ position: "absolute", top: "3rem", left: "1rem" }} />
                            </div>
                            <div className='flex flex-col justify-center ultimate_width1'>
                                <p className='font-inter font-bold text-3xl text-center'>
                                    Cashflow Innovator Is The Platform For <span className='text-customorange'>Receiving</span>  Monthly Payments On Each Slow Flip Property, <span className='text-customorange'>Deposited</span> Directly Into Your Bank Account.
                                </p>
                                <div className='flex justify-center'>
                                    <button className='box_btn bg-customblue text-white font-inter text-xl font-semibold mt-10 hover:bg-customorange'>Start Your Free Trial Today</button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div
                        ref={el => (imageRefs.current[5] = el)}
                        data-direction="left3"
                        className={`image-container ${visibleStates.left3 ? 'show-left' : ''}`}
                        style={{ position: "absolute", left: "-4rem", top: "190rem" }}
                    >
                        <Image src={Left} alt='' />
                    </div>

                    <div className='bg-white ultimate_box'>
                        <div className="grid grid-cols-2 gap-3">
                            <div className='flex flex-col justify-center ultimate_width'>
                                <p className='font-inter font-bold text-3xl text-center'>
                                    Cashflow Innovator Is Your One <span className='text-customorange'>Stop</span> Shop For <span className='text-customorange'>Emails</span> and Messaging.
                                </p>
                                <div className='flex justify-center'>
                                    <button className='box_btn bg-customblue text-white font-inter text-xl font-semibold mt-10 hover:bg-customorange'>Start Your Free Trial Today</button>
                                </div>
                            </div>
                            <div className='flex justify-end relative'>
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