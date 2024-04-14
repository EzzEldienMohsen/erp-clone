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
    <div className="w-[100vw] fixed top-0 left-0 bg-transparent flex items-center justify-start border-b-[1px] border-b-[#D1D1D1] ">
      <button
        onClick={openDrawer}
        className="h-[95px] w-[25vw] md:w-[15vw] bg-inherit flex justify-center items-center text-white gap-2 hover:bg-[#9b0808] active:bg-[#9b0808] border-r-[1px] border-r-[#D1D1D1]  bg-[#9b0808] lg:bg-transparent"
      >
        <FaBars className="w-4 h-4 md:w-6 md:h-6 text-md md:text-xl" />
        <h1 className="text-md md:text-xl">MENU</h1>
      </button>
      {/* DRAWER */}
      <TheDrawer open={open} closeDrawer={closeDrawer} />

      {/* Drawer End */}
      <div className="w-[50vw] md:w-[70vw] flex justify-center items-center">
        <img src={logo} alt="logo" className="w-3/5 md:w-auto" />
      </div>
      <div className="w-[25vw] md:w-[15vw] h-[95px] flex text-white justify-center items-center gap-4 hover:bg-[#9b0808] active:bg-[#9b0808] border-l-[1px] border-l-[#D1D1D1]">
        <MdLock className="w-4 h-4 md:w-6 md:h-6 text-md md:text-xl" />
        <h1 className="text-md md:text-xl">LOGIN</h1>
      </div>
    </div>
  );
};

//CHECK THE DRAWER AGAIN
export default Header;
