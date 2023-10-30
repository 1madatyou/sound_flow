import "./form.scss"
import Button from "../../button/button";

function Form({header, inputList}) {
    return (
        <form className="form">
            <h1 className="form__header">{header}</h1>

            <div className="input-list">
                {inputList}  
            </div>

            <div className="form__button-wrapper">
                <Button text="Sign in"/>
                <div className="form__links-wrapper">
                    <a href="/" className="a">Sign up</a>
                    <span>·</span>
                    <a href="/" className="a">Restore access</a>
                </div>
            </div>
        </form>
    );
}

export default Form;