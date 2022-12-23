import PropTypes from 'prop-types';
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

const DailyCalorieIntake = ({ closeModal, params }) => {
  const { height, age, currentWeight, desiredWeight } = params;
  const caloriesResult = Math.round(
    10 * currentWeight +
      6.25 * height -
      5 * age -
      161 -
      10 * (currentWeight - desiredWeight)
  );

  return (
    <>
      <IntakeBar>
        <CloseButton onClick={() => closeModal()}></CloseButton>
      </IntakeBar>
      <TitleWrapper>
        <IntakeTitle>Your recommended daily calorie intake is</IntakeTitle>
        <IntakeResult>{caloriesResult} kcal</IntakeResult>
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
  closeModal: PropTypes.func.isRequired,
  params: {
    height: PropTypes.number.isRequired,
    age: PropTypes.number.isRequired,
    currentWeight: PropTypes.number.isRequired,
    desiredWeight: PropTypes.number.isRequired,
    bloodType: PropTypes.number.isRequired,
  },
};
