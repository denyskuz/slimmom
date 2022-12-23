import { ButtonBox } from 'components/DiaryModalList/DiaryModalList.styled';
import { useDairyStore } from 'hooks/diaryStoreHook';
import {
  ModalDiaryStyled,
  ModalTextDiary,
  ButtonModalDiary,
} from './DiaryModalList.styled';

export const DiaryModalList = ({ id }) => {
  const { deleteDiaryProduct } = useDairyStore();
  // const handleConfirm = () => {
  // console.log('MODAL', id);
  // };
  const handleDelete = id => {
    console.log('MAIN', id);
    deleteDiaryProduct(id);
  };

  return (
    <ModalDiaryStyled>
      <ModalTextDiary>'Do you want delete this product?'</ModalTextDiary>
      <ButtonBox>
        <ButtonModalDiary
          variant="contained"
          onClick={() => {
            handleDelete(id);
          }}
        >
          yes
        </ButtonModalDiary>
        <ButtonModalDiary variant="outlined">no</ButtonModalDiary>
      </ButtonBox>
    </ModalDiaryStyled>
  );
};
