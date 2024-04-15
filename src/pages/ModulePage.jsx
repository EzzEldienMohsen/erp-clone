/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import { autoFetch } from '../utils';
import { useLoaderData } from 'react-router-dom';

const moduleData = (id) => {
  return {
    queryKey: ['module', id],
    queryFn: () => autoFetch(`${id}.json`),
  };
};
export const loader = (queryClient)=> async ({params})=> {
    const {id} = params;
    const data = await queryClient.ensureQueryData(moduleData(id));
    console.log(data.data)
    return data
} ;

const ModulePage = () => {
  const { data } = useLoaderData();
  const { title, id, text, theClass, content, cards } = data;
  return (
    <div className="w-full box-border ">
      <div
        className={`${theClass} flex justify-center items-center h-[30vh] md:h-[70vh] lg:h-[50vh]`}
      >
        <h3 className="text-white uppercase text-2xl md:text-4xl lg:text-5xl mt-8">
          {title}
        </h3>
      </div>
      <div className="bg-white flex justify-center items-center w-full h-auto py-8 px-4 lg:py-16 lg:px-8">
        <p className="text-sm md:text-md lg:text-lg text-center text-[#6f6f6f]">{text}</p>
      </div>
      {content.map((sec)=>{
        return (
          <div
            key={sec.id}
            className="w-full h-auto flex flex-col justify-start md:justify-between items-start odd:bg-[#f5f5f5] odd:md:flex-row  even:bg-white even:flex-row-reverse gap-20 py-8 px-16 md:py-16 md:px-24"
          >
            <img
              src={sec.image}
              alt="img"
              className="shadow-2xl md:w-2/5 lg:w-auto"
            />

            <div className="flex flex-col gap-6">
              <h3 className="text-[#6f6f6f] text-xl md:text-2xl lg:text-3xl ">
                {sec.title}
              </h3>
              <p className="text-[#333] text-md md:text-lg">{sec.para}</p>
              {sec.para2 ? (
                <p className="text-[#333] text-md md:text-lg">{sec?.para}</p>
              ) : sec.list ? (
                <ul className="list-disc text-[#333] text-md md:text-lg">
                  {sec?.list?.map((li) => {
                    return (
                      <li key={li} className="my-4">
                        {li}
                      </li>
                    );
                  })}
                </ul>
              ) : (
                ' '
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ModulePage;