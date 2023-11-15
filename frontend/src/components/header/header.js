import Logo from "../logo/logo";
import Button from "../button/button"
import "./header.scss"
import { useContext } from "react";
import AuthContext from "../../context/AuthContext";
import ModalContext from "../../context/ModalContext";
import { useNavigate } from "react-router-dom";


function Header() {

    const navigate = useNavigate()

    const {user, logoutUser} = useContext(AuthContext)
    const {switchModalActive} = useContext(ModalContext)

    const userId = user.user_id

    const sideButtons = user ? (<> <Button text="My profile" onClick={() => navigate(`/users/${userId}`)}/> <Button text="Leave" onClick={logoutUser}/> </>) : <Button text="Sign in" onClick={() => switchModalActive(true, "AuthForm")}/>;

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