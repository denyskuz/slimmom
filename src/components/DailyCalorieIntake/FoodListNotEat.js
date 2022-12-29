import { useState } from 'react';
import { useSelector } from 'react-redux';
import axios from 'axios';
import { number, string, bool } from 'prop-types';
import Box from '@mui/material/Box';
import ListItemButton from '@mui/material/ListItemButton';
import InfiniteScroll from 'react-infinite-scroll-component';
import { selectUserParams } from 'redux/services/selectors';

import List from '@mui/material/List';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';

import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import CircularProgress from '@mui/material/CircularProgress';

export const CustomizedList = ({ number, category, withNumbers }) => {
  const user = useSelector(selectUserParams);
  const [products, setProducts] = useState([]);
  const [open, setOpen] = useState(false);
  const [page, setPage] = useState(1);

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
    setOpen(!open);
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

  const handleClose = () => {
    setOpen(!open);
  };

  return (
    <Box>
      <List
        sx={{ width: '100%', padding: 0 }}
        component="nav"
        aria-labelledby="nested-list-subheader"
      >
        <ListItemButton onClick={handleClick} sx={{ pl: 0 }}>
          <ListItemText
            primary={
              (withNumbers ? number + '.  ' : '') +
              category.charAt(0).toUpperCase() +
              category.slice(1)
            }
            sx={{ my: 0, p: 0 }}
          />
          {open ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
        <Collapse in={open} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <div
              id="scrollableDiv"
              style={{
                height: 300,
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
                loader={
                  <Box
                    sx={{
                      height: '150px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    <CircularProgress color="info" />
                  </Box>
                }
                scrollableTarget="scrollableDiv"
              >
                {products.map((item, index) => (
                  <ListItemButton
                    onClick={handleClose}
                    key={index}
                    sx={{ pl: 0 }}
                  >
                    <ListItemText primary={'-  ' + item} />
                  </ListItemButton>
                ))}
              </InfiniteScroll>
            </div>
          </List>
        </Collapse>
      </List>
    </Box>
  );
};

CustomizedList.propTypes = {
  number: number.isRequired,
  category: string.isRequired,
  withNumbers: bool.isRequired,
};
