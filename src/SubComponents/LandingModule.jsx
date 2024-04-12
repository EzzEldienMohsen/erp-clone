import { buttonModule, landingModules } from "../assets";

const LandingModule = () => {
  const toggleThings = (id,bId,c,activeClass)=>{
    const buttons = document.querySelectorAll(".btn")
    const button = document.getElementById(bId);
    const cards = document.querySelectorAll("section")
    const card = document.getElementById(id)
buttons.forEach((button) => button.classList.remove(`${activeClass}-${bId}`));
   button.classList.add(`${activeClass}-${bId}`);
    cards.forEach((card)=>card.classList.add("hidden"))
    card.classList.remove("hidden")
    
  }
  return (
    <div className>
      <div className=" md:h-[130px] sm:px-0 md:px-10 grid grid-cols-2 md:flex md:flex-row bg-[#f5f5f5]">
        {buttonModule.map((button)=>{
          return (
            <button
              key={button.id}
              id={button.id}
              onClick={() =>{
                toggleThings(
                  button.cardId,
                  button.id,
                  button.class,
                  button.activeClass
                )               
                }
              }
              className={`btn items-end  ${button.class}-${button.id}  hover:text-[#9b0808] justify-center btn-square w-[50vw] md:w-1/4  h-[130px] border-1 border-gray-300 rounded-none  bg-no-repeat bg-[length:auto_95px] bg-center `}
            >
              <span className="mt-2 mb-1 font-light">{button.text}</span>
            </button>
          );
        })}
      </div>
      <div className="bg-white text-[#333] font-light p-10 flex flex-col justify-start items-start">
        {landingModules.map((module)=>{
          return (
            <section key={module.id} id={module.id} className="hidden">
              <h1 className="text-lg md:text:xl lg:text-2xl mb-2">{module.title}</h1>
              <p className="mb-2">{module.firstText}</p>
              <div className="flex flex-col md:flex-row justify-between gap-6">
                <img src={module.img} alt="img" className="w-1/2 mr-6" />
                <div className="flex flex-col ">
                  <h3 className="mb-2">{module.secondText}</h3>
                  <ul className="list-disc gap-2 text-[#9b0808]">
                    {module.list.map((list)=>{
                      return <li key={list} className="my-1">{list}</li>
                    })}
                  </ul>
                </div>
              </div>
            </section>
          );
        })}
      </div>
    </div>
  );
}

export default LandingModule