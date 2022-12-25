import * as React from 'react';
import { number, arrayOf, object, string } from 'prop-types';
import Box from '@mui/material/Box';
import ListItemButton from '@mui/material/ListItemButton';
import List from '@mui/material/List';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import KeyboardArrowDown from '@mui/icons-material/KeyboardArrowDown';
import { ListText, ProductListText } from './FoodListNotEat.styled';

export const CustomizedList = ({ number, categorie, list }) => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [open, setOpen] = React.useState(false);
  const isOpen = Boolean(anchorEl);
  const handleClick = event => {
    setAnchorEl(event.currentTarget);
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
          px: 0,
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
        subheader={<li />}
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
            list.map(item => (
              <li key={item.title.ru}>
                <MenuItem onClick={handleClose}>
                  <ProductListText primary={'-  ' + item.title.ru} />
                </MenuItem>
              </li>
            ))}
        </Menu>
      </List>
    </Box>
  );
};

CustomizedList.propTypes = {
  number: number.isRequired,
  categorie: string.isRequired,
  list: arrayOf(object.isRequired),
};
