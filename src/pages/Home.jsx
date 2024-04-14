import { Outlet } from 'react-router-dom';
import { Footer, Header } from '../components';

const Home = () => {
  return (
    <div className="w-full h-[100vh] relative box-border overflow-x-hidden">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Home;
