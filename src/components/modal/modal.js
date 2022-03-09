import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import useOutsideClick from '@/hooks/useOutsideClick';
import style from './style.m.css';

function Modal({ title, onClose, children }) {
  const cnt = useRef();
  useOutsideClick(cnt, onClose);

  return (
    <div className={style.modal}>
      <div className={style.modal__cnt} ref={cnt}>
        <div className={style.title}>{title}</div>
        {children}
      </div>
    </div>
  );
}

Modal.propTypes = {
  title: PropTypes.string.isRequired,
  onClose: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
};

export default Modal;
