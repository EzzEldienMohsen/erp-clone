/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import { CardsModule, ContentModule, HeroModule } from '../SubComponents';
import { autoFetch } from '../utils';
import {  useLoaderData } from 'react-router-dom';

const moduleData = (id) => {
  return {
    queryKey: ['module', id],
    queryFn: () => autoFetch(`${id}.json`),
  };
};
export const loader = (queryClient)=> async ({params})=> {
    const {id} = params;
    const data = await queryClient.ensureQueryData(moduleData(id));
    return data
} ;

const ModulePage = () => {
  const { data } = useLoaderData();
  const { title, text, theClass, content, cards } = data;
  return (
    <div>
      <HeroModule theClass={theClass} text={text} title={title} />
      <ContentModule content={content} />
      <CardsModule cards={cards} text="related modules" />
    </div>
  );
};

export default ModulePage;