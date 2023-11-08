import Logo from "../logo/logo";
import Button from "../button/button"
import "./header.scss"
import { useContext } from "react";
import AuthContext from "../../context/AuthContext";
import ModalContext from "../../context/ModalContext";


function Header() {

    const {user, logoutUser} = useContext(AuthContext)
    const {switchModalActive} = useContext(ModalContext)

    const sideButtons = user ? (<> <Button text="My profile"/> <Button text="Leave" onClick={logoutUser}/> </>) : <Button text="Sign in" onClick={() => switchModalActive(true, "AuthForm")}/>;

    return (
        <header className="header">
            <div className="wrapper">
                <div className="header__content">
                    <Logo/>

                    <div className="nav__menu">

                    </div>

                    <div className="side-buttons">
                        {sideButtons}
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;