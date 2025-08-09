import React from 'react';
import myImage from '../assets/images/about_us/person.jpg'

const About = () => {
  return (
    <div className='my-12'>
      <div className="flex items-center justify-center px-12 gap-3">
        {/* Left side image */}
        <div className="">
          <img src={myImage} alt="Sample" className="w-[350px] h-[400px] rounded-2xl" />
        </div>

        {/* Right side text */}
        <div className="p-6">
          <h2 className="text-2xl font-extrabold mb-4">About Us</h2>

          <p className="mt-2 text-lg font-bold text-gray-800 leading-relaxed">
            We are qualified <br />
            & of experience <br />
            in this field
          </p>

          <p className="mt-2 text-sm text-gray-600 leading-relaxed text-justify">
            There are many variations of passages of Lorem Ipsum available,
            but the majority have suffered alteration in some form, by injected humour,
            or randomised words which don't look even slightly believable.
          </p>

          <p className="mt-2 text-sm text-gray-600 leading-relaxed text-justify">
            The majority have suffered alteration in some form, by injected humour,
            or randomised words which don't look even slightly believable.
          </p>

          <button className="mt-7 px-6 py-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg shadow-lg hover:scale-105 transform transition-all duration-300">
            Get More Info
          </button>
        </div>


      </div>
    </div>
  );
};

export default About;