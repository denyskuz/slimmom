import { BadFoodPlaceholder } from './SideBar.stiled';
import { useSelector } from 'react-redux';
import { selectBadProducts } from 'redux/services/selectors';
import { VirtualizedList } from './VirtualizedList';

export const BadFoodList = () => {
  const products = useSelector(selectBadProducts);
  return Boolean(products.length) ? (
    <VirtualizedList />
  ) : (
    <BadFoodPlaceholder>Your diet will be displayed here</BadFoodPlaceholder>
  );
};
