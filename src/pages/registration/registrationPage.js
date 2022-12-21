import RegisterForm from 'components/RegistrationForm/registrationForm';
import { Helmet } from 'react-helmet';
import { Title, Wrapper } from './registrationPage.styled';
import Container from 'components/Container';

export default function RegistrationPage() {
  return (
    <>
      <Helmet>
        <title>Register</title>
      </Helmet>
      <Wrapper>
        <Container>
          <Title>Register</Title>
          <RegisterForm />
        </Container>
      </Wrapper>
    </>
  );
}
