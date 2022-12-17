import Container from 'components/Container';
import AuthNav from 'components/Header/AuthNav';
import UserMenu from 'components/Header/UserMenu';
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
} from './AppBar.styled';

const AppBar = () => {
  const isLoggedIn = false;
  return (
    <Header>
      <Container>
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
              </>
            ) : (
              <AuthNav />
            )}
          </Navigation>
        </NavHeader>
      </Container>
    </Header>
  );
};

export default AppBar;
