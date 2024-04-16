import { LandingDemo, LandingHero, LandingModule } from "../SubComponents";

const Landing = () => {
  return (
    <div>
      <LandingHero />
      <LandingModule />
      <LandingDemo />
    </div>
  );
};

export default Landing;
