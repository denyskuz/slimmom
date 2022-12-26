import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import AppBar from '../Header/AppBar';
import BackgroundContainer from 'components/BackgroundContainer';
import Container from 'components/Container';

const Layout = () => {
  return (
    <BackgroundContainer>
      <Container>
      <AppBar />
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
      </Container>
    </BackgroundContainer>
  );
};

export default Layout;
