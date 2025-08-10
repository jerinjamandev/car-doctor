import React from 'react';
import logo from '../assets/logo.svg'
import { FaGoogle ,FaTwitter} from "react-icons/fa";
import { FaSquareInstagram,FaLinkedin } from "react-icons/fa6";




const Footer = () => {
    return (
        <div>
            

        <footer className="bg-black text-white py-10">
      <div className="flex items-center justify-between px-14">
        
        {/* Logo Section */}
        <div className="">
         <div>
            <img src={logo} alt="" />
         </div>
          <p>Edwin Diaz is a software and web <br />
            technologies engineer,a life coach <br />
            trainer who is also a serial ..</p>

            <div className='flex items-center justify-start gap-4 mt-5 text-3xl'>
                <a href="">
                    <FaGoogle />
                </a>
                <a href="">
                    <FaTwitter />
                </a>
                <a href="">
                    <FaSquareInstagram />
                </a>
                <a href="">
                    <FaLinkedin />
                </a>
            </div>
        </div>

        {/* About Section */}
        <div className="">
          <h2 className="text-xl font-semibold mb-4">About</h2>
          <p className="text-sm">Home</p>
          <p className="text-sm">service</p>
          <p className="text-sm">contact</p>
        </div>

        {/* Company Section */}
        <div className="">
          <h2 className="text-xl font-semibold mb-4">Company</h2>
          <p className="text-sm">Why Car Doctor</p>
          <p className="text-sm">about</p>
         
        </div>

        {/* Support Section */}
        <div className="">
          <h2 className="text-xl font-semibold mb-4">Support</h2>
          <p className="text-sm">Support Center</p>
          <p className="text-sm">Feedback</p>
          <p className="text-sm">Accesbility</p>
        </div>
      </div>
    </footer>






        </div>
    );
};

export default Footer;