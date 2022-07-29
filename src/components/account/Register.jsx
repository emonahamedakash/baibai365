import React, { createContext, useContext, useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import './Register.css'
import Navbar from '../home/header/Navbar'
import axios from 'axios'
import { BASE_URL } from '../../baseUrl'

const Register = () => {

  const initialValues = { username: "", email: "", firstName: "", lastName: "", password: "", cpassword: "", roleId: 3};
  const [formValues, setFormValues]= useState(initialValues);
  const [formErrors, setFormErrors]= useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({...formValues, [name]: value});
    console.log(formValues);
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
          const response = await axios.post(`${BASE_URL}/api/v1/user/register`, JSON.stringify(formValues, undefined, 5),
          {
            headers: { 'Content-Type': 'application/json'},
            withCredentials: false
          }
          );
          console.log(response.data);
          console.log(response.accessToken);
          console.log(JSON.stringify(response))
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
    }else if(values.password !== values.cpassword){
      errors.cpassword = "Password not Matched!";
    }
    return errors;


  }

  return (
    <div>
      <Navbar/>
        <div className='registerPage'>
        <div className="row justify-content-center">
            <div className='col-md-5'>
                <h2>Register</h2><br/>
                <form onSubmit={handleSubmit}>
                <input 
                  name='firstName'
                  value={ formValues.firstName} 
                  onChange={handleChange} 
                  placeholder='First name' 
                  type='text' 
                  className='inputField'
                />
                <br/><br/> 
                <input 
                  name='lastName'
                  value={ formValues.lastName} 
                  onChange={handleChange} 
                  placeholder='Last name' 
                  type='text' 
                  className='inputField'
                /> 
                <br/><br/>
                <input 
                  name='username'
                  value={ formValues.username} 
                  onChange={handleChange} 
                  placeholder='Username' 
                  type='text' 
                  className='inputField'
                /> 
                <br/><br/>
                <input
                  name='email' 
                  value={ formValues.email} 
                  onChange={handleChange} 
                  placeholder='Email' 
                  type='email' 
                  className='inputField'
                /> 
                <br/><br/>
                <input 
                  name='password'
                  value={ formValues.password} 
                  onChange={handleChange} 
                  placeholder='Password' 
                  type='password' 
                  className='inputField'
                /> 
                <br/><br/>
                <input 
                  name='cpassword'
                  value={ formValues.cpassword} 
                  onChange={handleChange} 
                  placeholder='Confirm Password' 
                  type='password' 
                  className='inputField'
                /> 
                <br/><br/>
                <p className='rememberMe'>
                  Accept <Link to='/terms'>Terms & Condition</Link>
                  </p>
                <input 
                  type="checkbox" 
                  className='form-check-input'
                /> 
                <br/>
                <input 
                  type='submit'
                  className='btn btn-warning w-50 p-2' 
                />
                </form>
                <br/>
                <br/>
                <p>Already have an account?<Link to="/login">Login here</Link></p>
            </div>
        </div>
    </div>
    </div>
  )
}

export default Register