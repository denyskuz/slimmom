import LoginForm from 'components/LoginForm/LoginForm';
import { Helmet } from 'react-helmet-async';
import { Wrapper, Title } from './LoginPage.Styled';
import Container from 'components/Container';

export default function LoginPage() {
  return (
    <Wrapper>
      <Container>
        <Helmet>
          <title>Login</title>
        </Helmet>
        <Title>Log in</Title>
        <LoginForm />
      </Container>
    </Wrapper>
  );
}
