import "./form.scss"
import Input from "../input/input";
import Button from "../button/button";

function Form({header}) {
    return (
        <form className="form">
            <h1 className="form__header">{header}</h1>

            <div className="input-list">
                <Input
                    name="email"
                    name_attribute="email"
                    type_attribute="email"/>
                <Input
                    name="password"
                    name_attribute="password"
                    type_attribute="password"/>    
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