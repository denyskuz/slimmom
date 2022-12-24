// import { format } from 'date-fns';
import { Backdrop } from '@mui/material';
import { DiaryModalList } from 'components/DiaryModalList/DiaryModalList';
import { useState } from 'react';
import { useDairyStore } from 'hooks/diaryStoreHook';
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

  // const { diaryData } = useDairyStore();
  const [open, setOpen] = useState(false);
  const handleClose = () => {
    setOpen(false);
  };
  const handleToggle = id => {
    setOpen(!open);
    localStorage.setItem('id', `${id}`);
  };
  console.log(notes);
  return (
    <List>
      {notes.map((e, i, ar) => {
        return (
          <ListItems key={e._id}>
            <NameProduct noWrap>{e.product.title.ua}</NameProduct>
            <DataProduct>
              <Weight noWrap>{e.weight} g</Weight>
              <Kcal noWrap>{e.calories}kcal</Kcal>
            </DataProduct>
            <DeleteButton
              type="button"
              onClick={() => {
                handleToggle(e._id);
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
