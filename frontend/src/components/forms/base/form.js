import "./form.scss"
import Button from "../../button/button";
import FormLinks from "./formLinks"


function Form({header, inputList, submitButtonText, formLinks}) {
    return (
        <form className="form">
            <h1 className="form__header">{header}</h1>

            <div className="input-list">
                {inputList}  
            </div>

            <div className="form__button-wrapper">
                <Button text={submitButtonText}/>

                <FormLinks links={formLinks}/>
                
            </div>
        </form>
    );
}

export default Form;