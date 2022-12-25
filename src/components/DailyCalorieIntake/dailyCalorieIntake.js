import { func, number, shape } from 'prop-types';
import { LinkButton } from 'components/Button/Button';
import {
  IntakeBar,
  IntakeResult,
  IntakeTitle,
  ListTitle,
  ListWrapper,
  TitleWrapper,
  CloseButton,
  ButtonStart,
} from './dailyCalorieIntake.styled';
import { calculateCalories } from 'utils';
// import { useSelector } from 'react-redux';
// import { selectBadProducts } from 'redux/services/selectors';

const DailyCalorieIntake = ({ closeModal, params }) => {
  // const products = useSelector(selectBadProducts);

  return (
    <>
      <IntakeBar>
        <CloseButton onClick={closeModal}></CloseButton>
      </IntakeBar>
      <TitleWrapper>
        <IntakeTitle>Your recommended daily calorie intake is</IntakeTitle>
        <IntakeResult>{calculateCalories(params)} kcal</IntakeResult>
      </TitleWrapper>
      <ListWrapper>
        <ListTitle>Foods you should not eat</ListTitle>
      </ListWrapper>
      <ButtonStart type="button">
        <LinkButton to={'/signup'}>Start losing weight</LinkButton>
      </ButtonStart>
    </>
  );
};

export default DailyCalorieIntake;

DailyCalorieIntake.propTypes = {
  closeModal: func.isRequired,
  params: shape({
    height: number.isRequired,
    age: number.isRequired,
    currentWeight: number.isRequired,
    desiredWeight: number.isRequired,
  }),
};
