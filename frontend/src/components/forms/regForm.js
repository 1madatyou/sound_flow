import Form from "./base/form"
import Input from "../input/input";


const RegForm = ({setForm}) => {

    const header = 'Sign up to SoundFlow'

    const formLinks = [
        {'form': 'AuthForm', 'text': 'Sign in'},
        {'form': 'RestoreAccessForm', 'text': 'Restore Access'},
    ]

    const inputList = [
        <Input
            headerName="username"
            nameAttribute="username"
            typeAttribute="text"/>,
        <Input
            headerName="email"
            nameAttribute="email"
            typeAttribute="email"/>,
        <Input
            headerName="password"
            nameAttribute="password"
            typeAttribute="password"/>,
        <Input
            headerName="password"
            headerAction="Repeat"
            nameAttribute="password_repeat"
            typeAttribute="password"/>  
    ]

    return (
        <Form 
            header={header} 
            inputList={inputList} 
            submitButtonText="Sign up"
            formLinks={formLinks}
            setForm={setForm}></Form>
    )

}

export default RegForm;