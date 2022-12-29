import AddForm from '../AddForm/AddForm';

import { Backdrop } from './DiaryModal.styled';

const DiaryModal = ({ onModal }) => {
  return (
    <Backdrop>
      <AddForm onModal={onModal}></AddForm>
    </Backdrop>
  );
};

export default DiaryModal;
