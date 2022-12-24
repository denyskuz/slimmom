import { BadFoodPlaceholder } from './SideBar.stiled';
import { useSelector } from 'react-redux';
import { selectBadProducts } from 'redux/services/selectors';
import { VirtualizedList } from './VirtualizedList';
import { useTranslation } from 'react-i18next';
// eslint-disable-next-line
import i18n from './../../translations/i18n';

export const BadFoodList = () => {
  const products = useSelector(selectBadProducts);
  const { t } = useTranslation();
  return Boolean(products.length) ? (
    <VirtualizedList />
  ) : (
    <BadFoodPlaceholder>{t('Diet_display')}</BadFoodPlaceholder>
  );
};
