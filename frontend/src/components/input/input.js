import "./input.scss"


function Input({headerName, headerAction, nameAttribute, typeAttribute, value, onChange}) {

    const capitalize = (str) => str.charAt(0).toUpperCase() + str.slice(1);

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

export default Input;