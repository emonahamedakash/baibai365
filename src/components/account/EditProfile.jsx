import React,{ useState, useEffect} from 'react'
import { BASE_URL } from '../../baseUrl'
import axios from 'axios'
const EditProfile = (props) => {

  const [users, setUserData] = useState([]);
    
  useEffect( () => {
      fetchUserData().then();
  }, []);

  const fetchUserData = async ()=> {
    await axios.get(`${BASE_URL}/oauth/token`, {
        params: {
            "access_token": localStorage.getItem("accessToken")
        }
    }).then((response)=>{
            let temp = [];
            if (response.data.data.content !== undefined) {
                response.data.data.content.forEach((item) => {
                    temp.push(item);
                });
                setUserData(temp);
            }
        });
    }

  return (
    <div>
        <div className="row">
                <h2>Edit Profile</h2><br/>
                <form>
                  <label>{users.username}</label>
                <input 
                  name='username'
                  placeholder={users.username} 
                  type='text' 
                  className='inputField'
                /> 
                <br/><br/>
                <input
                  name='email' 
                  placeholder={users.phone} 
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