/* eslint-disable react/prop-types */

const HeroModule = ({theClass,title,text}) => {
  return (
    <>
      <div
        className={`${theClass} flex justify-center items-center h-[30vh] md:h-[70vh] lg:h-[50vh]`}
      >
        <h3 className="text-white uppercase text-2xl md:text-4xl lg:text-5xl mt-8">
          {title}
        </h3>
      </div>
      <div className="bg-white flex justify-center items-center w-full h-auto py-8 px-4 lg:py-16 lg:px-8">
        <p className="text-sm md:text-md lg:text-lg text-center text-[#6f6f6f]">
          {text}
        </p>
      </div>
    </>
  );
}

export default HeroModule