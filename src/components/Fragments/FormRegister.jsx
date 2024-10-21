import Button from "../Elements/Button";
import InputForm from "../Elements/Input";


const FormRegister = () => {
    return (
        <form action="">
            <InputForm label="Name" type="text" placeholder="insert your name..." name="name" />
            <InputForm label="Email" type="email" placeholder="example@gmail.com" name="email" />
            <InputForm label="Password" type="password" placeholder="insert your password..." name="password" />
            <InputForm label="Confirm Password" type="password" placeholder="insert your password..." name="confirmPassword" />
            <Button classname="bg-blue-600 w-full">
                Register
            </Button>
        </form>
    )
}

export default FormRegister;