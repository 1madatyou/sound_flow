import { React } from 'react';
import AuthForm from "../forms/authForm"
import RegForm from "../forms/regForm"
import RestoreAccessForm from '../forms/restoreAccessForm';

import Loader from "../loader/loader"

import "./modal.scss"

const Modal = ({active, setActive, modalFormType, setModalFormType}) => {

  const renderForm = () => {
      switch (modalFormType) {
        case "RegForm":
          return <RegForm setForm={setModalFormType} />;
        case "AuthForm":
          return <AuthForm setForm={setModalFormType} />;
        case "RestoreAccessForm":
          return <RestoreAccessForm setForm={setModalFormType} />;
        default:
          return <Loader/>;
      }
  }

  return (
      <div className={active ? "modal active" : "modal"} onClick={() => setActive(false)}>
          <div className={active ? "modal__content active" : "modal__content"} onClick={e => e.stopPropagation()}>
              {renderForm()}
          </div>
      </div>
  )

}

export default Modal;