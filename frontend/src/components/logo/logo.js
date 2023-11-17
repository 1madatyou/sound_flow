import "./logo.scss"
import { Link } from "react-router-dom";


function Logo() {
    return (
        <Link to={'/home/'} style={{textDecoration: 'none'}}>
            <span className="logo">
                SoundFlow
            </span>
        </Link>
    );
}

export default Logo;