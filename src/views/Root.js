import { Outlet } from 'react-router-dom';
import Nav from '../components/Nav.js';

function Root() {
  return (
    <>
      <Nav />
      <main>
        <Outlet />
      </main>
    </>
  );
}

export default Root;
