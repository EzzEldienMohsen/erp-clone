import { privacy } from "../assets";

const PrivacyTerms = () => {
  return (
    <div className="flex flex-col justify-start items-start">
      {privacy.map((slice) => {
        return (
          <div
            key={slice.id}
            className="w-full flex flex-col justify-start items-start px-4 md:px-8 py-8 md:py-16 odd:bg-[#f5f5f5] even:bg-white gap-2 md:gap-3"
          >
            <h2 className="text-[#6f6f6f] text-xl md:text-2xl lg:text-3xl">
              {slice?.title}
            </h2>
            <p className="text-[#333] text-sm md:text-md lg:text-lg font-light">
              {slice?.text}
            </p>
            <p className="text-[#333] text-sm md:text-md lg:text-lg font-light">
              {slice?.para}
            </p>
            <ul className="list-disc ml-3 text-[#333] text-sm md:text-md font-light">
              {slice?.list?.map((li) => {
                return (
                  <li key={li} className=" py-[1px] font-light">
                    {li}
                  </li>
                );
              })}
            </ul>
            <p className="text-[#333] text-sm md:text-md lg:text-lg font-light">
              {slice?.para2}
            </p>
          </div>
        );
      })}
    </div>
  );
}

export default PrivacyTerms