import React from 'react'
import Add from "../images/icon.png"
const Register = () => {

  const  handleSubmit = (e) =>{
    e.preventDefault()
    const displayName = e.target[0].value;
    const email = e.target[0].value;
    const password = e.target[0].value;
    const file = e.target[0].value;

  } 

  return (
    <div className='formContainer'>
      <div className='formWrapper'>
        <span className="logo">CHAT APP</span>
        <span className="title">register</span>
        <form onSubmit={handleSubmit}>
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