import { useState, useContext } from "react";
import Cookies from 'js-cookie';

import Form from "./base/form"
import InputComponent from "../input/input";
import { ModalContext, CSRFContext } from "../../context";

import { API_BASE_URL } from "../../constants";


const RegConfirmForm = () => {

    const {switchModalForm, switchModalActive} = useContext(ModalContext);

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
        

        const response = await fetch( API_BASE_URL + '/api/v1/registration-confirm',
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

        if (response.status === 201) {
            switchModalForm('AuthForm')
        } else if (response.status === 409) {
            switchModalActive(false)
        } else if (response.status === 401) {
            console.log(401)
            setRegConfirmErrors(
                Object.entries({'common': 'incorrect code'})
            )
            console.log(Object.entries({'common': 'incorrect code'}))
        } else if (response.status === 400) {
            switchModalActive(false)
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