import { useContext, useState } from "react";
import Form from "./base/form"
import InputComponent from "../input/input";
import ModalContext from "../../context/ModalContext"

import { API_BASE_URL } from "../../constants";


const RegForm = ({setForm}) => {

    const {switchModalForm} = useContext(ModalContext);
    const [regErrors, setRegErrors] = useState({});

    const header = 'Sign up to SoundFlow'

    const formLinks = [
        {'form': 'AuthForm', 'text': 'Sign in'},
        {'form': 'RestoreAccessForm', 'text': 'Restore Access'},
    ]

    const [formData, setFormData] = useState({});
    
    const onInputChange = ({target: {name, value}}) => {
        setFormData({...formData, [name]: value})
    }

    const handleSubmit = async (e) => {
        e.preventDefault()

        const response = await fetch(API_BASE_URL + '/api/v1/registration',
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(
                    {
                        username: e.target.username.value,
                        email: e.target.email.value,
                        password: e.target.password.value
                    }
                )
            }
        )

        

        if (response.status === 200) {
            switchModalForm("RegConfirmForm")
        } else {
            const data = await response.json()
            console.log(data)
            setRegErrors(Object.entries(data.errors))
            console.log(regErrors)
        }

    }

    const inputList = [
        <InputComponent
            headerName="username"
            nameAttribute="username"
            typeAttribute="text"
            value={formData.username}/>,
        <InputComponent
            headerName="email"
            nameAttribute="email"
            typeAttribute="email"
            value={formData.email}/>,
        <InputComponent
            headerName="password"
            nameAttribute="password"
            typeAttribute="password"
            value={formData.password}/>,
        <InputComponent
            headerName="password"
            headerAction="Repeat"
            nameAttribute="password_confirm"
            typeAttribute="password"
            value={formData.password_confirm}/>  
    ]

    return (
        <Form 
            header={header} 
            inputList={inputList} 
            submitButtonText="Sign up"
            formLinks={formLinks}
            setForm={setForm}
            onSubmit={handleSubmit}
            onInputChange={onInputChange}
            
            formErrors={regErrors}></Form>
    )

}

export default RegForm;