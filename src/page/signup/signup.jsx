
import React from 'react'
;
import '../../styles/signup.scss'
import Checkbox from '@mui/material/Checkbox';
export default function Signup() {
  return (
      <div className='login-container'>
          <div className='login-bg-image'>
              <div>

              </div>
          </div>
          <div className='login-box'>
              <div className='login-box-headeText'>Create Account</div>
              <div className='login-box-buildText'> Build an exceptional business</div>

              <div className='login-input-container'>
                  <div className='login-input-container-input1'>
                      <label htmlFor="">First Name</label>
                      <input type="text" name="" id="" placeholder='Enter your first name'/>
                  </div>
                  <div className='login-input-container-input2'>
                      <label htmlFor="">Last Name</label>
                      <input type="text" name="" id="" placeholder='Enter your last name'/>
                  </div>
                  
              </div>
              <div className='login-input-container-input3'>
                  <label htmlFor="">Phone Number</label>
                  <input type="text" name="" id="" placeholder='Enter your phone number'/>
              </div>
              <div className='login-input-container-input3'>
                  <label htmlFor="">Email Address</label>
                  <input type="text" name="" id="" placeholder='Enter your email'/>
              </div>
              <div className='login-input-container-input3'>
                  <label htmlFor="">Password</label>
                  <input type="text" name="" id="" placeholder='Enter your password'/>
              </div>
              <div className='login-forgot-section'>
                  <div className='login-forgot-section-check'>
                      <Checkbox sx={{ width: '10px', marginRight: 1, background: '#EBEBEB', borderRadius:'10px' }} />
                      <div>Remember me</div>
                  </div>
                  <div className='login-forgot'>
                      Forgot Password?
                  </div>

              </div>
              <button className='login-button-submit'>Sign Up</button>
<div className='login-end'>
                  Got an Account?  <span> Sign In</span>
</div>
          </div>
      </div>
  )
}
