import "./form.scss"
import Button from "../../button/button";
import FormLinks from "./formLinks"
import React from "react";


function Form({header, inputList, submitButtonText, formLinks, setForm, onSubmit, onInputChange}) {
    
    return (
        <form className="form" onSubmit={onSubmit}>
            <h1 className="form__header">{header}</h1>

            <div className="input-list">
                {inputList.map((element, index) => {
                    return React.cloneElement(element, {key: index+1, onChange: onInputChange})
                })}  
            </div>

            <div className="form__button-wrapper">
                <Button text={submitButtonText}/>

                {formLinks ? <FormLinks links={formLinks} setForm={setForm}/> : null}
                
            </div>
        </form>
    );
}

export default Form;