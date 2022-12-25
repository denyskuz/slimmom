import RegisterForm from 'components/RegistrationForm/registrationForm';
import { Helmet } from 'react-helmet-async';
import { Title, Wrapper } from './registrationPage.styled';
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
