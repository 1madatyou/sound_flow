import { createContext, useState} from 'react';
import Modal from "../components/Modal/Modal"

const ModalContext = createContext();

export default ModalContext;

export const ModalProvider = ({children}) => {

    // Modal window states and them functions

    const [modalActive, setModalActive] = useState(false);
    const [currentModalForm, setCurrentModalForm] = useState();

    function switchModalActive(modalFormType) {
        if (!modalActive) {
            switchModalForm(modalFormType)
        }
        setModalActive(!modalActive)
    }

    function switchModalForm(formType) {
        setCurrentModalForm(() => null)
        setTimeout(() => {
        setCurrentModalForm(() => formType)
        }, 1000)
    }

    let context = {
        modalActive: modalActive,
        currentModalForm: currentModalForm,
        switchModalActive: switchModalActive,
        switchModalForm: switchModalForm
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
