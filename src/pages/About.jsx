import { CardsModule, ContentModule, HeroModule } from "../SubComponents";
import { SiteCards, aboutContent } from "../assets";

const text = "Marts Logistics unveils Ratiba™ Enterprise Suite, an enterprise solution designed to enable organizations take advantage of new market opportunities and manage growth. Guided by the needs of today’s users, the RatibaTM Enterprise Suite is a tool crafted to increase efficiency and improve processes to support lean initiatives that result in better margins, cost reductions, and working capital improvement."
const About = () => {
  return (
    <div className="">
        <HeroModule theClass={"human-capital"}  title="ABOUT Ratiba™" text={text}/>
        <ContentModule content={aboutContent}/>
        <CardsModule cards={SiteCards} text="Ratiba™ Modules" />
    </div>
  )
}

export default About