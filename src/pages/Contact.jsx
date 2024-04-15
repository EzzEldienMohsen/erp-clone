import { CardsModule, ContactInformation, HeroModule, TheMap } from '../SubComponents';
import { SiteCards } from '../assets';
const text =""
const Contact = () => {
  return (
    <div className="">
      <HeroModule theClass={'get-in-touch'} title="GET IN TOUCH™" text={text} />
      <div className=" flex flex-col justify-center items-center md:flex-row-reverse gap-8 md:gap-0 md:justify-evenly md:items-center py-8 px-16">
        <ContactInformation />
        <TheMap />
      </div>
      <CardsModule cards={SiteCards} text="Ratiba™ Modules" />
    </div>
  );
};

export default Contact;
