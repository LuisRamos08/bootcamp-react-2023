import {useState} from 'react'

const useForm = (initialState={}) => {
    const [formValues, setFormValues] = useState(initialState)


    const handleChange = (event)=> {
        const {name, value}= event.target;
        const newValues = {
            ...formValues,
            [name]: value
        }
        console.log(newValues);
        setFormValues(newValues)
    }
  return {
    formValues,
    handleChange
  }
}

export default useForm