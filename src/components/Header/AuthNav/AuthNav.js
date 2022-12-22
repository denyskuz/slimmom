import { Link } from './AuthNav.styled';

const AuthNav = () => {
  return (
    <>
      <Link to="/login">Sign in</Link>
      <Link to="/signup">Registration</Link>
    </>
  );
};

export default AuthNav;
