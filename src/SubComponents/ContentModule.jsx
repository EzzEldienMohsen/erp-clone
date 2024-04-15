/* eslint-disable react/prop-types */

const ContentModule = ({content}) => {

  return (
    <>
      {content.map((sec) => {
        return (
          <div
            key={sec.id}
            className="w-full h-auto flex flex-col justify-start md:justify-between items-start odd:bg-[#f5f5f5] odd:md:flex-row  even:bg-white even:md:flex-row-reverse gap-20 py-8 px-16 md:py-16 md:px-24"
          >
            <img
              src={sec.image}
              alt="img"
              className={`${sec.title ? 'shadow-2xl md:w-2/5' : 'md:w-2/5 lg:w-3/5'}`}
            />

            <div className="flex flex-col mt-4 gap-4 md:gap-6">
              <h3 className="text-[#6f6f6f] text-xl md:text-2xl lg:text-3xl ">
                {sec?.title}
              </h3>
              <p
                className={`${
                  sec.title ? 'text-[#333] text-sm md:text-md' : 'text-[#6f6f6f] text-sm md:text-md lg:text-lg '
                }`}
                // className="text-[#333] text-sm md:text-md"
              >
                {sec.para}
              </p>
              {sec.para2 ? (
                <p className="text-[#333] text-sm md:text-md">{sec?.para2}</p>
              ) : sec.list ? (
                <ul className="list-disc text-[#333] text-sm md:text-md">
                  {sec?.list?.map((li) => {
                    return (
                      <li key={li} className="my-4">
                        {li}
                      </li>
                    );
                  })}
                </ul>
              ) : (
                <div className="hidden"></div>
              )}
            </div>
          </div>
        );
      })}
    </>
  );
}

export default ContentModule