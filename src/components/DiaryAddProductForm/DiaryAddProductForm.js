import { useState } from 'react';
import { AddProductBtn } from '../../components/Button/Button';
import { HiPlus } from 'react-icons/hi';
import AddForm from './AddForm/AddForm';
import DiaryModal from './DiaryModal/DiaryModal';
import { useMediaQuery } from 'react-responsive';
import { Wrapper } from './DiaryAddProductForm.styled';

const DiaryAddProductForm = ({ onSubmit }) => {
  const isMobile = useMediaQuery({ query: '(max-width: 767px)' });
  const [modal, setModal] = useState(false);
  const onModal = () => {
    setModal(prevState => !prevState);
  };

  return (
    <div>
      {isMobile ? (
        <Wrapper>
          <AddProductBtn type="button" onClick={onModal}>
            <HiPlus />
          </AddProductBtn>
          {modal && <DiaryModal onClickModal={onModal} onSubmit={onSubmit} />}
        </Wrapper>
      ) : (
        <AddForm onSubmit={onSubmit} />
      )}
    </div>
  );
};

export default DiaryAddProductForm;
