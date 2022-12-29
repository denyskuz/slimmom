import { useLocation } from 'react-router-dom';
import { ButtonSecondary } from 'components/Button/Button';
import { Box } from 'components/Box';
import { useTranslation } from 'react-i18next';
import {
  Wrapper,
  StyledLink,
  ImageWrapper,
  Image,
  ErrorTitle,
  ErrorText,
} from './NotFoundPage.styled';
import error from '../../images/nopage/page-404.png';
import Container from 'components/Container';

const NotFoundPage = () => {
  const location = useLocation();
  const backLink = location.state?.from ?? '/';
  const { t } = useTranslation();

  return (
    <Box as="main">
      <Container>
        <Wrapper>
          <ImageWrapper>
            <Image src={error} alt="404" width="250" />
            <ErrorTitle>404</ErrorTitle>
          </ImageWrapper>
          <ErrorText>
            {t('Not_found')}
          </ErrorText>
          <StyledLink to={backLink}>
            <ButtonSecondary style={{ margin: 0 }}>
              {t('Back_home')}
            </ButtonSecondary>
          </StyledLink>
        </Wrapper>
      </Container>
    </Box>
  );
};

export default NotFoundPage;
