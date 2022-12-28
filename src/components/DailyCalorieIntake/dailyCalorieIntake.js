import { func, string, shape } from 'prop-types';
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
  List,
} from './dailyCalorieIntake.styled';
import { calculateCalories } from 'utils';
import { CustomizedList } from './FoodListNotEat';
import Box from '@mui/material/Box';
import Loader from 'components/Loader';
import { useSelector } from 'react-redux';
import { selectBadCategories } from 'redux/services/selectors';

import { useTranslation } from 'react-i18next';

const DailyCalorieIntake = ({ closeModal, params }) => {
  const categories = useSelector(selectBadCategories);
  const { t } = useTranslation();

  return (
    <>
      <IntakeBar>
        <CloseButton onClick={closeModal}></CloseButton>
      </IntakeBar>
      <TitleWrapper>
        <IntakeTitle>{t('Daily_calorie')}</IntakeTitle>
        <IntakeResult>
          {calculateCalories(params)} {t('kcal')}
        </IntakeResult>
      </TitleWrapper>
      <ListWrapper>
        <ListTitle>{t('Food_list')}</ListTitle>
        <List>
          {!categories[1] ? (
            <Box sx={{ height: '400px', width: '200px' }}>
              <Loader />
            </Box>
          ) : (
            categories.map((item, index) => {
              return (
                <CustomizedList key={item} number={index + 1} category={item} />
              );
            })
          )}
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
  closeModal: func.isRequired,
  params: shape({
    height: string.isRequired,
    age: string.isRequired,
    currentWeight: string.isRequired,
    desiredWeight: string.isRequired,
  }),
};
