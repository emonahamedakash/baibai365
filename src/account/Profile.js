import React from 'react'
import './Profile.css'

export const Account = () => {
  return (
    <div>
        <div className='row'>
            <div className='col-3 profile'>
                <h3>Hello, Akash</h3>
                <ul>
                    <li>
                        <a href='#'>Edit Profile</a>
                    </li>
                    <li>
                        <a href='#'>Payment History</a>
                    </li>
                    <li>
                        <a href='#'>Wallet</a>
                    </li>
                </ul>
            </div>
            <div className='col-12'>
                
            </div>
        </div>
    </div>
  )
}
export default Account;