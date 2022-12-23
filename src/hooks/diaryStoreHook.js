import { useState } from 'react';
import { data } from 'components/DiaryProductsListItem/DiaryProductsListItem';
import { useDispatch } from 'react-redux';
import {
  deleteDiaryProduct,
  getAllDiaryProduct,
} from 'redux/services/operations';
export const useDairyStore = () => {
  const dispatch = useDispatch();

  const [diaryData, setDiaryData] = useState(data);

  const deleteDiaryProductHook = id => {
    const newArr = diaryData.filter((e, i, ar) => e._id.$oid !== id);
    setDiaryData(newArr);
    dispatch(deleteDiaryProduct(id));
    dispatch(getAllDiaryProduct('   ADD DATE FORMAT      '));
  };

  const addDiaryProduct = () => {
    // add code
  };
  return { diaryData, deleteDiaryProductHook, addDiaryProduct };
};
