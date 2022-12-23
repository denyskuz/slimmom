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
export const data = [
  {
    _id: {
      $oid: '1',
    },
    categories: ['зерновые'],
    weight: 100,
    title: {
      ru: 'Горох маш Ярмарка Платинум',
      ua: 'Горох маш Ярмарка Платинум',
    },
    calories: 312,
    groupBloodNotAllowed: [null, true, false, false, false],
    __v: 0,
  },
  {
    _id: {
      $oid: '2',
    },
    categories: ['зерновые'],
    weight: 100,
    title: {
      ru: 'Гречневая крупа (ядрица) зелёная',
      ua: 'Гречана крупа (ядриця) зелена',
    },
    calories: 296,
    groupBloodNotAllowed: [null, true, false, true, true],
    __v: 0,
  },
  {
    _id: {
      $oid: '3',
    },
    categories: ['яйца'],
    weight: 100,
    title: {
      ru: 'Яйцо куриное (вареное всмятку)',
      ua: 'Яйце куряче (варене всмятку)',
    },
    calories: 159,
    groupBloodNotAllowed: [null, true, false, false, false],
    __v: 0,
  },
  {
    _id: {
      $oid: '4',
    },
    categories: ['яйца'],
    weight: 100,
    title: {
      ru: 'Омлет с сыром',
      ua: 'Омлет із сиром',
    },
    calories: 342,
    groupBloodNotAllowed: [null, true, false, false, false],
    __v: 0,
  },
  {
    _id: {
      $oid: '5',
    },
    categories: ['яйца'],
    weight: 100,
    title: {
      ru: 'Яйцо куриное (вареное вкрутую)',
      ua: 'Яйце куряче (варене круто)',
    },
    calories: 160,
    groupBloodNotAllowed: [null, true, false, false, false],
    __v: 0,
  },
  {
    _id: {
      $oid: '6',
    },
    categories: ['яйца'],
    weight: 100,
    title: {
      ru: 'Меланж яичный',
      ua: 'Меланж яєчний',
    },
    calories: 157,
    groupBloodNotAllowed: [null, true, false, false, false],
    __v: 0,
  },
  {
    _id: {
      $oid: '7',
    },
    categories: ['зерновые'],
    weight: 100,
    title: {
      ru: 'Горох маш Ярмарка Платинум',
      ua: 'Горох маш Ярмарка Платинум',
    },
    calories: 312,
    groupBloodNotAllowed: [null, true, false, false, false],
    __v: 0,
  },
  {
    _id: {
      $oid: '8',
    },
    categories: ['зерновые'],
    weight: 100,
    title: {
      ru: 'Гречневая крупа (ядрица) зелёная',
      ua: 'Гречана крупа (ядриця) зелена',
    },
    calories: 296,
    groupBloodNotAllowed: [null, true, false, true, true],
    __v: 0,
  },
  {
    _id: {
      $oid: '9',
    },
    categories: ['яйца'],
    weight: 100,
    title: {
      ru: 'Яйцо куриное (вареное всмятку)',
      ua: 'Яйце куряче (варене всмятку)',
    },
    calories: 159,
    groupBloodNotAllowed: [null, true, false, false, false],
    __v: 0,
  },
  {
    _id: {
      $oid: '10',
    },
    categories: ['яйца'],
    weight: 100,
    title: {
      ru: 'Омлет с сыром',
      ua: 'Омлет із сиром',
    },
    calories: 342,
    groupBloodNotAllowed: [null, true, false, false, false],
    __v: 0,
  },
  {
    _id: {
      $oid: '11',
    },
    categories: ['яйца'],
    weight: 100,
    title: {
      ru: 'Яйцо куриное (вареное вкрутую)',
      ua: 'Яйце куряче (варене круто)',
    },
    calories: 160,
    groupBloodNotAllowed: [null, true, false, false, false],
    __v: 0,
  },
  {
    _id: {
      $oid: '12',
    },
    categories: ['яйца'],
    weight: 100,
    title: {
      ru: 'Меланж яичный',
      ua: 'Меланж яєчний',
    },
    calories: 157,
    groupBloodNotAllowed: [null, true, false, false, false],
    __v: 0,
  },
];

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

  console.log(new Date());

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
