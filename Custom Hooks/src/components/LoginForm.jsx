import useForm from "../hooks/useForm"

const LoginForm = () => {
    const initialValue = {
        email: "",
        password: ""
    }
    const onSubmit = (values) => {
     console.log("Form Submitted: ", values);
    }
    const {
        values,
        handleOnChange,
        handleOnSubmit,
        handleFormReset
    } = useForm(initialValue, onSubmit);

    return (
        <div>
            <h1>Login</h1>
            <form onSubmit={handleOnSubmit}>
                <label htmlFor="email">Email: </label>  <br/> <br/>
                <input type="text" name="email" value={values.email} placeholder="Email.." onChange={handleOnChange} />
                <br /> <br />
                <label htmlFor="password">Password: </label>  <br/> <br/>
                <input type="password" name="password" value={values.password} placeholder="Password..." onChange={handleOnChange} />
                <br/> <br/>
                <button type="submit">Submit</button>
                <button onClick={handleFormReset}>Reset</button>
            </form>
        </div>
    )
}

export default LoginForm