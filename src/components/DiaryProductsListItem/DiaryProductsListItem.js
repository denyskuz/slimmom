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

export default function DiaryProductsListItem() {
  const { diaryData } = useDairyStore();
  const [open, setOpen] = useState(false);
  const handleClose = () => {
    setOpen(false);
  };
  const handleToggle = id => {
    setOpen(!open);
    localStorage.setItem('id', `${id}`);
  };
  // const date = format(new Date(), 'yyyy-MM-dd');

  return (
    <List>
      {diaryData.map((e, i, ar) => {
        return (
          <ListItems key={e._id.$oid}>
            <NameProduct noWrap>{e.title.ua}</NameProduct>
            <DataProduct>
              <Weight noWrap>{e.weight} g</Weight>
              <Kcal noWrap>{e.calories}kcal</Kcal>
            </DataProduct>
            <DeleteButton
              type="button"
              onClick={() => {
                handleToggle(e._id.$oid);
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
