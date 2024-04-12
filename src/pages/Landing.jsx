import { LandingHero, LandingModule } from "../SubComponents";

const Landing = () => {
  return (
    <div className="box-border w-[100vw]">
      <LandingHero />
      <LandingModule />
    </div>
  );
};

export default Landing;
