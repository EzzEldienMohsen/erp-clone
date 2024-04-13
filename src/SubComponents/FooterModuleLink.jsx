import { Link } from "react-router-dom";
import { moduleLinks } from "../assets";

const FooterModuleLink = () => {
  return (
    <div className="lg:w-[30%] flex flex-col gap-3 mt-8 lg:mt-0 md:gap-6 justify-center items-start ">
      <h3 className="text-black font-normal capitalize sm:text-lg md:text-xl lg:text-2xl  lg:mt-8">
        modules
      </h3>
      <ul className="text-[#6f6f6f] font-light capitalize ">
        {moduleLinks.map((link) => {
          return (
            <li key={link.text} className="mt-3">
              <Link to="">{link.text}</Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default FooterModuleLink