import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import AppBar from '../Header/AppBar';
import BackgroundContainer from 'components/BackgroundContainer';

const Layout = () => {
  return (
    <BackgroundContainer>
      <AppBar />
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
    </BackgroundContainer>
  );
};

export default Layout;
