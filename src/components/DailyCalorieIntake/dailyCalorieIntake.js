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

import { useTranslation } from 'react-i18next';

const DailyCalorieIntake = ({ closeModal }) => {
  const { t } = useTranslation();

  return (
    <>
      <IntakeBar>
        <CloseButton onClick={() => closeModal()}></CloseButton>
      </IntakeBar>
      <TitleWrapper>
        <IntakeTitle>{t('Daily_calorie')}</IntakeTitle>
        <IntakeResult>2800 {t('kcal')}</IntakeResult>
      </TitleWrapper>
      <ListWrapper>
        <ListTitle>{t('Food_list')}</ListTitle>
        <List>
          <ListItem>food1</ListItem>
          <ListItem>food2</ListItem>
          <ListItem>food3</ListItem>
        </List>
      </ListWrapper>
      <ButtonStart type="button">
        <LinkButton to={'/signup'}>{t('Start_loosing')}</LinkButton>
      </ButtonStart>
    </>
  );
};

export default DailyCalorieIntake;

DailyCalorieIntake.propTypes = {
  closeModal: PropTypes.func.isRequired,
};
