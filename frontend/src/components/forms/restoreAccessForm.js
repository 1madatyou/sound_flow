import Form from "./base/form"
import InputComponent from "../input/input";


const RestoreAccessForm = ({setForm}) => {

    const header = 'Restore access'

    const formLinks = [
        {'form': 'AuthForm', 'text': 'Sign in'},
        {'form': 'RegForm', 'text': 'Sign up'},
    ]

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
            setForm={setForm}></Form>
    )

}

export default RestoreAccessForm;