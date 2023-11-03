import { createContext, useState, useEffect, useContext } from 'react';
import Modal from "../components/Modal/Modal"

const ModalContext = createContext();

export default ModalContext;

export const ModalProvider = ({children}) => {

    // Modal window states and them functions

    const [modalActive, setModalActive] = useState(false);
    const [currentModalForm, setCurrentModalForm] = useState();

    function switchModalActive(modalActive, modalFormType) {
        if (modalActive) {
        setModalActive(true)
        switchModalForm(modalFormType)
        } else {
        setModalActive(false)
        }
    }

    function switchModalForm(form) {
        setCurrentModalForm(() => null)
        setTimeout(() => {
        setCurrentModalForm(() => form)
        }, 1000)
    }

    let context = {
        modalActive: modalActive,
        currentModalForm: currentModalForm,
        switchModalActive: switchModalActive,
        setCurrentModalForm: setCurrentModalForm
    } 
    
    return (    
        <ModalContext.Provider value={context}>
            {children}
            <Modal 
              active={modalActive} 
              setActive={setModalActive}
              modalFormType={currentModalForm}
              setModalFormType={switchModalForm}/>
        </ModalContext.Provider>
    )

}
