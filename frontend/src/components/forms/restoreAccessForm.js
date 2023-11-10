import { useState } from "react";

import Form from "./base/form"
import InputComponent from "../input/input";


const RestoreAccessForm = () => {

    const header = 'Restore access'

    const formLinks = [
        {'form': 'AuthForm', 'text': 'Sign in'},
        {'form': 'RegForm', 'text': 'Sign up'},
    ]

    const [formData, setFormData] = useState({});
    const onInputChange = ({target: {name, value}}) => {
        setFormData({...formData, [name]: value})
    }
    const [formErrors, setFormErrors] = useState({});

    const inputList = [
        <InputComponent
            headerName="email"
            nameAttribute="email"
            typeAttribute="email"/>,
    ]

    return (
        <Form 
            header={header} 
            inputList={inputList} 
            submitButtonText="Send mail"
            formLinks={formLinks}
            onInputChange={onInputChange}
            
            formErrors={formErrors}></Form>
    )

}

export default RestoreAccessForm;