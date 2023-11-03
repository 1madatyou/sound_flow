import { useContext } from "react";
import { Navigate } from "react-router-dom";
import AuthContext from './context/AuthContext'


const PrivateRoute = ({ component, ...rest }) => {
    
    const {user} = useContext(AuthContext)

    return user ? component : <Navigate to="/home"/>;

}

export default PrivateRoute;