import AddForm from '../AddForm/AddForm';

import { Backdrop, Btn } from './DiaryModal.styled';
import { useTranslation } from 'react-i18next';

const DiaryModal = ({ onSubmit, onClickModal }) => {
  const { t } = useTranslation();
  return (
    <Backdrop>
      <AddForm onClickModal={onClickModal} onSubmit={onSubmit}>
        <Btn type="submit">{t('Add')}</Btn>
      </AddForm>
    </Backdrop>
  );
};

export default DiaryModal;
