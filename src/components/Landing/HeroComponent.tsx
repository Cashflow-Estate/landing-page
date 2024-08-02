"use client"; // Add this line at the very top
import { useState, useEffect, useRef } from 'react';
import '../../styles/Hero.css'
import Link from 'next/link';
import Image from 'next/image';
import { hero } from '@/data/hero/hero';
import { heroCards } from '@/data/hero/hero';
import Play from '../../../public/images/hero/play.png'
import Sound from '../../../public/images/hero/sound.png'
import Circle_big from '../../../public/images/hero/circle_big.png'
import Circle_group from '../../../public/images/hero/circle_group.png'
import { AiFillSound } from "react-icons/ai";
import Typewriter from 'typewriter-effect';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";


const HeroComponent: React.FC = () => {

    const [isSoundEnabled, setIsSoundEnabled] = useState(false);
    const [isClient, setIsClient] = useState(false);
    const textRef = useRef(null);

    const startAnimation = () => {
        if (textRef.current) {
            textRef.current.classList.add('typing-text');
        }
    };

    useEffect(() => {
        startAnimation(); // Start animation on initial render

        const handleScroll = () => {
            if (textRef.current) {
                startAnimation(); // Restart animation on scroll
            }
        };

        setIsClient(true);

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleToggleSound = () => {
        setIsSoundEnabled(!isSoundEnabled);
    };

    const settings = {
        slidesToShow: 4,
        autoplay: true,
        autoplaySpeed: 0,
        speed: 8000,
        pauseOnHover: false,
        cssEase: 'linear',
        responsive: [
            {
                breakpoint: 1200, // LG
                settings: {
                    slidesToShow: 4,
                }
            },
            {
                breakpoint: 992, // MD
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 768, // SM
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 650, // SM
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 576, // XS
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 480, // XS
                settings: {
                    slidesToShow: 2,
                }
            }
        ]
    };


    return (
        <>
            {hero.map((item) => {
                const [part1, part2] = item.title.split('AI-Based Platform');
                return (
                    <div key={item.id} className='hero_body px-16 sm:px-6 md:px-10 pt-14 relative'>
                        <p className='font-caveat text-4xl font-bold text-customblack text-center sm:text-lg md:text-lg lg:text-xl xl:text-3xl 2xl:text-3xl'>{item.tie}</p>
                        <div className='mt-2.5 flex justify-center'>
                            <p className='font-inter font-black text-customblack text-center hero_des'>
                                {part1}
                                {isClient && (
                                    <span className='text-customorange' style={{ display: 'inline-block' }}>
                                        <Typewriter
                                            options={{
                                                strings: ['AI-Based Platform'],
                                                autoStart: true,
                                                loop: false,
                                                deleteSpeed: Infinity,
                                            }}
                                            onInit={(typewriter) => {
                                                typewriter
                                                    .typeString('AI-Based Platform')
                                                    .callFunction(() => {
                                                        console.log('String typed out!');
                                                    })
                                                    .start();
                                            }}
                                        />
                                    </span>
                                )}
                                {part2}
                            </p>
                        </div>
                        <div className='mt-6 flex justify-center'>
                            <div className='desp_width'>
                                <p className='font-inter text-4xl font-medium text-center sm:text-sm md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl'>
                                    {item.description}
                                </p>
                            </div>
                        </div>
                        <div className='flex justify-center mt-7'>
                            <button className='pt-7 pb-8 sm:pb-6 bg-customblue text-white font-inter text-xl sm:text-sm md:text-base font-extrabold flex items-center gap-3 rounded-md hover:bg-customorange heros_btn'>
                                {item.tag}
                                <Image src={item.img} alt="" width={13} height={8} priority />
                            </button>
                        </div>
                        <div className='flex justify-center gap-1 items-center mt-5'>
                            <p className='text-center font-inter font-base text-customblack font-semibold'>{item.dep}</p>
                            <p className='text-center hero-list-item font-inter font-base text-customblack font-semibold'>{item.delivery}</p>
                        </div>
                    </div>
                );
            })}

            <div className="grid grid-cols-6 gap-5 mt-10 hero_card sm:hidden md:hidden lg:hidden xl:hidden">
                {heroCards.map((item) => (
                    <div key={item.id} className='bg-custombrown pt-3.5 px-8 2xl:px-4 pb-7 flex flex-col gap-3 2xl:gap-3 justify-center items-center rounded-3xl hero_btn hover:bg-customblue group'>
                        <div className='2xl:h-12'>
                            <item.icon className='text-5xl text-customblue group-hover:text-white' />
                        </div>
                        <div className='2xl:h-16'>
                            <p className='font-poppins text-base text-center font-semibold text-customblack group-hover:text-white'>
                                {item.title}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
            {/* sm to xl */}
            <div className='mt-10 hero_card sm:block md:block lg:block xl:block 2xl:hidden hidden'>
                <Slider {...settings}>
                    {heroCards.map((item) => (
                        <div key={item.id} className="p-2">
                            <div className='bg-custombrown pt-3.5 px-8 sm:px-3.5 md:px-3.5 pb-7 flex flex-col gap-3 2xl:gap-3 justify-center items-center rounded-3xl hero_btn hover:bg-customblue text-customblack hover:text-white'>
                                <item.icon className='text-5xl text-customblue group-hover:text-white' />
                                <div className='md:h-16 lg:h-16'>
                                    <p className='font-poppins text-base sm:text-sm md:text-base text-center font-semibold'>
                                        {item.title}
                                    </p>
                                </div>
                            </div>
                        </div>

                    ))}
                </Slider>
            </div>
            <div className='hero_video mt-20'>
                <p className='font-inter text-customblack font-bold hero_video_title'>Watch The Video Below to Learn More About Cashflow Innovator.</p>
                <div className='hero_bg_img mt-10 relative'>
                    <div className='flex gap-2 items-center pt-96 pl-10 z-10'>
                        {!isSoundEnabled ? (
                            <Image
                                src={Sound}
                                alt="Sound Icon"
                                className="cursor-pointer w-5"
                                onClick={handleToggleSound}
                            />
                        ) : (
                            <AiFillSound
                                className="text-white text-xl cursor-pointer"
                                onClick={handleToggleSound}
                            />
                        )}
                        <p className="font-inter text-xs font-semibold text-white">
                            {isSoundEnabled ? 'Disable Sound' : 'Enable Sound'}
                        </p>
                    </div>
                    <div className="play-button-container absolute top-1/2 left-1/2">
                        <Image src={Play} alt="Play Button" className='cursor-pointer' />
                    </div>
                    <div className='bg-customblue absolute top-0 w-full rounded-xl py-2.5'>
                        <p className='font-inter text-lg font-semibold text-white text-center'>Sign Up For A Free Trial Today!</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default HeroComponent;