import { ButtonBox } from 'components/DiaryModalList/DiaryModalList.styled';
import { useDispatch } from 'react-redux';
import { deleteDiaryProduct } from 'redux/services/operations';
import {
  ModalDiaryStyled,
  ModalTextDiary,
  ButtonModalDiary,
} from './DiaryModalList.styled';

import { useTranslation } from 'react-i18next';

export const DiaryModalList = () => {
  const dispatch = useDispatch();
  const handleDelete = () => {
    const id = localStorage.getItem('id');
    dispatch(deleteDiaryProduct(id));
  };

  const { t } = useTranslation();

  return (
    <ModalDiaryStyled>
      <ModalTextDiary>{t("Delete_product")}</ModalTextDiary>
      <ButtonBox>
        <ButtonModalDiary variant="contained" onClick={handleDelete}>
        {t("yes")}
        </ButtonModalDiary>
        <ButtonModalDiary variant="outlined">no</ButtonModalDiary>
      </ButtonBox>
    </ModalDiaryStyled>
  );
};
