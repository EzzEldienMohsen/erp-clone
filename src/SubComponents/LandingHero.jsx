import { Link } from 'react-router-dom';

const LandingHero = () => {
  return (
    <div className="flex justify-center items-center h-[80vh] md:h-[90vh] lg:h-[70]">
      <div
        className="bg-cover bg-center w-full h-full"
        style={{
          backgroundImage:
            'url("https://daks2k3a4ib2z.cloudfront.net/57dee8d6b08345807bd940be/57df6d425056a8537bf89584_ratiba-landing.jpg")',
        }}
      >
        <div className="flex flex-col justify-center items-center h-full w-full">
          <h2 className="text-white  mb-4 mt-8 w-4/5 text-center  md:w-auto font-semibold font-sans capitalize text-2xl md:text-2xl lg:text-5xl">
            Unveiling Ratiba™ Enterprise Suite
          </h2>
          <p className="text-white  w-4/5 md:w-3/5   text-center text-xl md:text-xl lg:text-4xl">
            An enterprise solution designed to enable organizations take
            advantage of new market opportunities and manage growth
          </p>
          <div className="flex flex-col mt-4 md:flex-row justify-center md:justify-between w-full md:w-1/2 items-center">
            <Link
              to="/"
              className="btn  md:w-[20vw] text-xl w-[50vw] rounded-sm bg-white text-[#9b0808] uppercase "
            >
              about us
            </Link>
            <Link
              to="/"
              className="btn rounded-sm mt-4 md:mt-0 w-[50vw] md:w-[20vw] bg-[#9b0808] text-white uppercase text-xl"
            >
              get started
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LandingHero