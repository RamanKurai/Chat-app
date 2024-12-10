import React, { useEffect, useState } from "react";
import Adduser from "./addUser/addUser";
import { useUserStore } from "../../../lib/userStore";
import { doc, onSnapshot } from "firebase/firestore";
import { db } from "../../../lib/firebase";
const Chatlist = () => {
  const [chats , setChats] = useState([])
  const [add , setAdd] = useState(false)
  
  const {currentUser} = useUserStore()

  useEffect(()=>{
     const unSub = onSnapshot(doc(db , "userchats" , currentUser.id), (doc)=>{
    setChats(doc.data())
     })
    return ()=>{
      unSub();
    }
  },[currentUser.id])
  console.log(chats)
  return (
    // chatlist container
    <div className="flex-1 overflow-auto"> 
    {/* search, input , add user */}
      <div className="flex items-center gap-5 p-5 ">
        <div className=" flex flex-1 bg-[#11192880] items-center gap-3 rounded-[10px] p-[10px]">
          <img className="w-5 h-5" src="./search.png" alt="" />
          <input className="bg-transparent border-none outline-none color-white flex-1" type="text" placeholder="search" />
        </div>
        <img className="w-9 h-9 bg-[#11192880] p-[10px] rounded-[10px] cursor-pointer" src= { add ? "./minus.png":"./plus.png"} 
        onClick={ () => setAdd((prev)=>!prev)}
        alt="" />
      </div>
      {/* items == users chats*/}
      <div className="flex items-center gap-5 p-5 cursor-pointer border-b-[1px] border-[#dddddd35]">
        <img className="w-[50px] h-[50px] rounded-[50%] object-cover" src="./avatar.png" alt="" />
        <div className="flex flex-col gap-[10px]">
          <span className="font-medium">
            Yug
          </span>
          <p className="text-sm font-light">
            hello
          </p>
        </div>
      </div>
      <div className="flex items-center gap-5 p-5 cursor-pointer border-b-[1px] border-[#dddddd35]">
        <img className="w-[50px] h-[50px] rounded-[50%] object-cover" src="./avatar.png" alt="" />
        <div className="flex flex-col gap-[10px]">
          <span className="font-medium">
            Yug
          </span>
          <p className="text-sm font-light">
            hello
          </p>
        </div>
      </div>
      <div className="flex items-center gap-5 p-5 cursor-pointer border-b-[1px] border-[#dddddd35]">
        <img className="w-[50px] h-[50px] rounded-[50%] object-cover" src="./avatar.png" alt="" />
        <div className="flex flex-col gap-[10px]">
          <span className="font-medium">
            Yug
          </span>
          <p className="text-sm font-light">
            hello
          </p>
        </div>
      </div>
      <div className="flex items-center gap-5 p-5 cursor-pointer border-b-[1px] border-[#dddddd35]">
        <img className="w-[50px] h-[50px] rounded-[50%] object-cover" src="./avatar.png" alt="" />
        <div className="flex flex-col gap-[10px]">
          <span className="font-medium">
            Yug
          </span>
          <p className="text-sm font-light">
            hello
          </p>
        </div>
      </div>
      <div className="flex items-center gap-5 p-5 cursor-pointer border-b-[1px] border-[#dddddd35]">
        <img className="w-[50px] h-[50px] rounded-[50%] object-cover" src="./avatar.png" alt="" />
        <div className="flex flex-col gap-[10px]">
          <span className="font-medium">
            Yug
          </span>
          <p className="text-sm font-light">
            hello
          </p>
        </div>
      </div>
      {add && <Adduser/>}
    </div>
  );
};

export default Chatlist;
