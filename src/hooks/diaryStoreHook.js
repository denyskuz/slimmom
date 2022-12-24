import { format } from 'date-fns';
import { useState } from 'react';
// import { data } from 'components/DiaryProductsListItem/DiaryProductsListItem';
import { useDispatch } from 'react-redux';
import {
  deleteDiaryProduct,
  getAllDiaryProduct,
} from 'redux/services/operations';
export const useDairyStore = () => {
  const dispatch = useDispatch();

  const [diaryData, setDiaryData] = useState([]);

  const deleteDiaryProductHook = id => {
    const newArr = diaryData.filter((e, i, ar) => e._id.$oid !== id);
    setDiaryData(newArr);
    dispatch(deleteDiaryProduct(id));
    const date = format(new Date(), 'yyyy-MM-dd');
    dispatch(getAllDiaryProduct(date));
  };

  const addDiaryProduct = () => {
    // add code
  };
  return { diaryData, deleteDiaryProductHook, addDiaryProduct };
};
