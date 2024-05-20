import { Outlet } from 'react-router-dom';
import Navbar from '../components/organisms/navbar/Navbar';

const Root = () => {
  return (
    <div>
      <Navbar />
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default Root;
