import Form from "./base/form"
import Input from "../input/input";


const RegForm = () => {

    const header = 'Sign up to SoundFlow'

    const formLinks = [
        {'url': '/', 'text': 'Sign in'},
        {'url': '/', 'text': 'Restore Access'},
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
            header_action="Repeat"
            nameAttribute="password_repeat"
            typeAttribute="password"/>  
    ]

    return (
        <Form 
            header={header} 
            inputList={inputList} 
            submitButtonText="Sign up"
            formLinks={formLinks}></Form>
    )

}

export default RegForm;