"use client"; // Add this line at the very top
import { useState, useEffect } from 'react';
import '../../styles/Understand.css'
import Link from 'next/link';
import Image from 'next/image';
import { understand } from '@/data/understand/understand';
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import AOS from 'aos';
import 'aos/dist/aos.css';


const UnderstandComponent: React.FC = () => {

    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
    const [hasRendered, setHasRendered] = useState(false);

    useEffect(() => {
        // Initialize AOS once when the component mounts
        AOS.init({
            offset: 300,
            duration: 1000,
            once: true,
            disable: 'mobile', // Optional: Disable on mobile if needed
        });
    }, []);

    return (
        <>
            <div className='bg-customligher understand_body'>
                <p className='font-inter text-center text-customblack font-bold understand_title' data-aos="fade-up">
                    Understanding The <span className='text-customorange'>Key</span> Components
                </p>
                <div className="grid grid-cols-3 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-6 mt-10" data-aos="fade-up">
                    {understand.map((item, index) => (
                        <div key={item.id} className='flex flex-col rounded-lg'
                            onMouseEnter={() => setHoveredIndex(index)}
                            onMouseLeave={() => setHoveredIndex(null)}>
                            <div className='understand_img relative' style={{ backgroundImage: `url(${item.img})` }}>
                                <div className="bg-customblue pt-8 pb-8 pl-9 pr-3.5 under_body">
                                    <div className='flex justify-between items-center'>
                                        <p className='font-inter font-semibold text-xl lg:text-lg xl:text-base text-white'>
                                            {item.title}
                                        </p>
                                        <div className='understand_circle'>
                                            {hoveredIndex === index ?
                                                <IoIosArrowDown className='text-base text-white' /> :
                                                <IoIosArrowUp className='text-base text-white' />
                                            }
                                        </div>
                                    </div>
                                    <p className={`bg-customblue desp_body font-inter text-base sm:text-sm md:text-sm lg:text-sm xl:text-sm font-medium text-white ${hoveredIndex === index ? 'blocks' : 'hiddens'}`}>
                                        {item.desp}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>


        </>
    )
}

export default UnderstandComponent;