import { format } from 'date-fns';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteDiaryProduct } from 'redux/services/operations';
import { getAllDiaryProduct } from '../redux/services/selectors';
export const useDairyStore = () => {
  const dispatch = useDispatch();
  const notes = useSelector(getAllDiaryProduct);

  const [diaryData, setDiaryData] = useState([]);

  const deleteDiaryProductHook = id => {
    dispatch(deleteDiaryProduct(id));

    const date = format(new Date(), 'yyyy-MM-dd');
    dispatch(getAllDiaryProduct(date));
    setDiaryData(notes);
  };

  return { diaryData, deleteDiaryProductHook };
};
