import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';
import { Overlay, ModalContainer, CloseButton, Title } from './Modal.styled';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { useEffect } from 'react';

const Modal = ({ onClose, children }) => {
  useEffect(() => {
    window.addEventListener('keydown', onEscPress);
    const body = document.querySelector('body');
    body.style.overflow = 'hidden';
    

    return () => {
      window.removeEventListener('keydown', onEscPress);
      window.removeEventListener('click', onButtonClick);
      const body = document.querySelector('body');
      body.style.overflow = 'auto';
    };
  });
  const { t } = useTranslation();
  
  const onEscPress = e => {
    if (e.code === 'Escape') {
      onClose();
    }
  };

  const onBackdropClick = e => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  const onButtonClick = e => {
    if (e.target.tagName === 'BUTTON') {
      onClose();
    }
  };

  return createPortal(
    <Overlay onClick={onBackdropClick}>
      <ModalContainer>
        <CloseButton type="button" onClick={onButtonClick}></CloseButton>
        {/* <MobileModalClose type="button" onClick={handleButtonClick}>
        
        <MobileModalClose/> */}
        <Title>{t('Daily_calorie')}</Title>
        {children}
      </ModalContainer>
    </Overlay>,

    document.getElementById('modal-root')
  );
};

Modal.propTypes = {
  children: PropTypes.node,
  onClose: PropTypes.func,
};

export default Modal;
