import EmojiPicker, { Emoji } from "emoji-picker-react";
import React, { useEffect, useRef, useState } from "react";

const Chat = () => {
  const [emojiopen, setEmojiopen] = useState(false);
  const [text, setText] = useState("");

  const endRef = useRef(null)

  useEffect(()=>{
     endRef.current?.scrollIntoView ({behaviour:"smooth"})
  },[])

  const handleEmoji = (e) => {
    setText((prev) => prev + e.emoji);
    setEmojiopen(false);
  };
  return (
    <div className=" flex flex-[2_2_0%] border-l-[1px] border-r-[1px] border-[#dddddd35] h-full flex-col ">
      {/* HEADER userinformation , icons */}
      <div className="flex items-center justify-between p-5 border-b-[1px] border-[#dddddd35] ">
        {/* userinfo */}
        <div className="flex items-center gap-5">
          <img
            className="w-[60px] h-[60px] rounded-[50%] object-cover"
            src="./avatar.png"
            alt=""
          />
          {/* username and statusdiscription (texts)*/}
          <div className="flex flex-col gap-1">
            <span className="font-bold text-lg">user name</span>
            <p className="font-light text-sm text-[#a5a5a5]">
              discription status
            </p>
          </div>
        </div>
        {/* icons */}
        <div className="flex gap-5">
          <img className="w-5 h-5" src="./phone.png" alt="" />
          <img className="w-5 h-5" src="./video.png" alt="" />
          <img className="w-5 h-5" src="./info.png" alt="" />
        </div>
      </div>
      {/* center , messages , own messages*/}
      {/* main center div */}
      <div className="p-5 overflow-auto flex-1 flex flex-col gap-5 ">
        {/* message from user */}
        <div className="max-w-[70%] flex gap-5 ">
          <img
            className="w-7 h-7 rounded-[50%] object-cover "
            src="./avatar.png"
            alt=""
          />
          <div className="flex flex-1 flex-col gap-3">
            <p className="p-5 bg-[#1119284D] rounded-lg">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Consectetur quaerat quam nesciunt doloribus molestiae modi eos
              esse blanditiis dolorum? Voluptate.
            </p>
            <span className="text-xs">1 min ago</span>
          </div>
        </div>
        {/* own message */}
        <div className="w-full flex justify-end">
          <div className="max-w-[70%] flex flex-col gap-3 items-end">
            <p className="p-5 bg-[#5183fe] text-white rounded-lg">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Consectetur quaerat quam nesciunt doloribus molestiae modi eos
              esse blanditiis dolorum? Voluptate.
            </p>
            <span className="text-xs text-right">1 min ago</span>
          </div>
        </div>
        {/* message from user */}
        <div className="max-w-[70%] flex gap-5">
          <img
            className="w-7 h-7 rounded-[50%] object-cover "
            src="./avatar.png"
            alt=""
          />
          <div className="flex flex-1 flex-col gap-3">
            <p className="p-5 bg-[#1119284D] rounded-lg">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Consectetur quaerat quam nesciunt doloribus molestiae modi eos
              esse blanditiis dolorum? Voluptate.
            </p>
            <span className="text-xs">1 min ago</span>
          </div>
        </div>
        {/* own message */}
        <div className="w-full flex justify-end">
          <div className="max-w-[70%] flex flex-col gap-3 items-end">
            <p className="p-5 bg-[#5183fe] text-white rounded-lg">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Consectetur quaerat quam nesciunt doloribus molestiae modi eos
              esse blanditiis dolorum? Voluptate.
            </p>
            <span className="text-xs text-right">1 min ago</span>
          </div>
        </div>
        {/* message from user */}
        <div className="max-w-[70%] flex gap-5">
          <img
            className="w-7 h-7 rounded-[50%] object-cover "
            src="./avatar.png"
            alt=""
          />
          <div className="flex flex-1 flex-col gap-3">
            <p className="p-5 bg-[#1119284D] rounded-lg">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Consectetur quaerat quam nesciunt doloribus molestiae modi eos
              esse blanditiis dolorum? Voluptate.
            </p>
            <span className="text-xs">1 min ago</span>
          </div>
        </div>
        {/* own message */}
        <div className="w-full flex justify-end">
          <div className="max-w-[70%] flex flex-col gap-3 items-end">
            <img className='w-full h-72 rounded-[10px] object-cover'src="https://picsum.photos/seed/picsum/200/300" alt="" />
            <p className="p-5 bg-[#5183fe] text-white rounded-lg">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Consectetur quaerat quam nesciunt doloribus molestiae modi eos
              esse blanditiis dolorum? Voluptate.
            </p>
            <span className="text-xs text-right">1 min ago</span>
          </div>
        </div>
        <div ref={endRef}></div>
      </div>
      {/* footer , rightside-icons , imput , emoji picker and send button */}
      <div className="flex items-center justify-center p-5 border-t-[1px] border-[#dddddd35] gap-4 mt-auto">
        <div className="flex gap-4">
          <img
            className="w-[20px] h-[20px] cursor-pointer"
            src="./img.png"
            alt=""
          />
          <img
            className="w-[20px] h-[20px] cursor-pointer"
            src="./camera.png"
            alt=""
          />
          <img
            className="w-[20px] h-[20px] cursor-pointer"
            src="./mic.png"
            alt=""
          />
        </div>
        {/* input for message */}
        <input
          className="flex-1 bg-[#11192880] border-none outline-none text-white p-4 rounded-[10px]  text-base ml-4"
          type="text"
          placeholder="Type your message"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        {/* Emoji */}
        <div className="relative ">
          <img
            className="w-8 h-6 cursor-pointer"
            src="./emoji.png"
            alt=""
            onClick={() => setEmojiopen((prev) => !prev)}
          />
          <div className="absolute bottom-12 left-0">
            <EmojiPicker open={emojiopen} onEmojiClick={handleEmoji} />
          </div>
        </div>
        {/* button for sending message */}
        <button className="bg-[#5183fe] text-white px-[15px] py-2 border-none cursor-pointer rounded-[5px]">
          Send
        </button>
      </div>
    </div>
  );
};

export default Chat;
