import { Backdrop } from '@mui/material';
import { DiaryModalList } from 'components/DiaryModalList/DiaryModalList';
import { useState } from 'react';
import {
  DeleteButton,
  IconCross,
  List,
  ListItems,
  DataProduct,
  NameProduct,
  Kcal,
  Weight,
} from './DiaryProductsListItem.styled';
import { useSelector } from 'react-redux';
import { getAllDiaryProduct } from 'redux/services/selectors';

export default function DiaryProductsListItem() {
  const notes = useSelector(getAllDiaryProduct);
  const [open, setOpen] = useState(false);
  const handleClose = () => {
    setOpen(false);
  };
  const handleToggle = id => {
    setOpen(!open);
    localStorage.setItem('id', `${id}`);
  };

  return (
    <List>
      {notes.map((e, i, ar) => {
        return (
          <ListItems key={e.id}>
            <NameProduct noWrap>{e.title.ua}</NameProduct>
            <DataProduct>
              <Weight noWrap>{e.weight} g</Weight>
              <Kcal noWrap>
                {Math.round((e.calories / 100) * e.weight)} kcal
              </Kcal>
            </DataProduct>
            <DeleteButton
              type="button"
              onClick={() => {
                handleToggle(e.id);
              }}
            >
              <IconCross />
            </DeleteButton>
          </ListItems>
        );
      })}
      <Backdrop
        sx={{ color: '#fff', zIndex: theme => theme.zIndex.drawer + 1 }}
        open={open}
        onClick={handleClose}
      >
        <DiaryModalList />
      </Backdrop>
    </List>
  );
}
