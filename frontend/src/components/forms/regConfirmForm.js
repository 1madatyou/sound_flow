import { useState, useContext } from "react";
import Cookies from 'js-cookie';

import Form from "./base/form"
import InputComponent from "../input/input";
import { ModalContext, CSRFContext } from "../../context";

import { API_BASE_URL } from "../../constants";


const RegConfirmForm = () => {

    const {switchModalForm} = useContext(ModalContext);

    const header = 'Confirm registration';
    const [formData, setFormData] = useState({});
    const onInputChange = ({target: {name, value}}) => {
        setFormData({...formData, [name]: value})
    }  

    const [RegConfirmErrors, setRegConfirmErrors] = useState({});

    const inputList = [
        <InputComponent
            headerName="registration code"
            nameAttribute="registration_code"
            typeAttribute="text"
            value={formData.registration_code}/>,
    ]

    const {CSRFToken} = useContext(CSRFContext)
    const handleSubmit = async (e) => {
        e.preventDefault()
        

        const response = await fetch('http://127.0.0.1:8000/api/v1/registration-confirm',
        {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                'X-CSRFToken': CSRFToken,
            },
            body: JSON.stringify(
                {
                    registration_code: e.target.registration_code.value
                }
            ),
            credentials: "include"
        }
    )

        if (response.status === 200) {
            switchModalForm('AuthForm')
        } else {
            const data = await response.json()
            setRegConfirmErrors(Object.entries(data.errors))
            console.log(data)
        }
    }

    return (
        <Form 
            header={header} 
            inputList={inputList} 
            submitButtonText="Sign up"
            onInputChange={onInputChange}

            onSubmit={handleSubmit}

            formErrors={RegConfirmErrors}></Form>
    )

}

export default RegConfirmForm;