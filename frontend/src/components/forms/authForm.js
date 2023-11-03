import {useContext, useState} from "react";

import Form from "./base/form"
import Input from "../input/input";
import AuthContext from "../../utils/context/AuthContext";


const AuthForm = ({setForm}) => {

    const {loginUser} = useContext(AuthContext)


    const header = 'Sign in to SoundFlow'
    const formLinks = [
        {'form': 'RegForm', 'text': 'Sign up'},
        {'form': 'RestoreAccessForm', 'text': 'Restore Access'},
    ]

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const inputList = [
        <Input
            headerName="email"
            nameAttribute="email"
            typeAttribute="email"
            value={email}
            onChange={(e) => setEmail(e.currentTarget.value)}/>,
        <Input
            headerName="password"
            nameAttribute="password"
            typeAttribute="password"
            value={password}
            onChange={(e) => setPassword(e.currentTarget.value)}/>  
    ]

    return (
        <Form header={header}
              inputList={inputList} 
              submitButtonText="Sign in"
              formLinks={formLinks}
              setForm={setForm}
              onSubmit={loginUser}></Form>
    )

}

export default AuthForm;