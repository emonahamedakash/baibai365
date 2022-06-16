import React from 'react'
import './Login.css'

export default function Login() {
  return (
    <div className='loginPage'>
        <div className='row justify-content-center'>
            <div className='col-md-5 login'>
                <h2>Login</h2><br/>
                <input placeholder='Username or email' type="text" className='inputField'/> <br/><br/>
                <input placeholder='Password' type="password" className='inputField'/> <br/><br/>
                <p className='rememberMe'>Remeber me</p>
                <input type="checkbox" className='form-check-input'/><br/>
                <button className='btn btn-warning w-50 p-2'>Log in</button> 
            </div>
            <div className='col-md-5 register'>
                <h2>Register</h2><br/>
                <input placeholder='Username' type='text' className='inputField'/> <br/><br/>
                <input placeholder='Email' type='email' className='inputField'/> <br/><br/>
                <input placeholder='Phone' type='tel' className='inputField'/> <br/><br/>
                <input placeholder='Password' type='password' className='inputField'/> <br/><br/>
                <p className='rememberMe'>Accept <a href='#'>Terms & Condition</a></p>
                <input type="checkbox" className='form-check-input'/> <br/>
                <button className='btn btn-warning w-50 p-2'>Register</button> 
            </div>
        </div>
    </div>
  )
}
