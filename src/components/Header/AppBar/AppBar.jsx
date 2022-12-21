// import { useMediaQuery } from 'react-responsive';
// import Container from 'components/Container';
import AuthNav from 'components/Header/AuthNav';
import UserMenu from 'components/Header/UserMenu';
import Burger from 'components/Header/Burger';
import {
  Header,
  NavHeader,
  LogoLink,
  Logo,
  LogoSlim,
  LogoMom,
  LoggedWrapper,
  Wrapper,
  Navigation,
  UserMenuWrapperDesk,
  UserMenuWrapper,
} from './AppBar.styled';

const AppBar = () => {
  const isLoggedIn = true;

  return (
    <Header>
        <NavHeader>
          <LogoLink to="/">
            {isLoggedIn ? (
              <>
                <Logo />
                <LoggedWrapper>
                  <LogoSlim />
                  <LogoMom />
                </LoggedWrapper>
              </>
            ) : (
              <>
                <Logo />
                <Wrapper>
                  <LogoSlim />
                  <LogoMom />
                </Wrapper>
              </>
            )}
          </LogoLink>

          <Navigation>
            {isLoggedIn ? (
              <>
                <UserMenuWrapperDesk>
                  <UserMenu />
                </UserMenuWrapperDesk>
                <Burger/>
              </>
            ) : (
              <AuthNav />
            )}
          </Navigation>
        </NavHeader>

        {isLoggedIn && (
          <UserMenuWrapper>
            <UserMenu />
          </UserMenuWrapper>
        )}
    </Header>
  );
};

export default AppBar;
