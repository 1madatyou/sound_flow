import { capitalize } from "../../utils";

import "./input.scss"


function InputComponent({headerName, headerAction, nameAttribute, typeAttribute, value, error, onChange}) {

    let placeholder = capitalize(headerName)
    const header = `${headerAction ? headerAction : "Enter"} ${headerName}:`
    return (
        <div className="input-wrapper">
            <span className='input-header'>{header}</span>
            <input 
                className="input"
                placeholder={placeholder}
                value={value}
                type={typeAttribute}
                name={nameAttribute}
                onChange={onChange}/>
        </div>
    );
}

export default InputComponent;