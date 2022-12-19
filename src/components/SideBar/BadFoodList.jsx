import { List, Typography } from '@mui/material';
import { useSelector } from 'react-redux';
import { selectBadProducts } from 'redux/products/selectors';
import { SummaryListItem } from './SummaryListItem';

export const BadFoodList = () => {
  const products = useSelector(selectBadProducts);
  if (!products) {
    return (
      <Typography
        sx={theme => ({
          ...theme.summaryListMargin,
        })}
      >
        'Your diet will be displayed here'
      </Typography>
    );
  }
  return (
    <List
      sx={theme => ({
        ...theme.summaryListMargin,
      })}
      component="ol"
    >
      {products.slice(0, 5).map(product => {
        return (
          <SummaryListItem key={product._id} disablePadding>
            <Typography>{product.title[0].ua}</Typography>
          </SummaryListItem>
        );
      })}
    </List>
  );
};
