import Form from "./base/form"
import Input from "../input/input";


const AuthForm = ({setForm}) => {

    const header = 'Sign in to SoundFlow'

    const formLinks = [
        {'form': 'RegForm', 'text': 'Sign up'},
        {'form': 'RestoreAccessForm', 'text': 'Restore Access'},
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
              formLinks={formLinks}
              setForm={setForm}></Form>
    )

}

export default AuthForm;