import { ButtonBox } from 'components/DiaryModalList/DiaryModalList.styled';
import { useDispatch } from 'react-redux';
import { deleteDiaryProduct } from 'redux/services/operations';
import {
  ModalDiaryStyled,
  ModalTextDiary,
  ButtonModalDiary,
} from './DiaryModalList.styled';

export const DiaryModalList = () => {
  const dispatch = useDispatch();
  const handleDelete = () => {
    const id = localStorage.getItem('id');
    dispatch(deleteDiaryProduct(id));
  };

  return (
    <ModalDiaryStyled>
      <ModalTextDiary>Do you want delete this product?</ModalTextDiary>
      <ButtonBox>
        <ButtonModalDiary variant="contained" onClick={handleDelete}>
          yes
        </ButtonModalDiary>
        <ButtonModalDiary variant="outlined">no</ButtonModalDiary>
      </ButtonBox>
    </ModalDiaryStyled>
  );
};
