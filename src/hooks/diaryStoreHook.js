import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  deleteDiaryProduct,
  getAllDiaryProduct as dispatchAllDiaryProduct,
} from 'redux/services/operations';
import { getAllDiaryProduct } from '../redux/services/selectors';

export const useDairyStore = () => {
  const notes = useSelector(getAllDiaryProduct);
  const dispatch = useDispatch();

  const mappedData = notes.map(({ _id, weight, product }) => ({
    title: product.title,
    productId: product._id,
    _id,
    weight,
    calories: Math.round((product.calories / product.weight) * weight),
  }));

  useEffect(() => {
    const date = new Date().toISOString();
    dispatch(dispatchAllDiaryProduct(date));
  }, [dispatch]);

  const deleteDiaryProductHook = id => {
    dispatch(deleteDiaryProduct(id));
  };

  return { mappedData, deleteDiaryProductHook };
};
