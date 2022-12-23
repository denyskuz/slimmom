import { useLocation } from 'react-router-dom';
import { ButtonSecondary } from 'components/Button/Button';
import { Box } from 'components/Box';
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
    return (
        <Box as="main">
            <Container>
                <Wrapper>
                    <ImageWrapper>
                        <Image src={error} alt="404" width="250" />
                        <ErrorTitle>404</ErrorTitle>
                    </ImageWrapper>
                    <ErrorText>Sorry, we not found the page you are looking for!</ErrorText>
                    <StyledLink to={backLink}>
                        <ButtonSecondary style={{ margin: 0 }}>Back to home</ButtonSecondary>
                    </StyledLink>
                </Wrapper>
            </Container>
        </Box>
    );
};

export default NotFoundPage;