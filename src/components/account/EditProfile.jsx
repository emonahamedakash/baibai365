import React from 'react'
const EditProfile = (props) => {
  return (
    <div>
        <div className="row">
                <h2>Edit Profile</h2><br/>
                <form>
                <input 
                  name='username'
                  placeholder={props.username} 
                  type='text' 
                  className='inputField'
                /> 
                <br/><br/>
                <input
                  name='phone' 
                  placeholder={props.phone} 
                  type='tel' 
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