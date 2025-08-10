import React from 'react';
import myImage from '../assets/images/about_us/person.jpg'
import parts from '../assets/images/about_us/parts.jpg'

const About = () => {
  return (
     <div className='my-12'>
      <div className="flex items-center justify-center px-12 gap-3">
        {/* Left side image */}
        <div className="relative">
          <img src={myImage} alt="Sample" className="rounded-2xl w-[460px] h-[353px]" />
          <img src={parts} className='w-[327px] h-[310px] absolute left-[150px] top-32' alt="" />
        </div>

        {/* Right side text */}
        <div className="p-6">
          <h2 className="text-xl text-orange-500 font-extrabold mb-4">About Us</h2>

          <p className="mt-2 text-4xl  font-bold text-gray-800 ">
            We are qualified <br />
            & of experience <br />
            in this field
          </p>

          <p className="mt-2 text-sm text-gray-600 leading-relaxed text-justify">
            There are many variations of passages of Lorem Ipsum <br /> available,
            but the majority have suffered alteration in some <br /> form, by injected humour,
            or randomised words which don't <br /> look even slightly believable.
          </p>

          <p className="mt-2 text-sm text-gray-600 leading-relaxed text-justify">
            The majority have suffered alteration in some form, by injected <br /> humour,
            or randomised words which don't look even slightly <br /> believable.
          </p>

          <button className="btn bg-[#FF3811] text-white mt-7">
            Get More Info
          </button>
        </div>


      </div>
    </div>

  );
};

export default About;