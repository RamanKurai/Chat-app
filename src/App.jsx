import './App.css'
import Chat from './components/chat/Chat'
import List from './components/list/List'
import Detail from './components/detail/Detail'
import React from 'react'

const App = () => {
  return (
    <div className='container'>
      <List/>
      <Chat/>
      <Detail/>
    </div>
  )
}

export default App
