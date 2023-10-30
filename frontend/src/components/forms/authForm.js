import Form from "./base/form"
import Input from "../input/input";


const AuthForm = () => {

    const header = 'Sign in to SoundFlow'

    const formLinks = [
        {'url': '/', 'text': 'Sign up'},
        {'url': '/', 'text': 'Restore Access'},
    ]

    const inputList = [
        <Input
            headerName="email"
            nameAttribute="email"
            typeAttribute="email"/>,
        <Input
            headerName="password"
            nameAttribute="password"
            typeAttribute="password"/>  
    ]

    return (
        <Form header={header}
              inputList={inputList} 
              submitButtonText="Sign in"
              formLinks={formLinks}></Form>
    )

}

export default AuthForm;