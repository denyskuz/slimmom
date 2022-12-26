import * as React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { number, arrayOf, objectOf, shape, string, bool } from 'prop-types';
import Box from '@mui/material/Box';
import ListItemButton from '@mui/material/ListItemButton';
import List from '@mui/material/List';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import KeyboardArrowDown from '@mui/icons-material/KeyboardArrowDown';
import { ListText, ProductListText } from './FoodListNotEat.styled';
import { selectFoodList } from 'redux/services/selectors';
import { getProductsByCategories } from 'redux/services/operations';

export const CustomizedList = ({ number, categorie }) => {
  const dispatch = useDispatch();
  const allList = useSelector(selectFoodList);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [open, setOpen] = React.useState(false);
  const isOpen = Boolean(anchorEl);

  const handleClick = event => {
    setAnchorEl(event.currentTarget);
    dispatch(getProductsByCategories({ categorie: categorie }));
    setOpen(!open);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box>
      <ListItemButton
        alignItems="flex-start"
        onClick={handleClick}
        sx={{
          pt: 0,
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
      >
        <Menu
          id="basic-menu"
          anchorEl={anchorEl}
          open={isOpen}
          onClose={handleClose}
          MenuListProps={{
            'aria-labelledby': 'basic-button',
          }}
        >
          {open &&
            allList.map(item => (
              <MenuItem onClick={handleClose} key={item.title.ua}>
                <ProductListText primary={'-  ' + item.title.ua} />
              </MenuItem>
            ))}
        </Menu>
      </List>
    </Box>
  );
};

CustomizedList.propTypes = {
  number: number.isRequired,
  categorie: string.isRequired,
  list: arrayOf(
    shape({
      categories: arrayOf(string.isRequired),
      groupBloodNotAllowed: arrayOf(bool),
      title: objectOf(string.isRequired),
      weight: number,
      __v: number,
      _id: string,
    })
  ),
};
