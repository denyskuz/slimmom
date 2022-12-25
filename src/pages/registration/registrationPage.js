import RegisterForm from 'components/RegistrationForm/registrationForm';
import { Helmet } from 'react-helmet-async';
import { Title, Wrapper } from './registrationPage.styled';
import Container from 'components/Container';
import { useTranslation } from 'react-i18next';

export default function RegistrationPage() {
  const { t } = useTranslation();
  return (
    <>
      <Helmet>
        <title>{t('Register')}</title>
      </Helmet>
      <Wrapper>
        <Container>
          <Title>{t('Register')}</Title>
          <RegisterForm />
        </Container>
      </Wrapper>
    </>
  );
}
