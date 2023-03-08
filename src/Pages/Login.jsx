import React from 'react'

const Login = () => {
  return (
    <div className='formContainer'>
    <div className='formWrapper'>
      <span className="logo">CHAT APP</span>
      <span className="title">LOGIN</span>
      <form>
        <input type="email" placeholder='email'/>
        <input type="password" name="" id="" placeholder='password' />
      
        <button>Sign in</button>
      </form>
      <p>you don't have an account? Register</p>
    
    </div>
  </div>
  )
}

export default Login