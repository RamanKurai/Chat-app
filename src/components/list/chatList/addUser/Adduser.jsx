import React from 'react'

const Adduser = () => {
  return (
    <div className='w-max h-max p-7 bg-[#111928C7] rounded-lg absolute top-0 bottom-0 left-0 right-0 m-auto'>
      <form className='flex gap-5'>
        <input className='p-4 rounded-[10px] border-none outline-none' type="text" placeholder='Username' name='Username' />
        <button className='p-5 rounded-[10px] bg-[#1a73e8] text-white border-none cursor-pointer'>Search</button>
      </form>
      <div className='mt-12 flex items-center align-center justify-between'>
      <div className="flex items-center gap-5">
        <img className='w-12 h-12 rounded-[50%] object-cover' src="./avatar.png" alt="" />
        <span className=''>Username</span>
      </div>
      <button className='p-2 rounded-[10px] bg-[#1a73e8] text-white border-none cursor-pointer'>Add User</button>
      </div>
    </div>
  )
}

export default Adduser
