import LoginForm from 'components/LoginForm/LoginForm';
import { Helmet } from 'react-helmet-async';
import { Title } from './LoginPage.Styled';
import Container from 'components/Container';
import { useTranslation } from 'react-i18next';

export default function LoginPage() {
  const { t } = useTranslation();
  return (
    <>
      <Helmet>
        <title>{t('Login')}</title>
      </Helmet>
      <Container>
        <Title>{t('Login1')}</Title>
        <LoginForm />
      </Container>
    </>
  );
}
