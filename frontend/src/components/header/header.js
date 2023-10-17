import Logo from "../logo/logo";
import SideButton from "./side-button/side-button"
import "./header.css"


function Header() {
    return (
        <header>
            <div className="wrapper">
                <div className="header__content">
                    <Logo/>

                    <div className="nav__menu">

                    </div>

                    <div className="side-buttons">
                        <SideButton text="My Profile"/>
                        <SideButton text="Leave"/>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;