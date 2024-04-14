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
        return <div key={sec.id}>

        </div>
      })}
    </div>
  );
};

export default ModulePage;