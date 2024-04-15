/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

const CardsModule = ({cards,text}) => {
  return (
    
      <div className=" bg-white flex flex-col py-8 md:py-16 px-4 md:px-8 justify-center items-center border-t-2 border-t-[silver] mt-8">
        <h2 className="text-[#333] text-xl md:text-2xl lg:text-3xl capitalize mb-8">
          {text}
        </h2>

        <div className=" bg-white flex flex-col gap-6 md:gap-0 md:flex-row justify-center items-center md:justify-evenly">
          {cards.map((card) => {
            return (
              <Link
                to={card.to}
                key={card.id}
                className={`shadow-xl  hover:lg:shadow-[#840508] flex flex-col w-[60%] md:w-[25%] gap-6 justify-center items-center aspect-square`}
              >
                <img src={card.image} alt="img" className="w-2/5 md:w-1/3" />
                <h4 className="text-[#840508] text-sm md:text-md lg:text-lg">
                  {card.text}
                </h4>
              </Link>
            );
          })}
        </div>
      </div>
   
  );
}

export default CardsModule