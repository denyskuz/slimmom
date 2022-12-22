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

const DailyCalorieIntake = ({ closeModal }) => {
  return (
    <>
      <IntakeBar>
        <CloseButton onClick={() => closeModal()}></CloseButton>
      </IntakeBar>
      <TitleWrapper>
        <IntakeTitle>Your recommended daily calorie intake is</IntakeTitle>
        <IntakeResult>2800 kcal</IntakeResult>
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
}
