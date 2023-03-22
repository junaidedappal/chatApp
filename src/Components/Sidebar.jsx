import React from 'react'
import Navbar from '../Components/Navbar'
import Search from '../Components/Search'
import Chats from '../Components/Chats'

const Sidebar = () => {
  return (
   
    <div className='sidebar'>
       <Navbar/>
       <Search/>
       <Chats/>
    
      </div>
  )
}

export default Sidebar