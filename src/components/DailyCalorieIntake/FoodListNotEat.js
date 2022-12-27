import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import axios from 'axios';
import { number, string } from 'prop-types';
import Box from '@mui/material/Box';
import ListItemButton from '@mui/material/ListItemButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import KeyboardArrowDown from '@mui/icons-material/KeyboardArrowDown';
import { ListText, ProductListText } from './FoodListNotEat.styled';
import { selectUserParams } from 'redux/services/selectors';
import Loader from 'components/Loader';
import { overflow } from 'styled-system';

export const CustomizedList = ({ number, category }) => {
  const user = useSelector(selectUserParams);
  const [products, setProducts] = useState([]);
  const [anchorEl, setAnchorEl] = useState(null);
  const [open, setOpen] = useState(false);
  const [page, setPage] = useState(2);
  const [fetching, setFetching] = useState(false);
  const isOpen = Boolean(anchorEl);

  useEffect(() => {
    if (open) {
      document.addEventListener('scroll', scrollHandler);
      return function () {
        document.removeEventListener('scroll', scrollHandler);
      };
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [open]);

  useEffect(() => {
    if (fetching) {
      axios
        .post(
          `/api/products?category=${category}&currentPage=${page}&pageSize=10`,
          user
        )
        .then(res => {
          setProducts([...products, ...res.data]);
          setPage(prevstate => prevstate + 1);
        })
        .finally(() => setFetching(false));
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [fetching]);

  const scrollHandler = e => {
    if (
      e.target.documentElement.scrollHeight -
        (e.target.documentElement.scrollTop + window.innerHeight) <
      100
    ) {
      setFetching(true);
    }
  };

  const handleClick = event => {
    setAnchorEl(event.currentTarget);
    axios.post(
          `/api/products?category=${category}&currentPage=1&pageSize=15`,
          user
        )
      .then(res => {
        setProducts(res.data.products);
      })
    setOpen(!open);
  };

  const handleClose = () => {
    setAnchorEl(null);
    setOpen(!open);
  };

  return (
    <Box>
      <ListItemButton
        alignItems="flex-start"
        onClick={handleClick}
        sx={{
          pt: 0,
          pb: open ? 0 : 0,
          '&:hover, &:focus': { '& svg': { opacity: open ? 0 : 1 } },
        }}
      >
        <ListText
          primary={
            number +
            '.  ' +
            category.charAt(0).toUpperCase() +
            category.slice(1)
          }
          sx={{ my: 0 }}
        />
        <KeyboardArrowDown
          sx={{
            mr: -1,
            opacity: 1,
            transform: open ? 'rotate(-180deg)' : 'rotate(0)',
            transition: '0.2s',
          }}
        />
      </ListItemButton>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={isOpen}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        {open && !products[1] ? (
          <Box sx={{ height: '400px', width: '300px', overflow: 'none'}}>
            <Loader />
          </Box>
        ) : (
          products.map(item => (
            <MenuItem onClick={handleClose} key={item.title.ua}>
              <ProductListText primary={'-  ' + item.title.ua} />
            </MenuItem>
          ))
        )}
      </Menu>
    </Box>
  );
};

CustomizedList.propTypes = {
  number: number.isRequired,
  category: string.isRequired,
};
