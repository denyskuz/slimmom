import RegisterForm from 'components/RegistrationForm/RegistrationForm';
import { Helmet } from 'react-helmet-async';
import { Title, Wrapper } from './RegistrationPage.styled';
import Container from 'components/Container';

export default function RegistrationPage() {
  return (
    <Wrapper>
      <Helmet>
        <title>Register</title>
      </Helmet>
      <Container>
        <Title>Register</Title>
        <RegisterForm />
      </Container>
    </Wrapper>
  );
}
