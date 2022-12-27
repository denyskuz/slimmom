import { List, Typography } from '@mui/material';
import { useSelector } from 'react-redux';
import { selectCalories } from 'redux/services/selectors';
import { SummaryListItem } from './SideBar.styled';
import { useTranslation } from 'react-i18next';

export const SummaryList = () => {
  const dailyCalories = useSelector(selectCalories);
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
        <Typography>n% of normal</Typography>
        <Typography>000 %</Typography>
      </SummaryListItem>
    </List>
  );
};
