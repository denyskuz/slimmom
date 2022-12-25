import LoginForm from 'components/LoginForm/LoginForm';
import { Helmet } from 'react-helmet-async';
import { Title } from './LoginPage.Styled';
import Container from 'components/Container';

export default function LoginPage() {
  return (
    <Container>
      <Helmet>
        <title>Login</title>
      </Helmet>
      <Title>Log in</Title>
      <LoginForm />
    </Container>
  );
}
