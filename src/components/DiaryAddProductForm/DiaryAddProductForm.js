import { useState } from 'react';
import { AddProductBtn } from '../../components/Button/Button';
import { HiPlus } from 'react-icons/hi';
import AddForm from './AddForm/AddForm';
import DiaryModal from './DiaryModal/DiaryModal';
import { useMediaQuery } from 'react-responsive';
import { FormWrapper } from './DiaryAddProductForm.styled';

const DiaryAddProductForm = () => {
  const isMobile = useMediaQuery({ query: '(max-width: 767px)' });
  const [modal, setModal] = useState(false);
  const onModal = () => {
    setModal(prevState => !prevState);
  };

  return (
    <div>
      {isMobile ? (
        <FormWrapper>
          <AddProductBtn type="button" onClick={onModal}>
            <HiPlus />
          </AddProductBtn>
          {modal && <DiaryModal onModal={onModal} />}
        </FormWrapper>
      ) : (
        <AddForm />
      )}
    </div>
  );
};

export default DiaryAddProductForm;
