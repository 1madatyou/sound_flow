import "./form.css"
import Input from "../input/input";
import Button from "../button/button";

function Form({header}) {
    return (
        <form className="form">
            <h1 className="form__header">{header}</h1>

            <div className="input-list">
                <Input
                    name="email"
                    type="email"/>
                <Input
                    name="password"
                    type="password"/>    
            </div>

            <div className="form__button-wrapper">
                <Button text="Sign in"/>
            </div>
        </form>
    );
}

export default Form;