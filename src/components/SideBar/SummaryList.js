import { List, Typography } from '@mui/material';
import { SummaryListItem } from './SideBar.styled';
import { useTranslation } from 'react-i18next';
import { useCalculator } from 'hooks/useCalculator';

export const SummaryList = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getDailyProducts(new Date().toISOString()));
  }, [dispatch]);

  const { dailyNorm, consumed, percent } = useCalculator();

  const { t } = useTranslation();
  return (
    <List component="ol" padding="0px">
      <SummaryListItem disablePadding>
        <Typography>{t('Left')}</Typography>
        <Typography>000 {t('kcal')}</Typography>
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
        <Typography>n% of normal</Typography>
        <Typography>{percent || '000'} %</Typography>
      </SummaryListItem>
    </List>
  );
};
