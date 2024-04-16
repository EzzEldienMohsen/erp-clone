import { CardsModule, HeroModule, PrivacyTerms } from "../SubComponents";
import { SiteCards } from "../assets";

const text =
  'These terms and conditions govern your use of this website; by using this website, you accept these terms and conditions in full.   If you disagree with these terms and conditions or any part of these terms and conditions, you must not use this website. [You must be at least [18] years of age to use this website.  By using this website [and by agreeing to these terms and conditions] you warrant and represent that you are at least [18] years of age.] [This website uses cookies.  By using this website and agreeing to these terms and conditions, you consent to our Marts Logistics Limited’s use of cookies in accordance with the terms of Marts Logistics Limited’s [privacy policy / cookies policy].]';
const PrivacyPage = () => {
  return (
    <div>
      <HeroModule
        theClass={'human-capital'}
        title="TERMS AND PRIVACY™"
        text={text}
      />
      <PrivacyTerms/>
      <CardsModule cards={SiteCards} text="Ratiba™ Modules" />
    </div>
  );
}

export default PrivacyPage