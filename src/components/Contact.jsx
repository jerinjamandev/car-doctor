import React from 'react';
import { TbCalendarClock } from "react-icons/tb";
import { IoCallOutline } from "react-icons/io5";
import { FaLocationDot } from "react-icons/fa6";




const Contact = () => {
    return (

        <div className='bg-black mt-20 h-44 mx-auto w-[80%] rounded-2xl'>
            <div className='flex justify-between px-33 py-12'>
                <div className='flex items-center justify-center gap-4'>
                    <div>
                        <TbCalendarClock className='text-white text-5xl' />
                    </div>
                    <div className='text-white'>
                        <h2>We are open monday-friday</h2>
                        <h1 className='text-2xl font-bold'>7:00 am - 9:00 pm</h1>
                    </div>
                </div>





                <div className='flex items-center justify-center gap-4'>
                    <div>
                        <IoCallOutline className='text-white text-5xl' />
                    </div>
                    <div className='text-white'>
                        <h2>Have a question?</h2>
                        <h1 className='text-2xl font-bold'>+2546 251 2658</h1>
                    </div>
                </div>


                <div className='flex items-center justify-center gap-4'>
                    <div>
                        <FaLocationDot className='text-white text-5xl' />
                    </div>
                    <div className='text-white'>
                        <h2>Need a repair? our address</h2>
                        <h1 className='text-2xl font-bold'>Liza Street, New York</h1>
                    </div>
                </div>

            </div>






        </div>

    );
};

export default Contact;