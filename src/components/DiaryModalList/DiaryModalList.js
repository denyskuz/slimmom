import { ButtonBox } from 'components/DiaryModalList/DiaryModalList.styled';
import { useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';
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
  const { t } = useTranslation();

  return (
    <ModalDiaryStyled>
      <ModalTextDiary>{t('Delete_product')}</ModalTextDiary>
      <ButtonBox>
        <ButtonModalDiary variant="contained" onClick={handleDelete}>
          {t('yes')}
        </ButtonModalDiary>
        <ButtonModalDiary variant="outlined">{t('no')}</ButtonModalDiary>
      </ButtonBox>
    </ModalDiaryStyled>
  );
};
