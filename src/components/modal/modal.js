import React, { useRef } from 'react'
import PropTypes from 'prop-types'
import style from './style.m.css'
import useOutsideClick from "@/hooks/useOutsideClick";

function Modal ({ title, onClose, children }) {
  const cnt = useRef()
  useOutsideClick(cnt, onClose)

  return <div className={style.modal}>
    <div className={style.modal__cnt} ref={cnt}>
      <div className={style.title}>{title}</div>
      {children}
    </div>
  </div>
}

Modal.propTypes = {
  title: PropTypes.string.isRequired,
  onClose: PropTypes.func.isRequired,
}


export default Modal
