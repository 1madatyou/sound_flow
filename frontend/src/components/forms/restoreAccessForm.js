import Form from "./base/form"
import Input from "../input/input";


const RestoreAccessForm = () => {

    const header = 'Sign up to SoundFlow'

    const formLinks = [
        {'url': '/', 'text': 'Sign in'},
        {'url': '/', 'text': 'Sign up'},
    ]

    const inputList = [
        <Input
            headerName="email"
            nameAttribute="email"
            typeAttribute="email"/>,
    ]

    return (
        <Form 
            header={header} 
            inputList={inputList} 
            submitButtonText="Send mail"
            formLinks={formLinks}></Form>
    )

}

export default RestoreAccessForm;