import {React, useState} from 'react';
import AuthForm from "../forms/authForm"
import RegForm from "../forms/regForm"
import RestoreAccessForm from '../forms/restoreAccessForm';


import "./modal.scss"

const Modal = ({active, setActive, modalFormType}) => {

    const [currentForm, setCurrentForm] = useState();

    const renderForm = () => {
        switch (currentForm) {
          case "RegForm":
            return <RegForm />;
          case "AuthForm":
            return <AuthForm />;
          case "RestoreAccessForm":
            return <RestoreAccessForm />;
          default:
            return null;
        }
    }

    return (
        <div className={active ? "modal active" : "modal"} onClick={() => setActive(false)}>
            <div className={active ? "modal__content active" : "modal__content"} onClick={e => e.stopPropagation()}>
                <AuthForm/>
            </div>
        </div>
    )

}

export default Modal;