import React from 'react'

const Navbar = () => {
  return (
    <div className='navbar'>
      <span className="logo">Chat App</span>
      <div className="user">
        <img src="https://images.pexels.com/photos/2918513/pexels-photo-2918513.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
        <span>
          Junaid
        </span>
        <button>Logout</button>
      </div>
    </div>
  )
}

export default Navbar