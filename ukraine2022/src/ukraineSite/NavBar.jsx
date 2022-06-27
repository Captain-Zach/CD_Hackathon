import React, {useState} from 'react';
// import { Link, animateScroll as scroll } from 'react-scroll';
import {Link} from 'react-router-dom';
import { MenuIcon, XIcon } from '@heroicons/react/outline';

const Navbar = () => {
    const [nav, setNav] = useState(false)
    const handleClick = () => setNav(!nav)
    const handleClose =()=> setNav(!nav)

  return (
    <div className='w-screen h-[80px] z-10 bg-ukraineYellow fixed drop-shadow-lg'>
      <div className='px-2 flex justify-between items-center w-full h-full'>
        <div className='flex items-center'>
          <h1 className='text-3xl font-bold mr-4 sm:text-4xl'>ukraine|<span className="text-ukraineBlue">RELIEF</span></h1>
          <ul className='hidden md:flex'>
          <li><Link to="home" smooth={true} duration={500}>Home</Link></li>
          <li><Link to="about" smooth={true} offset={-200} duratio={500}>About</Link></li>
          <li><Link to="mission" smooth={true} offset={-100} duration={500}>Mission</Link></li>
          <li><Link to="news" smooth={true} offset={-50} duration={500}>News</Link></li>
          <li><Link to="/app" smooth={true} offset={-50} duration={500}>Application</Link></li>
          </ul>
        </div>
        <div className='hidden md:flex pr-4'>
          <button className='bg-ukraineBlue text-ukraineYellow px-8 py-3 rounded mr-5 font-bold'>Donate</button>
        </div>
        <div className='md:hidden mr-4' onClick={handleClick}>
            {!nav ? <MenuIcon className='w-5' /> : <XIcon className='w-5' />}
        </div>
      </div>

      <ul className={!nav ? 'hidden' : 'absolute bg-ukraineBlue w-full px-8'}>
          <li className='border-b-2 border-ukraineBlue w-full'><Link onClick={handleClose} to="home" smooth={true} duration={500}>Home</Link></li>
          <li className='border-b-2 border-ukraineBlue w-full'><Link onClick={handleClose} to="about" smooth={true} offset={-200} duration={500}>About</Link></li>
          <li className='border-b-2 border-ukraineBlue w-full'><Link onClick={handleClose} to="mission" smooth={true} offset={-50} duration={500}>Mission</Link></li>
          <li className='border-b-2 border-ukraineBlue w-full'><Link onClick={handleClose} to="news" smooth={true} offset={-50} duration={500}>News</Link></li>
          <li className='border-b-2 border-ukraineBlue w-full'><Link onClick={handleClose} to="support" smooth={true} offset={-100} duration={500}>Support</Link></li>

        <div className='flex flex-col my-4'>
            <button className='bg-ukraineYellow rounded px-8 py-3 font-bold'>Sign Up</button>
        </div>
      </ul>
    </div>
  );
};

export default Navbar;