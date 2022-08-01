import React,{ useState, useEffect} from 'react'
import { BASE_URL } from '../../baseUrl'
import axios from 'axios'
import { useAuth } from '../../context/AuthContext';
const EditProfile = (props) => {
  const { currentUser } = useAuth();

  return (
    <div>
        <div className="row">
                <h2>Edit Profile</h2><br/>
                <p style={{color:"green",wordSpacing:"10px"}}>Hello, <strong>{currentUser.firstName}👋</strong></p>
                <form>
                <input 
                  name='username'
                  placeholder={currentUser.username} 
                  type='text' 
                  className='inputField'
                /> 
                <br/><br/>
                <input
                  name='email' 
                  placeholder={currentUser.email} 
                  type='email' 
                  className='inputField'
                /> 
                <br/><br/>
                <input 
                  name='opassword'
                  placeholder= "Old password"
                  type='password' 
                  className='inputField'
                /> 
                <br/><br/>
                <input 
                  name='npassword'
                  placeholder='New password'
                  type='password' 
                  className='inputField'
                /> 
                <br/><br/>
                <input 
                  name='cpassword'
                  placeholder='Confirm Password' 
                  type='password' 
                  className='inputField'
                /> 
                <br/><br/>
                <input 
                  type='submit'
                  className='btn btn-warning' 
                />
                </form>

        </div>
    </div>
  )
}

export default EditProfile