import { Link as ScrollLink } from 'react-scroll';
import { Link, useLocation } from 'react-router-dom';
import { FaBars } from 'react-icons/fa';
import { IoMdClose } from 'react-icons/io';
import logo from '../../assets/logo.png';
import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const isLandingPage = location.pathname === '/';

  return (
    <nav className="bg-white shadow-md fixed w-full z-50 top-0">
      <div className="px-6 sm:px-10 lg:px-30">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center">
            <div className="w-10 h-10 flex items-center justify-center mr-2">
              <img src={logo} alt="logo" />
            </div>
            <span className="font-RegularMilk text-base font-lemonmilk tracking-widest">MGC BUILDING</span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6 items-center">
            {isLandingPage ? (
              <>
                <ScrollLink to="home" smooth={true} duration={500} offset={-80} className="font-LightMilk cursor-pointer  text-xs lg:text-base text-black px-5 hover:text-white hover:bg-[#db6747] py-2 rounded hover:scale-110 transform transition duration-300">
                  HOME
                </ScrollLink>
                <ScrollLink to="about" smooth={true} duration={500} offset={-80} className="font-LightMilk cursor-pointer  text-xs lg:text-base text-black px-5 hover:text-white hover:bg-[#db6747] py-2 rounded hover:scale-110 transform transition duration-300">
                  ABOUT
                </ScrollLink>
                <ScrollLink to="apply" smooth={true} duration={500} offset={-80} className="font-LightMilk cursor-pointer  text-xs lg:text-base text-black px-5 hover:text-white hover:bg-[#db6747] py-2 rounded hover:scale-110 transform transition duration-300">
                  APPLY
                </ScrollLink>
              </>
            ) : (
              <Link to="/" className="font-LightMilk text-xs lg:text-base text-black px-5 hover:text-white hover:bg-[#db6747] py-2 rounded hover:scale-110 transform transition duration-300">HOME</Link>
            )}
            <Link to="/loginpage" className="font-LightMilk text-xs lg:text-base text-black px-5 hover:text-white hover:bg-[#db6747] py-2 rounded hover:scale-110 transform transition duration-300">LOG IN</Link>
          </div>

          {/* Mobile Hamburger */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(true)}>
              <FaBars size={20} />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Fullscreen Menu */}
      <div
        className={`fixed inset-0 bg-[#f1f8fd] z-40 transition-transform duration-300 ease-in-out md:hidden ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex justify-between items-center px-4 py-4 border-b">
          <img src={logo} alt="logo" className="w-10 h-10" />
          <h2 className="text-black text-base">MGC BUILDING</h2>
          <button onClick={() => setIsOpen(false)}>
            <IoMdClose size={28} className="text-[#db6747]" />
          </button>
        </div>

        <div className="flex flex-col items-center justify-center space-y-5 pt-10">
          {isLandingPage ? (
            <>
              <ScrollLink to="home" smooth={true} duration={500} offset={-80} onClick={() => setIsOpen(false)} className="font-LightMilk cursor-pointer  text-xs lg:text-base text-black px-5 hover:text-white hover:bg-[#db6747] py-2 rounded hover:scale-110 transform transition duration-300">
                HOME
              </ScrollLink>
              <ScrollLink to="about" smooth={true} duration={500} offset={-80} onClick={() => setIsOpen(false)} className="font-LightMilk cursor-pointer  text-xs lg:text-base text-black px-5 hover:text-white hover:bg-[#db6747] py-2 rounded hover:scale-110 transform transition duration-300">
                ABOUT
              </ScrollLink>
              <ScrollLink to="apply" smooth={true} duration={500} offset={-80} onClick={() => setIsOpen(false)} className="font-LightMilk cursor-pointer  text-xs lg:text-base text-black px-5 hover:text-white hover:bg-[#db6747] py-2 rounded hover:scale-110 transform transition duration-300">
                APPLY
              </ScrollLink>
            </>
          ) : (
            <Link to="/" onClick={() => setIsOpen(false)} className="font-LightMilk text-xs lg:text-base text-black px-5 hover:text-white hover:bg-[#db6747] py-2 rounded hover:scale-110 transform transition duration-300">HOME</Link>
          )}
          <Link to="/loginpage" onClick={() => setIsOpen(false)} className="font-LightMilk text-xs lg:text-base text-black px-5 hover:text-white hover:bg-[#db6747] py-2 rounded hover:scale-110 transform transition duration-300">LOG IN</Link>
        </div>
      </div>
    </nav>
  );
}
