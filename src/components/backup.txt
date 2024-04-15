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
    <div className="w-full fixed top-0 left-0 bg-transparent flex items-center justify-between  border-b border-[#D1D1D1]">
      <button
        onClick={openDrawer}
        className="h-14 md:h-16 w-1/5 md:w-[15%] bg-inherit flex justify-center items-center text-white gap-4 hover:bg-[#9b0808] active:bg-[#9b0808] border-r border-[#D1D1D1]  bg-[#9b0808] lg:bg-transparent"
      >
        <FaBars className="w-4 h-4 md:w-6 md:h-6" />
        <h1 className="text-sm md:text-md">MENU</h1>
        <TheDrawer open={open} closeDrawer={closeDrawer} />
      </button>

      <div className="w-[40%] md:w-[50%] flex justify-center items-center">
        <img src={logo} alt="logo" className="w-3/5 md:w-[20%]" />
      </div>
      <div className="w-[20%] md:w-[15%] h-14 md:h-16 flex text-white justify-center items-center gap-4 hover:bg-[#9b0808] active:bg-[#9b0808] border-l border-[#D1D1D1]">
        <MdLock className="w-4 h-4 md:w-6 md:h-6" />
        <h1 className="text-sm md:text-md">LOGIN</h1>
      </div>
    </div>
  );
};

export default Header;
