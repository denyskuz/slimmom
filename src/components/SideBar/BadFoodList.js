import { Typography } from '@mui/material';
import { useSelector } from 'react-redux';
import { selectBadProducts } from 'redux/services/selectors';
import { VirtualizedList } from './VirtualizedList';

export const BadFoodList = () => {
  const products = useSelector(selectBadProducts);
  return products.length ? (
    <VirtualizedList />
  ) : (
    <Typography
      sx={theme => ({
        ...theme.summaryListMargin,
      })}
    >
      'Your diet will be displayed here'
    </Typography>
  );
};
