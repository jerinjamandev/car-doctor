import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../assets/logo.svg';
import { BsMinecartLoaded } from "react-icons/bs";
import { IoSearch } from "react-icons/io5";



const Navbar = () => {

    const navitem =
        <>
            <li className='font-bold text-[15px]'><Link to={'/'}>Home</Link></li>
            <li className='font-bold text-[15px]'><Link to={'/about'}>About</Link></li>
            <li className='font-bold text-[15px]'><Link to={'/services'}>Services</Link></li>
            <li className='font-bold text-[15px]'><Link to={'/blog'}>Blog</Link></li>
            <li className='font-bold text-[15px]'><Link to={'/contact'}>Contact</Link></li>

        </>



    return (

        <div>

            <div className="navbar bg-base-100 shadow-sm px-12">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                            {navitem}
                        </ul>
                    </div>
                    <a><img className="h-[90px] w-[90px]" src={Logo} alt="" /></a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">

                        {navitem}

                    </ul>
                </div>
                <div className="navbar-end gap-4">
                    <div className='flex items-center gap-4'>
                        <Link><BsMinecartLoaded/></Link>

                        <Link><IoSearch/></Link>
                    </div>
                    <a className="btn btn-lg border-[#FF3811] text-[#FF3811]">Log-in</a>
                </div>
            </div>

        </div>
    );
};

export default Navbar;