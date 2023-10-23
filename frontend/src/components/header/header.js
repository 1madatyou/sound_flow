import Logo from "../logo/logo";
import Button from "../button/button"
import "./header.scss"


function Header() {
    return (
        <header className="header">
            <div className="wrapper">
                <div className="header__content">
                    <Logo/>

                    <div className="nav__menu">

                    </div>

                    <div className="side-buttons">
                        <Button text="My profile"/>
                        <Button text="Leave"/>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;