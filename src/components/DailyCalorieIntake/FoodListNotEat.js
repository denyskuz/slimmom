import { useState } from 'react';
import { useSelector } from 'react-redux';
import axios from 'axios';
import { number, string } from 'prop-types';
import Box from '@mui/material/Box';
import ListItemButton from '@mui/material/ListItemButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import InfiniteScroll from 'react-infinite-scroll-component';
import KeyboardArrowDown from '@mui/icons-material/KeyboardArrowDown';
import { ListText, ProductListText } from './FoodListNotEat.styled';
import { selectUserParams } from 'redux/services/selectors';
import Loader from 'components/Loader';

export const CustomizedList = ({ number, category }) => {
  const user = useSelector(selectUserParams);
  const [products, setProducts] = useState([]);
  const [anchorEl, setAnchorEl] = useState(null);
  const [open, setOpen] = useState(false);
  const [page, setPage] = useState(1);
  const isOpen = Boolean(anchorEl);

  const getTitles = () => {
    axios
      .post(
        `/api/products?category=${category}&currentPage=${page}&pageSize=25`,
        user
      )
      .then(res => {
        const titles = res.data.products.flatMap(prod => prod.title.ua);
        setProducts(prev => [...prev, ...titles]);
      });
    setPage(prev => prev + 1);
  };

  const handleClick = event => {
    setAnchorEl(event.currentTarget);
    axios
      .post(
        `/api/products?category=${category}&currentPage=${page}&pageSize=25`,
        user
      )
      .then(res => {
        const titles = res.data.products.flatMap(prod => prod.title.ua)
        setProducts(prev => [...prev, ...titles]);
      });
    setPage(prev=>prev+1)
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
        {open && (<div
                id="scrollableDiv"
                style={{
                  height: 700,
                  overflow: 'auto',
                  display: 'flex',
                  flexDirection: 'column',
                }}
              >
                <InfiniteScroll
                  dataLength={products.length}
                  next={getTitles}
                  style={{ display: 'flex', flexDirection: 'column' }} 
                  inverse={false} //
                  hasMore={true}
                  loader={<Box sx={{ height: '400px', width: '300px' }}>
                            <Loader />
                          </Box>}
                  scrollableTarget="scrollableDiv"
                >
                  {products.map((item, index) => (
                      <MenuItem onClick={handleClose} key={index}>
                        <ProductListText primary={'-  ' + item} />
                      </MenuItem>
                    ))}
                </InfiniteScroll>
              </div>)
          }
      </Menu>
    </Box>
  );
};

CustomizedList.propTypes = {
  number: number.isRequired,
  category: string.isRequired,
};
