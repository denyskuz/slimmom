import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getProductsCategories } from 'redux/services/operations';
import {
  selectUserParams,
  selectBadCategories,
} from 'redux/services/selectors';
import { useTranslation } from 'react-i18next';
import { bool } from 'prop-types';
import { List } from './dailyCalorieIntake.styled';
import { CustomizedList } from './FoodListNotEat';
import { BadFoodPlaceholder } from 'components/SideBar';

export const CategoriesList = ({ onMain = true }) => {
  const userParams = useSelector(selectUserParams);
  const categories = useSelector(selectBadCategories);
  const dispatch = useDispatch();
  const { t } = useTranslation();

  useEffect(() => {
    if (!categories.length && userParams && userParams.age !== 0) {
      dispatch(getProductsCategories(userParams));
    }
  }, [dispatch, userParams, categories]);

  if (!categories.length) {
    return <BadFoodPlaceholder>{t('Diet_display')}</BadFoodPlaceholder>;
  }
  return (
    <List>
      {categories.map((item, index) => {
        return (
          <CustomizedList
            key={item}
            number={index + 1}
            category={item}
            withNumbers={onMain}
          />
        );
      })}
    </List>
  );
};

CategoriesList.propTypes = {
  onMain: bool,
};
