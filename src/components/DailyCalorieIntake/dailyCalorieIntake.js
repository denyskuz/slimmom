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

const DailyCalorieIntake = ({ closeModal, params }) => {
  const products = useSelector(selectBadProducts);
  const product_categories = products
    .flatMap(product => product.categories)
    .filter((categorie, index, array) => array.indexOf(categorie) === index);
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
        {product_categories.map(item => {
          const number = product_categories.indexOf(item) + 1;
          const filterList = products.filter(el =>
            el.categories.includes(item)
          );
          return (
            <CustomizedList key={item} number={number} categorie={item} list={filterList} />
          );
        })}
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
    height: string.isRequired,
    age: string.isRequired,
    currentWeight: string.isRequired,
    desiredWeight: string.isRequired,
  }),
};
