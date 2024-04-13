import { Link } from "react-router-dom";
import { companyLinks } from "../assets";

const FooterCompanyLink = () => {
  return (
    <div className="lg:w-[20%] flex flex-col gap-3 md:gap-6 justify-center items-start mt-8 lg:mt-0">
      <h3 className="text-black font-normal capitalize sm:text-lg md:text-xl lg:text-2xl  lg:mt-8">
        company
      </h3>
      <ul className="text-[#6f6f6f] font-light capitalize ">
        {companyLinks.map((link) => {
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

export default FooterCompanyLink