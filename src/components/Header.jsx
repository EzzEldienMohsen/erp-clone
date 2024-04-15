import { FaBars } from 'react-icons/fa';
import { logo } from '../assets';
import { MdLock } from 'react-icons/md';
import React from 'react';
import { TheDrawer } from '../SubComponents';

const Header = () => {
  const [open, setOpen] = React.useState(false);

  const openDrawer = () => setOpen(true);
  const closeDrawer = () => setOpen(false);

  return (
     <header className="fixed top-0 left-0 w-full bg-transparent flex items-center justify-between border-b border-[#D1D1D1] px-4 md:px-8">
      {/* Menu Button */}
      <button
        onClick={openDrawer}
        className="flex items-center gap-2 h-14 md:h-16 w-[20%] md:w-[15%] bg-inherit text-white hover:bg-[#9b0808] active:bg-[#9b0808] border-r border-[#D1D1D1] lg:bg-transparent"
      >
        <FaBars className="w-6 h-6 md:w-8 md:h-8" />
        <h1 className="text-sm md:text-lg">MENU</h1>
        <TheDrawer open={open} closeDrawer={closeDrawer} />
      </button>

      {/* Logo */}
      <div className="flex justify-center items-center w-[60%] md:w-[40%]">
        <img src={logo} alt="logo" className="w-3/5 md:w-1/5" />
      </div>

      {/* Login Button */}
      <div className="flex items-center gap-2 h-14 md:h-16 w-[20%] md:w-[15%] text-white justify-center hover:bg-[#9b0808] active:bg-[#9b0808] border-l border-[#D1D1D1]">
        <MdLock className="w-6 h-6 md:w-8 md:h-8" />
        <h1 className="text-sm md:text-lg">LOGIN</h1>
      </div>
    </header>
  );
};



export default Header;
