import RegisterForm from 'components/RegistrationForm/registrationForm';
import { Helmet } from 'react-helmet';
import { Title } from './registrationPage.styled';

export default function RegistrationPage() {
  return (
    <>
      <Helmet>
        <title>Register</title>
      </Helmet>

      <Title>Register</Title>
      <RegisterForm />
    </>
  );
}
