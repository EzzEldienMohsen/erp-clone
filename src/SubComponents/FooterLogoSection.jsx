import { footerLogo } from "../assets";

const FooterLogoSection = () => {
  return (
    <div className="lg:w-[30%] flex flex-col justify-start items-start">
      <img src={footerLogo} alt="logo" />
      <p className="text-[#6f6f6f] font-light text-sm md:text-md lg:text-lg mt-4">
        Ratiba™ is an integrated logistics company that features a true
        end-to-end enterprise platform that provides everything necessary to
        manage the life cycle of a work order
      </p>
    </div>
  );
}

export default FooterLogoSection