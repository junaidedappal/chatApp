import React from 'react'
import Add from "../images/icon.png"
const Register = () => {
  return (
    <div className='formContainer'>
      <div className='formWrapper'>
        <span className="logo">CHAT APP</span>
        <span className="title">register</span>
        <form>
          <input type="text" placeholder='display name' />
          <input type="email" placeholder='email'/>
          <input type="password" name="" id="" placeholder='password' />
          <input style={{display:"none"}} type="file" id="file" />
          <label htmlFor="file">
            <img src={Add} alt="" /><span>Add an avatar</span>
          </label>
          <button>Sign up</button>
        </form>
        <p>you do have an account? login</p>
      
      </div>
    </div>
  )
}

export default Register