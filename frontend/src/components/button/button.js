import "./button.scss"

function Button({variant, children, onClick}) {

    const buttonClassName = variant ? `btn ${variant}`: 'btn' 

    return (
        <button className={buttonClassName} onClick={onClick}>{children}</button>
    );
}

export default Button