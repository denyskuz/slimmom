import * as React from 'react';
import { number, arrayOf, object, string } from 'prop-types';
import Box from '@mui/material/Box';
import ListItemButton from '@mui/material/ListItemButton';
import List from '@mui/material/List';
import KeyboardArrowDown from '@mui/icons-material/KeyboardArrowDown';
import { ListText, ProductListText } from './FoodListNotEat.styled';

export const CustomizedList = ({ number, categorie, list }) => {
  const [open, setOpen] = React.useState(false);
  return (
    <Box>
      <ListItemButton
        alignItems="flex-start"
        onClick={() => setOpen(!open)}
        sx={{
          px: 1,
          pt: 1,
          pb: open ? 0 : 1,
          '&:hover, &:focus': { '& svg': { opacity: open ? 1 : 0 } },
        }}
      >
        <ListText
          primary={
            number +
            '.  ' +
            categorie.charAt(0).toUpperCase() +
            categorie.slice(1)
          }
          sx={{ my: 0 }}
        />
        <KeyboardArrowDown
          sx={{
            mr: -1,
            opacity: 0,
            transform: open ? 'rotate(-180deg)' : 'rotate(0)',
            transition: '0.2s',
          }}
        />
      </ListItemButton>
      <List
        sx={{
          width: '100%',
          bgcolor: 'background.paper',
          position: 'relative',
          overflow: 'auto',
          maxHeight: 200,
          '& ul': { padding: 0 },
        }}
        subheader={<li />}
      >
        {open &&
          list.map(item => (
            <li key={item.title.ru}>
              <ProductListText primary={'-  ' + item.title.ru} />
            </li>
          ))}
      </List>
    </Box>
  );
};

CustomizedList.propTypes = {
  number: number.isRequired,
  categorie: string.isRequired,
  list: arrayOf(object.isRequired),
};
