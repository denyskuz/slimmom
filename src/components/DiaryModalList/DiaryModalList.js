import { ButtonBox } from 'components/DiaryModalList/DiaryModalList.styled';
import { useDairyStore } from 'hooks/diaryStoreHook';
import {
  ModalDiaryStyled,
  ModalTextDiary,
  ButtonModalDiary,
} from './DiaryModalList.styled';

export const DiaryModalList = ({ id }) => {
  const { deleteDiaryProductHook } = useDairyStore();

  const handleDelete = () => {
    const id = localStorage.getItem('id');
    deleteDiaryProductHook(id);
  };

  return (
    <ModalDiaryStyled>
      <ModalTextDiary>'Do you want delete this product?'</ModalTextDiary>
      <ButtonBox>
        <ButtonModalDiary variant="contained" onClick={handleDelete}>
          yes
        </ButtonModalDiary>
        <ButtonModalDiary variant="outlined">no</ButtonModalDiary>
      </ButtonBox>
    </ModalDiaryStyled>
  );
};
