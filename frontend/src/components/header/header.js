import Logo from "../logo/logo";
import Button from "../button/button"
import "./header.scss"
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import AuthContext from "../../context/AuthContext";
import ModalContext from "../../context/ModalContext";


function Header() {

    const navigate = useNavigate()

    const {user, logoutUser} = useContext(AuthContext)
    const {switchModalActive} = useContext(ModalContext)

    const userId = user && user.user_id

    const sideButtons = user ? 
    (   
        <> 
            <Button onClick={() => navigate(`/users/${userId}`)}> My profile</Button> 
            <Button onClick={logoutUser}>Leave</Button> 
        </>
    ) 
    : 
        <Button onClick={() => switchModalActive("AuthForm")}>Sign in</Button>;

        
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