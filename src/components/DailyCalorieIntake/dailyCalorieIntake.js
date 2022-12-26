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
} from './dailyCalorieIntake.styled';
import { calculateCalories } from 'utils';
import { CustomizedList } from './FoodListNotEat';
import { useSelector } from 'react-redux';
import { selectBadProducts } from 'redux/services/selectors';

import { useTranslation } from 'react-i18next';

const DailyCalorieIntake = ({ closeModal, params }) => {
  const products = useSelector(selectBadProducts);
  const product_categories = products
    .flatMap(product => product.categories)
    .filter((categorie, index, array) => array.indexOf(categorie) === index);
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
        {product_categories.map(item => {
          const number = product_categories.indexOf(item) + 1;
          const filterList = products.filter(el =>
            el.categories.includes(item)
          );
          return (
            <CustomizedList
              key={item}
              number={number}
              categorie={item}
              list={filterList}
            />
          );
        })}
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
