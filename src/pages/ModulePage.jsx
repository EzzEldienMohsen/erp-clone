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
    const {title,id,text,theClass,content,cards} = data
    console.log(data.data)
  return <div className="box-border w-[100vw]">
    <div className={`w-full ${theClass} flex justify-center items-center h-[30vh] md:h-[70vh] lg:h-[50vh]`}>
        <h3 className='text-white uppercase text-xl md:text-2xl lg:text-4xl mt-8'>{title}</h3>
        
    </div>
  </div>;
};

export default ModulePage;
