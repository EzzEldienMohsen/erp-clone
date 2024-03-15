/* eslint-disable react/prop-types */
import { Drawer } from '@material-tailwind/react';
import { Link } from 'react-router-dom';
import { IoHomeOutline } from 'react-icons/io5';
import { PiShareNetworkThin } from 'react-icons/pi';
import { LiaSuitcaseSolid } from 'react-icons/lia';
import { GiShieldcomb } from 'react-icons/gi';
import { GoMail } from 'react-icons/go';

const TheDrawer = ({ open, closeDrawer }) => {
  return (
    <Drawer
      open={open}
      onClose={closeDrawer}
      className="py-8 mt-[95px] bg-gray-200 w-[40vw] md:w-[35vw] lg:w-[40vw]"
    >
      <ul className=" flex items-start justify-center flex-col">
        <li className="px-4 mb-2 hover:text-[#9b0808] active:text-[#9b0808] grid grid-cols-3">
          <Link
            to="/"
            className="hover:text-[#9b0808] active:text-[#9b0808] text-[#1c1c1c] gap-5 font-light flex justify-between items-center col-span-2 col-start-1 text-lg md:text-2xl lg:text:xl"
          >
            <IoHomeOutline />

            <h1>Home</h1>
          </Link>
        </li>
        <hr className="mt-4 mb-2 bg-gray-300 w-full h-[3px] rounded-3xl" />
        <li className="w-full">
          <div className="collapse collapse-arrow w-inherit rounded-none">
            <input type="checkbox" className="w-full hover:text-[#9b0808]" />
            <div className="collapse-title text-lg md:text-2xl lg:text:xl flex items-center gap-4 hover:text-[#9b0808] active:text-[#9b0808] text-[#1c1c1c]">
              <PiShareNetworkThin />
              <h1>Modules</h1>
            </div>

            <div className="collapse-content bg-white text-md md:text-xl lg:text:lg flex flex-col justify-center items-center py-2 text-black rounded-none">
              <Link
                to=""
                className="capitalize pt-2 hover:text-[#9b0808] active:text-[#9b0808]"
              >
                human capital management
              </Link>
              <Link
                to=""
                className="capitalize pt-2 hover:text-[#9b0808] active:text-[#9b0808]"
              >
                pay roll manager
              </Link>
              <Link
                to=""
                className="capitalize pt-2 hover:text-[#9b0808] active:text-[#9b0808]"
              >
                workshop module
              </Link>
              <Link
                to=""
                className="capitalize pt-2 hover:text-[#9b0808] active:text-[#9b0808]"
              >
                journey management
              </Link>
            </div>
          </div>
        </li>
        <hr className="mb-2 -mt-1 bg-gray-300 w-full h-[3px] rounded-3xl" />
        <li className="px-4 pt-4 hover:text-[#9b0808] active:text-[#9b0808] grid grid-cols-3">
          <Link
            to="/"
            className="hover:text-[#9b0808] active:text-[#9b0808] text-[#1c1c1c] gap-5 font-light flex py-2 justify-between items-center col-span-3 col-start-1 text-lg md:text-2xl lg:text:xl"
          >
            <LiaSuitcaseSolid />
            <h1>About Ratiba</h1>
          </Link>
        </li>
        <hr className="mt-4 bg-gray-300 w-full h-[3px] rounded-3xl" />
        <li className="px-4 pt-4 hover:text-[#9b0808] active:text-[#9b0808] grid grid-cols-3">
          <Link
            to="/"
            className="hover:text-[#9b0808] active:text-[#9b0808] text-[#1c1c1c] gap-5 font-light flex py-2 justify-between items-center col-span-3 col-start-1 text-lg md:text-2xl lg:text:xl"
          >
            <GiShieldcomb />
            <h1>Terms & Privacy</h1>
          </Link>
        </li>
        <hr className="mt-4 bg-gray-300 w-full h-[3px] rounded-3xl" />
        <li className="px-4 pt-4 hover:text-[#9b0808] active:text-[#9b0808] grid grid-cols-3">
          <Link
            to="/"
            className="hover:text-[#9b0808] active:text-[#9b0808] text-[#1c1c1c] gap-5 font-light flex py-2 justify-between items-center col-span-3 col-start-1 text-lg md:text-2xl lg:text:xl"
          >
            <GoMail />
            <h1>Get In touch</h1>
          </Link>
        </li>
        <hr className="mt-4 bg-gray-300 w-full h-[3px] rounded-3xl" />
      </ul>
    </Drawer>
  );
};

export default TheDrawer;
