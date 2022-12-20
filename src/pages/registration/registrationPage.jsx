import RegisterForm from 'components/RegisterForm/registerForm';
import { Helmet } from 'react-helmet';
import { Title } from './registrationPage.styled';

export default function LoginPage() {
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
