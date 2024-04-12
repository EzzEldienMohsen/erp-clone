import React from "react";
import { buttonModule } from "../assets";
import { motion, AnimatePresence } from 'framer-motion';

const LandingModule = () => {
  const [selectedButton,setSelectedButton] = React.useState("a")
  const [module,setModule] = React.useState(buttonModule[0].module)

  return (
    <div className>
      <div className=" md:h-[130px] sm:px-0 md:px-10 grid grid-cols-2 md:flex md:flex-row bg-[#f5f5f5]">
        {buttonModule.map((button) => {
          return (
            <button
              key={button.id}
              id={button.id}
              onClick={() => {
               
                setSelectedButton(button.id);
                setModule(button.module);
              }}
              className={`btn items-end border-t-2 ${
                button.id === selectedButton
                  ? `${button.activeClass}-${button.id}`
                  : `${button.class}-${button.id}`
              }  hover:text-[#9b0808] justify-center btn-square w-[50vw] md:w-1/4  h-[130px] border-1 border-gray-300 rounded-none  bg-no-repeat bg-[length:auto_95px] bg-center `}
            >
              <span className="mt-2 mb-1 font-light">{button.text}</span>
            </button>
          );
        })}
      </div>
      <div className="bg-white text-[#333] font-light p-10 flex flex-col justify-start items-start">
        <AnimatePresence mode="wait">
          <motion.div
            key={module ? module.id : 'empty'}
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -10, opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-lg md:text:xl lg:text-2xl mb-2">
                {module.title}
              </h1>
              <p className="mb-2">{module.firstText}</p>
              <div className="flex flex-col md:flex-row justify-between gap-6">
                <img src={module.img} alt="img" className="w-3/5 mr-4" />
                <div className="flex flex-col ">
                  <h3 className="mb-2">{module.secondText}</h3>
                  <ul className="list-disc gap-2 ml-3 text-[#9b0808]">
                    {module.list.map((list) => {
                      return (
                        <li key={list} className="my-1">
                          {list}
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}

export default LandingModule




 