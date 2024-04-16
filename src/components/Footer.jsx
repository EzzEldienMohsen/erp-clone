
import { FooterContactInfo, FooterLink, FooterLogoSection } from "../SubComponents";
import { companyLinks, moduleLinks } from "../assets";

const Footer = () => {
  return (
    <div className="bg-[#e8e8e8] pt-16 px-6 pb-8 flex flex-col justify-start items-start">
      <div className="flex flex-col lg:flex-row lg:justify-evenly ">
        <FooterLogoSection />
        <div className="lg:w-[60%] flex flex-col mt-6 lg:mt-0 justify-between items-start  lg:justify-evenly md:flex-row">
          <FooterLink title="company" link={companyLinks} />
          <FooterLink title="module" link={moduleLinks} />
          <FooterContactInfo />
        </div>
      </div>
      <div className="lg:ml-[36px] border-t-2 border-t-[silver] mt-6 md:mt-10 pt-4 w-[90vw]">
        <h4 className="text-[#6f6f6f] font light">
          Copyright © 2016.<span className="text-black font -bold"> Marts Logistic Ltd.</span> All Rights
          Reserved. Made by Click Art
        </h4>
      </div>
    </div>
  );
};

export default Footer;
