import {useContext, useState} from "react";

import Form from "./base/form"
import InputComponent from "../input/input";
import AuthContext from "../../context/AuthContext";


const AuthForm = ({setForm}) => {

    const { loginUser, loginErrors } = useContext(AuthContext)
    const [ formData, setFormData ] = useState({});

    const header = 'Sign in to SoundFlow'
    const formLinks = [
        {'form': 'RegForm', 'text': 'Sign up'},
        {'form': 'RestoreAccessForm', 'text': 'Restore Access'},
    ]
    
    const onInputChange = ({target: {name, value}}) => {
        setFormData({...formData, [name]: value})
    }

    const inputList = [
        <InputComponent
            headerName="email"
            nameAttribute="email"
            typeAttribute="email"
            value={formData.email}/>,
        <InputComponent
            headerName="password"
            nameAttribute="password"
            typeAttribute="password"
            value={formData.password}/>  
    ]

    return (
        <Form header={header}
              inputList={inputList} 
              submitButtonText="Sign in"
              formLinks={formLinks}
              setForm={setForm}
              onSubmit={loginUser}
              onInputChange={onInputChange}
              formErrors={loginErrors}></Form>
    )

}

export default AuthForm;