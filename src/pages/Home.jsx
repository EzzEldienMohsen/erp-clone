import { Outlet } from 'react-router-dom';
import { Footer, Header } from '../components';

const Home = () => {
  return (
    <div className=" h-[100vh] relative  ">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Home;
