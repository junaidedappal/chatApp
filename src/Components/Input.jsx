import React from 'react'
import Cam from "../images/cam.png"
import Add from "../images/add.png"

const Input = () => {
  return (
    <div className='input'>
      <input type="text" placeholder='type something..'/>
      <div className="send">
        <img src={Cam} alt="" />
        <input type="file" style={{display:"none"}}  id="file" />
        <label htmlFor="file">
          <img src={Add} alt="" />
        </label>
        <button>Send</button>
      </div>
    </div>
  )
}

export default Input