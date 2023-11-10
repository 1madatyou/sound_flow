import { useState } from "react";

import Form from "./base/form"
import InputComponent from "../input/input";


const RegConfirmForm = () => {

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

    return (
        <Form 
            header={header} 
            inputList={inputList} 
            submitButtonText="Sign up"
            onInputChange={onInputChange}

            formErrors={RegConfirmErrors}></Form>
    )

}

export default RegConfirmForm;