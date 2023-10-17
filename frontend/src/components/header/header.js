import Logo from "../logo/logo";
import "./header.css"


function Header() {
    return (
        <header>
            <div className="wrapper">
                <Logo/>
            </div>
        </header>
    );
}

export default Header;