import React, { useState } from "react";

const Login = () => {
  const [avatar, setAvatar] = useState({
    file: null,
    url: "",
  });

  const handleAvatar = (e) => {
    if (e.target.files[0]) {
      setAvatar({
        file: e.target.files[0],
        url: URL.createObjectURL(e.target.files[0]),
      });
    }
  };

  return (
    <div className="w-full h-full flex items-center gap-[100px]">
      {/* First section */}
      <div className="flex-1 flex flex-col items-center gap-5">
        <h2 className="text-lg font-bold">Welcome Back</h2>
        <form className="flex flex-col items-center justify-center gap-5">
          <input
            className="p-5 border-none outline-none bg-[rgba(17,25,40,0.6)] text-white rounded-[5px]"
            type="text"
            placeholder="Enter Your Email"
          />
          <input
            className="p-5 border-none outline-none bg-[rgba(17,25,40,0.6)] text-white rounded-[5px]"
            type="password"
            placeholder="Enter Your Password"
          />
          <button className="w-full p-5 border-none bg-[#1f8ef1] text-white rounded-[5px] cursor-pointer font-medium">
            Sign In
          </button>
        </form>
      </div>

      {/* Separator */}
      <div className="h-[80%] w-[2px] bg-[#dddddd35]"></div>

      {/* Second section */}
      <div className="flex-1 flex flex-col items-center gap-5">
        <h2 className="text-lg font-bold">Create Account</h2>
        <form className="flex flex-col items-center justify-center gap-5">
          <label
            htmlFor="file"
            className="w-full flex items-center justify-between cursor-pointer underline decoration-1 "
          >
            <img
              className="w-[50px] h-[50px] rounded-[10px] object-cover opacity-60 m-0 p-0"
              src={avatar.url || "./avatar.png"}
              alt=""
            />
            Upload your file
          </label>
          <input
            id="file"
            className="hidden"
            type="file"
            onChange={handleAvatar}
          />
          <input
            className="p-5 border-none outline-none bg-[rgba(17,25,40,0.6)] text-white rounded-[5px]"
            type="text"
            placeholder="Enter Your Full Name"
          />
          <input
            className="p-5 border-none outline-none bg-[rgba(17,25,40,0.6)] text-white rounded-[5px]"
            type="text"
            placeholder="Enter Your Email"
          />
          <input
            className="p-5 border-none outline-none bg-[rgba(17,25,40,0.6)] text-white rounded-[5px]"
            type="password"
            placeholder="Enter Your Password"
          />
          <button className="w-full p-5 border-none bg-[#1f8ef1] text-white rounded-[5px] cursor-pointer font-medium">
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
