import AddForm from '../AddForm/AddForm';

import { Backdrop } from './DiaryModal.styled';

const DiaryModal = () => {
  return (
    <Backdrop>
      <AddForm />
    </Backdrop>
  );
};

export default DiaryModal;
