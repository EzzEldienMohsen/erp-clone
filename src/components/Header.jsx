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
    <div className="w-full fixed top-0 left-0 bg-transparent flex items-center justify-start border-b-2 border-b-[#ddd] ">
      <button
        onClick={openDrawer}
        className="h-[95px] w-[20vw] md:w-[15vw] bg-inherit flex justify-center items-center text-white gap-2 hover:bg-[#9b0808] active:bg-[#9b0808] border-r-2 border-r-[#ddd] border-spacing-2"
      >
        <FaBars className="w-4 h-4 md:w-6 md:h-6" />
        <h1 className="text-md md:text-xl">MENU</h1>
      </button>
      {/* DRAWER */}
      <TheDrawer open={open} closeDrawer={closeDrawer} />

      {/* Drawer End */}
      <div className="w-[60vw] md:w-[70vw] flex justify-center items-center">
        <img src={logo} alt="logo" />
      </div>
      <div className="w-[20vw] md:w-[15vw] h-[95px] flex text-white justify-center items-center gap-4 hover:bg-[#9b0808] active:bg-[#9b0808] border-l-2 border-l-[#ddd] border-spacing-2">
        <MdLock className="w-4 h-4 md:w-6 md:h-6" />
        <h1 className="text-md md:text-xl">LOGIN</h1>
      </div>
    </div>
  );
};

//CHECK THE DRAWER AGAIN
export default Header;
