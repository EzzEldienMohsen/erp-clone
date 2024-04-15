import { LandingDemo, LandingHero, LandingModule } from "../SubComponents";

const Landing = () => {
  return (
    <div className="box-border w-[100vw]">
      <LandingHero />
      <LandingModule />
      <LandingDemo />
    </div>
  );
};

export default Landing;
