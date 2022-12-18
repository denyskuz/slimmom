import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';

import styles from './modal.module.css';

const Modal = ({ children, onClose }) => {
  useEffect(() => {
    window.addEventListener('keydown', onEscClick);
    return () => {
      window.removeEventListener('keydown', onEscClick);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onEscClick = e => {
    if (e.code === 'Escape') {
      onClose();
    }
  };
  const onBackdropClick = e => {
    if (e.currentTarget === e.target) {
      onClose();
    }
  };

  const onCloseButtonClick = e => {
    if (e.target.tagName === 'BUTTON') {
      onClose();
    }
  };

  return createPortal(
    <div className={styles.overlay} onClick={onBackdropClick}>
      <div className={styles.modal}>
        <button className={styles.closeBtn} onClick={onClose} />
        <div className={styles.mobileModal}>
          <button
            className={styles.closeBtnMobile}
            onClick={onCloseButtonClick}
          />
        </div>
        <div>{children}</div>
      </div>
    </div>,
    document.getElementById('modal')
  );
};
Modal.defaultProps = {
  onClose: () => {},
};
Modal.propTypes = {
  onCLose: PropTypes.func,
};

export default Modal;
