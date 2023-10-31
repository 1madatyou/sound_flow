import {useState} from "react";

import Form from "./base/form"
import Input from "../input/input";


const AuthForm = ({setForm}) => {

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

    // const handleSubmit = async (e) => {
    //     e.preventDefault();

    //     try {

    //         const response = await axios.post("/api/login")

    //     } catch (e) {

    //     }
    // }

    return (
        <Form header={header}
              inputList={inputList} 
              submitButtonText="Sign in"
              formLinks={formLinks}
              setForm={setForm}></Form>
    )

}

export default AuthForm;