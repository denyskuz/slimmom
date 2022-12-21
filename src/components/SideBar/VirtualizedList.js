import Box from '@mui/material/Box';
import { Typography } from '@mui/material';
import { FixedSizeList } from 'react-window';
import { useSelector } from 'react-redux';
import { selectBadProducts } from 'redux/products/selectors';
import { SummaryListItem } from './SummaryListItem';

function renderRow({ data, index, style }) {
  return (
    <SummaryListItem sx={style} key={index} disablePadding>
      <Typography noWrap>{data[index].title[0].ua}</Typography>
    </SummaryListItem>
  );
}

export const VirtualizedList = () => {
  const products = useSelector(selectBadProducts);
  const data = Array.from(products);
  return (
    <Box
      sx={theme => ({
        ...theme.summaryListMargin,
      })}
    >
      <FixedSizeList
        height={200}
        width={280} //container width
        itemSize={14 + 28} //font size + paddings
        itemCount={products.length}
        itemData={data}
        overscanCount={10}
      >
        {renderRow}
      </FixedSizeList>
    </Box>
  );
};
