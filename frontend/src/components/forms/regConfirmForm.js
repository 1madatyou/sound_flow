import Form from "./base/form"
import InputComponent from "../input/input";


const RegConfirmForm = ({setForm}) => {

    const header = 'Confirm registration'

    const inputList = [
        <InputComponent
            headerName="registration code"
            nameAttribute="registration_code"
            typeAttribute="text"/>,
    ]

    return (
        <Form 
            header={header} 
            inputList={inputList} 
            submitButtonText="Sign up"
            setForm={setForm}></Form>
    )

}

export default RegConfirmForm;