"use client"; // Add this line at the very top
import { useState } from 'react';
import '../../styles/Understand.css'
import Link from 'next/link';
import Image from 'next/image';
import { understand } from '@/data/understand/understand';
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";


const UnderstandComponent: React.FC = () => {

    const [openId, setOpenId] = useState<string | null>(understand[0].id);

    const handleToggle = (id: string) => {
        setOpenId(openId === id ? null : id);
    };

    return (
        <>
            <div className='bg-customligher understand_body'>
                <p className='font-inter text-center text-customblack font-bold understand_title'>
                    Understanding The <span className='text-customorange'>Key</span> Components
                </p>
                <div className="grid grid-cols-3 gap-6 mt-10">
                    {understand.map(item => (
                        <div key={item.id} className='flex flex-col rounded-lg overflow-hidden'>
                            {openId === item.id && (
                                <div>
                                    <Image src={item.img} alt='one' width={460} height={250} />
                                    {item.desp && <p className='bg-customblue desp_body font-inter text-base font-medium text-white'>{item.desp}</p>}
                                </div>
                            )}
                            <div className={`bg-customblue pt-5 pb-5 pl-9 pr-3.5 flex justify-between items-center under_body ${openId === item.id ? 'under_margin1' : 'under_margin'}`}>
                                <p className='font-inter font-semibold text-xl text-white'>{item.title}</p>
                                <div className='understand_circle' onClick={() => handleToggle(item.id)}>
                                    {openId === item.id ? (
                                        <IoIosArrowUp className='text-base text-customblue' />
                                    ) : (
                                        <IoIosArrowDown className='text-base text-customblue' />
                                    )}
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