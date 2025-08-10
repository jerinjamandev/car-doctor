import React, { useEffect, useState } from 'react';
import { FaArrowRight } from "react-icons/fa";


const Services = () => {

    const[services,setservices]=useState([])

   useEffect(()=>{

    fetch('/services.json')
    .then(res=>res.json())
    .then(data=>{console.log(data);
    setservices(data)
    })

   },[])





    return (
        <div className="mt-30 px-6">
      {/* Heading */}
      <div className="text-center mb-12">
        <h1 className="font-bold text-3xl">Our Service Area</h1>
        <p className="mt-5 text-gray-600">
          The majority have suffered alteration in some form, by injected humour, or randomised <br />
          words which don't look even slightly believable.
        </p>
      </div>

      {/* Grid of cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-12">
        {services.map(service => (
          <div
            key={service._id}
            className="rounded-xl shadow-md overflow-hidden hover:shadow-lg transition"
          >
            <div className='flex flex-col items-center'>
                <img
              src={service.img}
              alt={service.title}
              className="w-[314px] h-[208px] object-cover"
            />
            </div>
            <div className="p-5">
              <h2 className="text-xl font-semibold mb-2">{service.title}</h2>
              <p className="text-gray-500 mb-4 text-sm">
                {service.description.slice(0, 100)}...
              </p>
              <div className='flex items-center justify-between gap-5'>
                <p className="text-lg font-bold text-red-500">${service.price}</p>
                <button>
                    <FaArrowRight className='text-red-500' />
                </button>

              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
    );
};

export default Services;