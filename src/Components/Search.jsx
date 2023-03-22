import React from 'react'

const Search = () => {
  return (
    <div className='search'>
      <div className="searchForm">
        <input type="text" placeholder='find a user'/>
      </div>
      <div className="userChat">
        <img src="https://helostatus.com/wp-content/uploads/2021/08/profile-pictures-for-WhatsApp-1024x1024.jpg?is-pending-load=1" alt="" />
        <div className="userchatInfo">
          <span>Junaid</span>
        </div>
      </div>



    </div>
  )
}

export default Search