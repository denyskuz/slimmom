import LoginForm from 'components/LoginForm/LoginForm';
import { Helmet } from 'react-helmet-async';
import { Wrapper, Title } from './LoginPage.Styled';
import Container from 'components/Container';
import { useTranslation } from 'react-i18next';

export default function LoginPage() {
  const { t } = useTranslation();
  return (
    <Wrapper>
      <Container>
        <Helmet>
          <title>{t('Login')}</title>
        </Helmet>
        <Title>{t('Login1')}</Title>
        <LoginForm />
      </Container>
    </Wrapper>
  );
}
