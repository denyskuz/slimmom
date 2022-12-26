import { useEffect } from 'react';
import { List, Typography } from '@mui/material';
import { useSelector, useDispatch } from 'react-redux';
import { getDailyProducts } from 'redux/products/actions';
import { selectCalories, selectDailyProducts } from 'redux/services/selectors';
import { SummaryListItem } from './SideBar.styled';
import { useTranslation } from 'react-i18next';

export const SummaryList = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getDailyProducts(new Date().toDateString()));
  }, [dispatch]);

  const dailyCalories = useSelector(selectCalories);
  const dailyProducts = useSelector(selectDailyProducts);
  console.log(dailyProducts);
  const { t } = useTranslation();
  return (
    <List component="ol" padding="0px">
      <SummaryListItem disablePadding>
        <Typography>Left</Typography>
        <Typography>000 {t('kcal')}</Typography>
      </SummaryListItem>
      <SummaryListItem disablePadding>
        <Typography noWrap>{t('Consumed')}</Typography>
        <Typography>000 {t('kcal')}</Typography>
      </SummaryListItem>
      <SummaryListItem disablePadding>
        <Typography>{t('Daily_rate')}</Typography>
        <Typography>
          {dailyCalories || '000'} {t('kcal')}
        </Typography>
      </SummaryListItem>
      <SummaryListItem disablePadding>
        <Typography>{t('Norma')}</Typography>
        <Typography>000 {t('kcal')}</Typography>
      </SummaryListItem>
    </List>
  );
};
