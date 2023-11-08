import React, {useContext } from "react";

import Button from "../../button/button";
import FormLinks from "./formLinks"

import ModalContext from "../../../context/ModalContext";

import { capitalize } from "../../../utils";

import "./form.scss"


function Form({
    header, 
    inputList, 
    submitButtonText, 
    formLinks, 
    formErrors, 

    onSubmit, 
    onInputChange}) {
    
    const {switchModalForm} = useContext(ModalContext);

    const renderErrors = () => {

        if (formErrors) {
            if (!formErrors.length) {
                return null;
            }
        }
        

        return ( 
            <div className="form__errors">

                {formErrors.map(error => {

                    let [errorHeader, errorMessages] = error
                    errorMessages = Array.isArray(errorMessages) ? errorMessages : [errorMessages]

                    return (
                        <div className="form__error">

                            <div className="form__error-header">
                                {capitalize(errorHeader)}:
                            </div>
                            <ul className="form__error-messages">

                                {errorMessages.map(errorMessage => {
                                    return (
                                        <li className="form__error-message">
                                            {errorMessage}
                                        </li>
                                    );
                                })}

                            </ul>

                        </div>
                    );

                })}

            </div>
        )
    }

    return (
        <form className="form" onSubmit={onSubmit}>
            
            <h1 className="form__header">{header}</h1>

            <div className="input-list">
                {inputList.map((element, index) => {
                    return React.cloneElement(element, {key: index+1, onChange: onInputChange})
                })}  
            </div>

            {renderErrors()}

            <div className="form__button-wrapper">
                <Button text={submitButtonText}/>

                {formLinks ? <FormLinks links={formLinks} setForm={switchModalForm}/> : null}
                
            </div>
        </form>
    );
}

export default Form;