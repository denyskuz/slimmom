import PropTypes from 'prop-types';
import { LinkButton } from 'components/Button/Button';
import {
  IntakeBar,
  IntakeResult,
  IntakeTitle,
  List,
  ListItem,
  ListTitle,
  ListWrapper,
  TitleWrapper,
  CloseButton,
  ButtonStart,
} from './dailyCalorieIntake.styled';

// "ФОРМУЛА ДЛЯ РОЗРАХУНКУ ДЕННОЇ НОРМИ КАЛОРІЙ ДЛЯ ЖІНОК
// 10 * вага + 6.25 * зріст - 5 * вік - 161 - 10 * (вага - бажана вага)"

const DailyCalorieIntake = ({ closeModal, params }) => {
  console.log(params);
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
        <List>
          <ListItem>food1</ListItem>
          <ListItem>food2</ListItem>
          <ListItem>food3</ListItem>
        </List>
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
};
