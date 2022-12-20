import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
// import AppBar from '../Header/AppBar';

const Layout = () => {
  return (
    <>
      {/* <AppBar /> */}
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default Layout;