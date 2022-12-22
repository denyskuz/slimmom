import AddForm from '../AddForm/AddForm';

import { Backdrop, Btn } from './DiaryModal.styled';

const DiaryModal = ({ onSubmit, onClickModal }) => {
  return (
    <Backdrop>
      <AddForm onClickModal={onClickModal} onSubmit={onSubmit}>
        <Btn type="submit">Add</Btn>
      </AddForm>
    </Backdrop>
  );
};

export default DiaryModal;
