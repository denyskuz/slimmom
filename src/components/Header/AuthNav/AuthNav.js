import { Link } from './AuthNav.styled';

const AuthNav = () => {
  return (
    <>
      <Link to="/login" aria-label="Sign in">
        Sign in
      </Link>
      <Link to="/signup" aria-label="Registration">
        Registration
      </Link>
    </>
  );
};

export default AuthNav;
