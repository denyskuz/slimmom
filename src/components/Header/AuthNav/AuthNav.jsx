import { Link } from './AuthNav.styled';

const AuthNav = () => {
  return (
    <>
      <Link to="/login">SIGN IN</Link>
      <Link to="/signup">REGISTRATION</Link>
    </>
  );
};

export default AuthNav;
