import Form from "./base/form"
import Input from "../input/input";


const AuthForm = () => {

    const header = 'Sign in to SoundFlow'

    const inputList = [
        <Input
            name="email"
            name_attribute="email"
            type_attribute="email"/>,
        <Input
            name="password"
            name_attribute="password"
            type_attribute="password"/>  
    ]

    return (
        <Form header={header} inputList={inputList}></Form>
    )

}

export default AuthForm;