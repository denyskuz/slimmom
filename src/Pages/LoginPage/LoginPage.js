import LoginForm from 'components/LoginForm/LoginForm';
import { Helmet } from 'react-helmet';
import { Title } from './LoginPage.Styled';

export default function LoginPage() {
  return (
    <>
      {/* <Helmet>
        <title>Login</title>
      </Helmet> */}

      <Title>Log in</Title>
      <LoginForm />
    </>
  );
}
