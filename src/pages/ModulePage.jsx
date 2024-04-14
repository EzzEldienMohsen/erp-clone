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
    console.log(data)
    return data
} ;

const ModulePage = () => {
    const { data } = useLoaderData();
  return <div>{data.data}</div>;
};

export default ModulePage;
