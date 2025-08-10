import React from 'react';
import Icons from '../assets/icons/group.svg'
import clock from '../assets/icons/clock.svg'
import person from '../assets/icons/person.svg'
import hand from '../assets/icons/hand.svg'
import check from '../assets/icons/check.svg'
import delevery from '../assets/icons/deliveryt.svg'

const Team = () => {
    return (
        <div className='mt-55'>
            <div className='text-center'>
                <h2 className='text-[#FF3811] text-3xl font-bold'>Core Features</h2>
                <h1 className='font-bold text-6xl mt-3'>Why Choose Us</h1>
                <p className='text-gray-500 mt-4'>the majority have suffered alteration in some form, by injected humour,or randomised <br />
                      words which don't look even slightly believable. </p>
            </div>

        {/* card section */}
            <div>
            <div className='flex items-center justify-center px-12 my-19 gap-8'>
                <div className='border-2 p-10 text-center rounded-2xl'>
                    <div className='flex flex-col items-center'>
                    <img src={Icons} alt="" />
                    </div>
                    <h2 className='mt-2 font-bold'>Expert Team</h2>
                    
                </div>
           

            <div className='border-2 p-10 text-center rounded-2xl bg-amber-700'>
                  <div className='flex flex-col items-center'>
                      <img src={clock} alt="" />
                  </div>
                    <h2 className='text-white mt-2 font-bold'>Timely Delivery</h2>
                    
                </div>


                 <div className='border-2 p-10 text-center rounded-2xl'>
                    <div className='flex flex-col items-center'>
                    <img src={person} alt="" />
                    </div>
                    <h2 className='mt-2 font-bold'>24/7 Support</h2>
                    
                </div>


                 <div className='border-2 p-10 text-center rounded-2xl'>
                    <div className='flex flex-col items-center'>
                    <img src={hand} alt="" />

                    </div>
                    <h2 className='mt-2 font-bold'>Best Equipment</h2>
                    
                </div>


                 <div className='border-2 p-10 text-center rounded-2xl'>
                    <div className='flex flex-col items-center'>
                     <img src={check} alt="" />
                     </div>
                    <h2 className='mt-2 font-bold'>100% Guranty</h2>
                    
                </div>


                 <div className='border-2 p-10 text-center rounded-2xl'>
                    <div className='flex flex-col items-center'>
                    <img src={delevery} alt="" />
                     </div>
                    <h2 className='mt-2 font-bold'>Timely Delivery</h2>
                    
                </div>
            </div>

            
            </div>
        </div>
    );
};

export default Team;