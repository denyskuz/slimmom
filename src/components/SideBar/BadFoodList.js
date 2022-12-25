import { BadFoodPlaceholder } from './SideBar.styled';
import { useSelector } from 'react-redux';
import { selectBadProducts } from 'redux/services/selectors';
import { SummaryListItem, SummaryListContainer } from './SideBar.styled';
import { Typography } from '@mui/material';
import { FixedSizeList } from 'react-window';

export const BadFoodList = () => {
  const products = useSelector(selectBadProducts);
  const renderRow = ({ data, index, style }) => (
    <SummaryListItem sx={style} key={index} disablePadding>
      <Typography noWrap>{data[index].title.ua}</Typography>
    </SummaryListItem>
  );
  if (!products.length) {
    return (
      <BadFoodPlaceholder>Your diet will be displayed here</BadFoodPlaceholder>
    );
  }
  return (
    <SummaryListContainer>
      <FixedSizeList
        height={200}
        width={280} //container width
        itemSize={14 + 28} //font size + paddings
        itemCount={products.length}
        itemData={products}
        overscanCount={10}
      >
        {renderRow}
      </FixedSizeList>
    </SummaryListContainer>
  );
};
