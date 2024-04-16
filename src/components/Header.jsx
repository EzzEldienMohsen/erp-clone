import { FaBars } from 'react-icons/fa';
import { logo, redLogo } from '../assets';
import { MdLock } from 'react-icons/md';
import React from 'react';
import { TheDrawer } from '../SubComponents';
import { motion } from 'framer-motion';

const Header = () => {
  const [open, setOpen] = React.useState(false);
  const [isScrolled, setIsScrolled] = React.useState(false);

  const openDrawer = () => setOpen(true);
  const closeDrawer = () => setOpen(false);
  
  React.useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const threshold = 170;
      setIsScrolled(scrollPosition > threshold);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <motion.header
      transition={{ duration: 0.5, ease: "easeInOut", }}
      initial="bg-transparent"
      animate={isScrolled ? 'bg-[#1f1f1f]' : 'bg-transparent'}
      className={`fixed top-0 left-0 w-full flex items-center ${
        isScrolled ? 'bg-[#1f1f1f]' : 'bg-transparent'
      } justify-between border-b border-[#D1D1D1] px-4 md:px-8 `}
    >
      {/* Menu Button */}
      <button
        onClick={openDrawer}
        className="flex items-center justify-center gap-3 text-white lg:gap-8 h-14 md:h-16 w-[25%] md:w-[20%] bg-inherit hover:bg-[#9b0808] active:bg-[#9b0808] border-r border-[#D1D1D1] lg:bg-transparent"
      >
        <FaBars className="w-6 h-6 md:w-8 md:h-8" />
        <h1 className="text-sm md:text-lg">MENU</h1>
        <TheDrawer open={open} closeDrawer={closeDrawer} />
      </button>

      {/* Logo */}
      <div className="flex justify-center items-center w-[50%] md:w-[70%]">
        <img src={isScrolled?redLogo:logo} alt="logo" className="w-3/5 md:w-1/5" />
      </div>

      {/* Login Button */}
      <div className="flex items-center gap-3 text-white lg:gap-8 h-14 md:h-16 w-[25%] md:w-[20%] justify-center hover:bg-[#9b0808] active:bg-[#9b0808] border-l border-[#D1D1D1]">
        <MdLock className="w-6 h-6 md:w-8 md:h-8" />
        <h1 className="text-sm md:text-lg">LOGIN</h1>
      </div>
    </motion.header>
  );
};



export default Header;
