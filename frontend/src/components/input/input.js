import "./input.scss"


function Input({headerName, headerAction, nameAttribute, typeAttribute}) {

    const capitalize = (str) => str.charAt(0).toUpperCase() + str.slice(1);

    let placeholder = capitalize(headerName)
    const header = `${headerAction ? headerAction : "Enter"} ${headerName}:`
    return (
        <div className="input-wrapper">
            <span className='input-header'>{header}</span>
            <input 
                className="input"
                placeholder={placeholder}
                type={typeAttribute}
                name={nameAttribute}/>
        </div>
    );
}

export default Input;