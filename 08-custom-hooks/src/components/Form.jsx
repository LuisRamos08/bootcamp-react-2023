import {useState} from "react";
import useForm from '../hooks/useForm'

const formStyle = {
  display: "flex",
  flexDirection: "column",
  alignItems: "start",
  gap: "10px",
};
const buttonsStyle = {
  display: "flex",
  width: "100%",
  justifyContent: "space-between",
};

const Form = () => {

    const {formValues, handleChange} = useForm({
        username: '',
        password: '',
        anyText: ''
    })

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(event)
        const { username, password, anyText } = event.target.elements
        const formData = {
            username: username.value,
            password: password.value,
            anyText: anyText.value,
        }
        console.log(formData);
    }


  return (

    <>
        <h2>Form</h2>
        <form 
            style={formStyle}
            onSubmit={handleSubmit}
        >
            <label>Username</label>
            <input 
                type="text" 
                name="username" 
                value={formValues.username}
                onChange={handleChange}
                />

            <label>Password</label>
            <input 
                type="text" 
                name="password" 
                value={formValues.password}
                onChange={handleChange}
                />

            
            <label>Texto</label>
            <input 
                type="text" 
                name="anyText" 
                value={formValues.anyText}
                onChange={handleChange}
                />
            

            <button type="submit">Login</button>

        </form>
{/* 
        <div style={{textAlign: 'left'}}>
            <p>username: {formValues.username}</p>
            <p>password: {formValues.password}</p>
        </div> */}
    
    </>



  );




};

export default Form;
