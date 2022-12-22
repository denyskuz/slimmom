import { useState } from 'react';
import { data } from 'components/DiaryProductsListItem/DiaryProductsListItem';
// import { useDispatch } from 'react-redux';
// import { deleteProduct } from 'redux/services/operations';
export const useDairyStore = () => {
  // const dispatch = useDispatch();

  const [diaryData, setDiaryData] = useState(data);

  const deleteDiaryProduct = id => {
    const newArr = diaryData.filter((e, i, ar) => e._id.$oid !== id);
    setDiaryData(newArr);
    // dispatch(deleteProduct(id));
  };

  const addDiaryProduct = () => {
    // add code
  };
  return { diaryData, deleteDiaryProduct, addDiaryProduct };
};
