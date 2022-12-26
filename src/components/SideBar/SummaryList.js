import { useEffect, useState } from 'react';
import { List, Typography } from '@mui/material';
import { useSelector, useDispatch } from 'react-redux';
import { getDailyProducts } from 'redux/services/operations';
import { selectCalories, selectDailyProducts } from 'redux/services/selectors';
import { SummaryListItem } from './SideBar.styled';
import { useTranslation } from 'react-i18next';

const useCalculator = () => {
  const [consumed, setConsumed] = useState(0);
  const dailyNorm = useSelector(selectCalories);
  const dailyProducts = useSelector(selectDailyProducts);
  useEffect(() => {
    if (dailyProducts.lenght) {
      setConsumed(
        dailyProducts.reduce((total, note) => {
          return (
            total + (note.product.calories / note.product.weight) * note.weight
          );
        })
      );
    }
  }, [dailyProducts]);
  const left = dailyNorm - consumed;
  const percent = (left / dailyNorm) * 100.0;
  return { dailyNorm, consumed, left, percent };
};

export const SummaryList = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getDailyProducts(new Date().toISOString()));
  }, [dispatch]);

  const { dailyNorm, consumed, left, percent } = useCalculator();

  const { t } = useTranslation();
  return (
    <List component="ol" padding="0px">
      <SummaryListItem disablePadding>
        <Typography>Left</Typography>
        <Typography>
          {left || '000'} {t('kcal')}
        </Typography>
      </SummaryListItem>
      <SummaryListItem disablePadding>
        <Typography noWrap>{t('Consumed')}</Typography>
        <Typography>
          {consumed || '000'} {t('kcal')}
        </Typography>
      </SummaryListItem>
      <SummaryListItem disablePadding>
        <Typography>{t('Daily_rate')}</Typography>
        <Typography>
          {dailyNorm || '000'} {t('kcal')}
        </Typography>
      </SummaryListItem>
      <SummaryListItem disablePadding>
        <Typography>{t('Norma')}</Typography>
        <Typography>
          {percent || '000'} {t('kcal')}
        </Typography>
      </SummaryListItem>
    </List>
  );
};
