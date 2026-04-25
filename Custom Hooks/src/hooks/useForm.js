import { useState } from "react"

export default function useForm(initialValue = {}, callback) {
    const [values, setValue] = useState(initialValue);

    //Handle on change 
    const handleOnChange = (e) => {
        const { name, value } = e.target;
        setValue((prev) => ({
            ...prev,
            [name]: value
        }))
    }

    //Handle on submit 
    const handleOnSubmit = (e) => {
        e.preventDefault();
        if (callback) callback(values);
    }

    //Hanlde form reset
    const handleFormReset = () => setValue(initialValue);

    return { values, handleOnChange, handleOnSubmit, handleFormReset }

}
