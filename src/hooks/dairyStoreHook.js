import { useState } from 'react';
import { data } from 'components/DiaryProductsListItem/DiaryProductsListItem';
export const useDairyStore = () => {
  const [dairyData, setDairyData] = useState(data);
  const deleteDairyProduct = id => {
    return console.log(id), dairyData.find(id => id !== dairyData._id.$oid);
    // dairyData.slice();
  };
  return { dairyData, deleteDairyProduct };
};
