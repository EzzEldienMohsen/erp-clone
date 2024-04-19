/* eslint-disable react/prop-types */
import { useState } from 'react';
import { Drawer } from '@material-tailwind/react';
import { Link } from 'react-router-dom';
import { IoHomeOutline } from 'react-icons/io5';
import { PiShareNetworkThin } from 'react-icons/pi';
import { LiaSuitcaseSolid } from 'react-icons/lia';
import { GiShieldcomb } from 'react-icons/gi';
import { GoMail } from 'react-icons/go';

const TheDrawer = ({ open, closeDrawer }) => {
  const [isModulesOpen, setIsModulesOpen] = useState(false);

  const toggleModules = () => {
    setIsModulesOpen(!isModulesOpen);
  };

  return (
    <Drawer
      open={open}
      onClose={closeDrawer}
      className="py-8 mt-[54px] md:mt-[64px] lg:mt-[95px] bg-gray-200 w-[80vw] md:w-[60vw] lg:w-[40vw] overflow-y-auto"
    >
      <ul className="flex flex-col items-center justify-evenly space-y-4">
        <li className="w-full">
          <Link
            to="/"
            className="flex items-center justify-start gap-2 text-lg lg:text-xl text-[#1c1c1c] hover:text-[#9b0808] active:text-[#9b0808]"
          >
            <IoHomeOutline className="w-8 h-8 lg:w-10 lg:h-10" />
            <span>Home</span>
          </Link>
        </li>
        <li className="w-full">
          <div className="flex flex-col">
            <label
              htmlFor="modules"
              className="flex items-center justify-start gap-2 text-lg lg:text-xl text-[#1c1c1c] hover:text-[#9b0808] active:text-[#9b0808] cursor-pointer"
              onClick={toggleModules}
            >
              <PiShareNetworkThin className="w-8 h-8 lg:w-10 lg:h-10" />
              <span>Modules</span>
            </label>
            <input type="checkbox" id="modules" className="hidden" />
            {isModulesOpen && (
              <div className="flex flex-col space-y-2 ml-4">
                <Link
                  to="/human-capital-management"
                  className="text-sm lg:text-lg text-black hover:text-[#9b0808] active:text-[#9b0808]"
                >
                  Human Capital Management
                </Link>
                <Link
                  to="/payroll-management"
                  className="text-sm lg:text-lg text-black hover:text-[#9b0808] active:text-[#9b0808]"
                >
                  Payroll Management
                </Link>
                <Link
                  to="/workshop-module"
                  className="text-sm lg:text-lg text-black hover:text-[#9b0808] active:text-[#9b0808]"
                >
                  Workshop Module
                </Link>
                <Link
                  to="/journey-management"
                  className="text-sm lg:text-lg text-black hover:text-[#9b0808] active:text-[#9b0808]"
                >
                  Journey Management
                </Link>
              </div>
            )}
          </div>
        </li>
        <hr className="w-full border-t border-gray-300" />
        {/* Add border instead of bg-gray-300 */}
        <li className="w-full">
          <Link
            to="/about"
            className="flex items-center justify-start gap-2 text-lg lg:text-xl text-[#1c1c1c] hover:text-[#9b0808] active:text-[#9b0808]"
          >
            <LiaSuitcaseSolid className="w-8 h-8 lg:w-10 lg:h-10" />
            <span>About Ratiba</span>
          </Link>
        </li>
        <hr className="w-full border-t border-gray-300" />
        {/* Add border instead of bg-gray-300 */}
        <li className="w-full">
          <Link
            to="/privacy"
            className="flex items-center justify-start gap-2 text-lg lg:text-xl text-[#1c1c1c] hover:text-[#9b0808] active:text-[#9b0808]"
          >
            <GiShieldcomb className="w-8 h-8 lg:w-10 lg:h-10" />
            <span>Terms & Privacy</span>
          </Link>
        </li>
        <hr className="w-full border-t border-gray-300" />
        {/* Add border instead of bg-gray-300 */}
        <li className="w-full">
          <Link
            to="/contact"
            className="flex items-center justify-start gap-2 text-lg lg:text-xl text-[#1c1c1c] hover:text-[#9b0808] active:text-[#9b0808]"
          >
            <GoMail className="w-8 h-8 lg:w-10 lg:h-10" />
            <span>Get In Touch</span>
          </Link>
        </li>
        <hr className="w-full border-t border-gray-300" />
        {/* Add border instead of bg-gray-300 */}
      </ul>
    </Drawer>
  );
};

export default TheDrawer;