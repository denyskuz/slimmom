import { Backdrop } from '@mui/material';
import { DiaryModalList } from 'components/DiaryModalList/DiaryModalList';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import {
  DeleteButton,
  IconCross,
  List,
  ListItems,
  DataProduct,
  NameProduct,
  Kcal,
  Weight,
  Box,
} from './DiaryProductsListItem.styled';
import { useSelector } from 'react-redux';
import {
  getAllDiaryProduct,
  getAllGroupDiaryProduct,
} from 'redux/services/selectors';

export default function DiaryProductsListItem() {
  const notes = useSelector(getAllDiaryProduct);
  const notesGroup = useSelector(getAllGroupDiaryProduct);
  const [open, setOpen] = useState(false);
  const [group, setGrouped] = useState(false);
  const dailyProducts = group ? notesGroup : notes;

  const handleClose = () => {
    setOpen(false);
  };
  const { t } = useTranslation();

  const handleToggle = id => {
    setOpen(!open);
    localStorage.setItem('id', `${id}`);
  };

  return (
    <Box>
      <FormGroup style={{ marginBottom: 2 }}>
        <FormControlLabel
          control={
            <Checkbox checked={group} onChange={() => setGrouped(!group)} />
          }
          label="Group products"
        />
      </FormGroup>
      <List>
        {dailyProducts.map((e, i, ar) => {
          return (
            <ListItems key={e.id}>
              <NameProduct noWrap>{e.title.ua}</NameProduct>
              <DataProduct>
                <Weight noWrap>
                  {e.weight} {t('g')}
                </Weight>
                <Kcal noWrap>
                  {e.calories} {t('kcal')}
                </Kcal>
              </DataProduct>
              {!group && (
                <DeleteButton
                  type="button"
                  onClick={() => {
                    handleToggle(e.id);
                  }}
                >
                  <IconCross />
                </DeleteButton>
              )}
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
    </Box>
  );
}
