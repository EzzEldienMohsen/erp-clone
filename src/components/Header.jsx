import { FaBars } from 'react-icons/fa';
import { logo } from '../assets';
import { MdLock } from 'react-icons/md';
import { Drawer, Typography, IconButton } from '@material-tailwind/react';
import React from 'react';
import { Button } from 'flowbite-react';
const Header = () => {
  const [open, setOpen] = React.useState(false);

  const openDrawer = () => setOpen(true);
  const closeDrawer = () => setOpen(false);

  return (
    <div className="w-full fixed top-0 left-0 bg-transparent flex items-center justify-start ">
      <button
        onClick={openDrawer}
        className="h-[95px] w-[20vw] md:w-[15vw] bg-inherit flex justify-center items-center text-white gap-2 hover:bg-[#9b0808] active:bg-[#9b0808] border-r-2 border-r-white border-spacing-2"
      >
        <FaBars className="w-4 h-4 md:w-6 md:h-6" />
        <h1 className="text-md md:text-xl">MENU</h1>
      </button>
      {/* DRAWER */}
      <Drawer open={open} onClose={closeDrawer} className="p-4">
        <div className="mb-6 flex items-center justify-between">
          <Typography variant="h5" color="blue-gray">
            Material Tailwind
          </Typography>
          <IconButton variant="text" color="blue-gray" onClick={closeDrawer}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="h-5 w-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </IconButton>
        </div>
        <Typography color="gray" className="mb-8 pr-4 font-normal">
          Material Tailwind features multiple React and HTML components, all
          written with Tailwind CSS classes and Material Design guidelines.
        </Typography>
        <div className="flex gap-2">
          <Button size="sm" variant="outlined">
            Documentation
          </Button>
          <Button size="sm">Get Started</Button>
        </div>
      </Drawer>
      <div className="w-[60vw] md:w-[70vw] flex justify-center items-center">
        <img src={logo} alt="logo" />
      </div>
      <div className="w-[20vw] md:w-[15vw] h-[95px] flex text-white justify-center items-center gap-2 hover:bg-[#9b0808] active:bg-[#9b0808] border-l-2 border-l-white border-spacing-2">
        <MdLock className="w-4 h-4 md:w-6 md:h-6" />
        <h1 className="text-md md:text-xl">LOGIN</h1>
      </div>
    </div>
  );
};

{
  /* <li className="hover:text-[#9b0808] grid grid-cols-3">
  <Link
    to="/"
    className="hover:text-[#9b0808] text-[#1c1c1c] font-light flex justify-between items-center col-span-1 col-start-1 text-lg md:text-2xl lg:text:xl"
  >
    <IoHomeOutline />

    <h1>Home</h1>
  </Link>
</li>; */
}

// ADD A DRAWER AND THATS IT
export default Header;
