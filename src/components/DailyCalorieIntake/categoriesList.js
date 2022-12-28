import Box from '@mui/material/Box';
import Loader from 'components/Loader';
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
  useEffect(() => {
    if (!categories.length) {
      dispatch(getProductsCategories(userParams));
    }
  }, [dispatch, userParams, categories]);

  const { t } = useTranslation();
  if (!categories.length) {
    return <BadFoodPlaceholder>{t('Diet_display')}</BadFoodPlaceholder>;
  }
  return (
    <List>
      {!categories[1] ? (
        <Box sx={{ height: '400px', width: '200px' }}>
          <Loader />
        </Box>
      ) : (
        categories.map((item, index) => {
          return (
            <CustomizedList
              key={item}
              number={index + 1}
              category={item}
              withNumbers={onMain}
            />
          );
        })
      )}
    </List>
  );
};

CategoriesList.propTypes = {
  onMain: bool,
};
