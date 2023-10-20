import "./input.scss"


function Input({name, name_attribute, type_attribute}) {

    const capitalize = (str) => str.charAt(0).toUpperCase() + str.slice(1);

    let placeholder = capitalize(name)
    let header = `Enter ${name}:`
    return (
        <div className="input-wrapper">
            <span className='input-header'>{header}</span>
            <input 
                className="input"
                placeholder={placeholder}
                type={type_attribute}
                name={name_attribute}/>
        </div>
    );
}

export default Input;