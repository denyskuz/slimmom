import { Loading, Wave } from './Loader.styled';
import { Container } from 'components/Container.styled';

const Loader = () => {
  return (
    <Container>
      <Loading>
        <Wave></Wave>
        <Wave></Wave>
        <Wave></Wave>
        <Wave></Wave>
        <Wave></Wave>
      </Loading>
    </Container>
  );
};

export default Loader;