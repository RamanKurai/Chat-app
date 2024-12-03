import React from 'react'
import Chatlist from './chatList/Chatlist'
import Userinfo from './userInfo/userInfo'
const List = () => {
  return (
    <div className=' flex flex-1 flex-col'>
      <Userinfo/>
      <Chatlist/>
    </div>
  )
}

export default List
