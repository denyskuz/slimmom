import LoginForm from 'components/LoginForm/LoginForm';
import { Helmet } from 'react-helmet';
import { Title } from './LoginPage.Styled';
import Container from 'components/Container/Container.jsx';
export default function LoginPage() {
  return (
    <>
      <Helmet>
        <title>Login</title>
      </Helmet>
      <Container>
        <Title>Log in</Title>
        <LoginForm />
      </Container>
    </>
  );
}
