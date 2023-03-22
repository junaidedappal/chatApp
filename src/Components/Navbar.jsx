import React from 'react'

const Navbar = () => {
  return (
    <div className='navbar'>
      <span className="logo">Chat App</span>
      <div className="user">
        <img src="https://helostatus.com/wp-content/uploads/2021/08/profile-pictures-for-WhatsApp-1024x1024.jpg?is-pending-load=1" alt="" />
        <span>
          Junaid
        </span>
        <button>Logout</button>
      </div>
    </div>
  )
}

export default Navbar