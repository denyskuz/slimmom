import AuthNav from 'components/Header/AuthNav';
import UserMenu from 'components/Header/UserMenu';
import Burger from 'components/Header/Burger';
import { ToggleSwitch } from 'components/Theme/ToggleSwitch';
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
  AuthMenu,
  BurgerWrapper,
} from './AppBar.styled';
import { useAuth } from 'hooks/useAuth';

const AppBar = () => {
  const { isLoggedIn } = useAuth();

  return (
    <Header>
      <NavHeader>
        <LogoLink to="/">
          {isLoggedIn ? (
            <>
              <Logo />
              <LoggedWrapper aria-label="Main page">
                <LogoSlim />
                <LogoMom />
              </LoggedWrapper>
            </>
          ) : (
            <>
              <Logo />
              <Wrapper aria-label="Main page">
                <LogoSlim />
                <LogoMom />
              </Wrapper>
            </>
          )}
        </LogoLink>

        <ToggleSwitch />

        <Navigation>
          {isLoggedIn ? (
            <>
              <UserMenuWrapperDesk>
                <UserMenu />
              </UserMenuWrapperDesk>
              <Burger />
            </>
          ) : (
            <>
              <AuthMenu>
                <AuthNav />
              </AuthMenu>
              <BurgerWrapper>
                <Burger />
              </BurgerWrapper>
            </>
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
