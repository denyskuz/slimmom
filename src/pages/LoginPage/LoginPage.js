import LoginForm from 'components/LoginForm/LoginForm';
// import { Helmet } from 'react-helmet';
import { Title } from './LoginPage.Styled';
import Container from 'components/Container';
import { Wrapper } from 'pages/MainPage/MainPage.styled';

export default function LoginPage() {
  return (
    <>
      {/* <Helmet> */}
      {/* <title>Login</title> */}
      {/* </Helmet> */}
      {/* <Wrapper> */}
      <Container>
        <Title>Log in</Title>
        <LoginForm />
      </Container>
      {/* </Wrapper> */}
    </>
  );
}
