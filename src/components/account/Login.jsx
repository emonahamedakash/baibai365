import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import './Login.css'
import Navbar from '../home/header/Navbar';
import { useAuth } from '../../context/AuthContext';

 function Login() {
  const initialValues = { username: "", password: ""};
  const [formValues, setFormValues]= useState(initialValues);
  const [formErrors, setFormErrors]= useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  const {signIn} = useAuth();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({...formValues, [name]: value});
    console.log(formValues);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmit(true);
    signIn(formValues.username, formValues.password).then((response) => {
      console.log(response)
    }).catch((error) =>{
      console.log(error)
    })
  }

  useEffect(() => {
    console.log(formErrors);
    if(Object.keys(formErrors).length === 0 && isSubmit){
      console.log(formValues);
    }
  },[formErrors])
  const validate = (values) => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if(!values.username) {
      errors.username="UserName is Required!";
    }
    if(!values.password) {
      errors.username="Password is Required!";
    }else if(values.password < 8){
      errors.password = "Minimum password length 8 characters!";
    }
    return errors;
  }

  return (
    <div>
      <Navbar/>
      <div className='loginPage'>
        {/* {Object.keys(formErrors).length === 0 && isSubmit ? (
          <div className='alert alert-success' role='alert'>"Logged in successfully"</div>
        ) : (<pre>{JSON.stringify(formValues, undefined, 2)}</pre>)} */}
        
        <div className='row justify-content-center'>
            <div className='col-md-5'>
                <h2>Login</h2><br/>
                <form onSubmit={handleSubmit}>
                <input 
                  name='username' 
                  value={ formValues.username} 
                  onChange={handleChange} 
                  placeholder='Username or email' 
                  type="text" 
                  className='inputField'
                /> 
                <p>{formErrors.username}</p>
                  <br/><br/>
                <input 
                  name='password' 
                  value={ formValues.password} 
                  onChange={handleChange} 
                  placeholder='Password' 
                  type="password" 
                  className='inputField'
                /> 
                <br/><br/>
                <p>{formErrors.password}</p>
                
                <input type='submit' className='btn btn-warning w-50'/>
                </form>
                <br/>
                <br/>
                <p>Don't have an account yet?<Link to="/register">Sign up now</Link></p> 
            </div>
            
        </div>
    </div>
    </div>
    
  )
}

export default Login;