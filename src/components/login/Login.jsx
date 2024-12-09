import React, { useState } from "react";
import { toast } from "react-toastify";
import { auth } from "../../lib/firebase";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword  } from "firebase/auth";
import { db } from "../../lib/firebase";
import { setDoc, doc } from "firebase/firestore";
import Upload from "../upload/Upload";
const Login = () => {
  const bucketId = "6755c48800110a0fe0fe";
  const [avatar, setAvatar] = useState({
    file: null,
    url: "",
  });

  const [loading, setLoading] = useState(false);

  const handleAvatar = (e) => {
    if (e.target.files[0]) {
      setAvatar({
        file: e.target.files[0],
        url: URL.createObjectURL(e.target.files[0]),
      });
    }
  };
  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    const formData = new FormData(e.target);

    const { email, password } = Object.fromEntries(formData);

    try {
      await signInWithEmailAndPassword(auth, email, password);
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
    finally{
      setLoading(false)
    }
    toast.success("You are Logged In");
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    setLoading(true);
    const formData = new FormData(e.target);

    const { username, email, password } = Object.fromEntries(formData);
    try {
      const res = await createUserWithEmailAndPassword(auth, email, password);

      let imgUrl = null;
      if (avatar.file) {
        imgUrl = await Upload(avatar.file, bucketId);
      }
      await setDoc(doc(db, "user", res.user.uid), {
        avatar: imgUrl || null,
        username,
        email,
        id: res.user.uid,
        blocked: [],
      });

      await setDoc(doc(db, "userchats", res.user.uid), {
        chats: [],
      });
      toast.success("You are Signup now");
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className="w-full h-full flex items-center gap-[100px]">
      {/* First section */}
      <div className="flex-1 flex flex-col items-center gap-5">
        <h2 className="text-lg font-bold">Welcome Back</h2>
        <form
          onSubmit={handleLogin}
          className="flex flex-col items-center justify-center gap-5"
        >
          <input
            className="p-5 border-none outline-none bg-[rgba(17,25,40,0.6)] text-white rounded-[5px]"
            type="text"
            placeholder="Enter Your Email"
            name="email"
          />
          <input
            className="p-5 border-none outline-none bg-[rgba(17,25,40,0.6)] text-white rounded-[5px]"
            type="password"
            placeholder="Enter Your Password"
            name="password"
          />
          <button
            disabled={loading}
            className="w-full p-5 border-none bg-[#1f8ef1] text-white rounded-[5px] cursor-pointer font-medium
           disabled:cursor-not-allowed disabled:bg-[#1f8ff19c]"
          >
            {loading ? "Loading" : "Sign In"}
          </button>
        </form>
      </div>

      {/* Separator */}
      <div className="h-[80%] w-[2px] bg-[#dddddd35]"></div>

      {/* Second section */}
      <div className="flex-1 flex flex-col items-center gap-5">
        <h2 className="text-lg font-bold">Create Account</h2>
        <form
          onSubmit={handleRegister}
          className="flex flex-col items-center justify-center gap-5"
        >
          <label
            htmlFor="file"
            className="w-full flex items-center justify-between cursor-pointer underline decoration-1 "
          >
            <img
              className="w-[50px] h-[50px] rounded-[10px] object-cover opacity-60 m-0 p-0"
              src={avatar.url || "./avatar.png"}
              alt=""
            />
            Upload your Image
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
            name="username"
          />
          <input
            className="p-5 border-none outline-none bg-[rgba(17,25,40,0.6)] text-white rounded-[5px]"
            type="text"
            placeholder="Enter Your Email"
            name="email"
          />
          <input
            className="p-5 border-none outline-none bg-[rgba(17,25,40,0.6)] text-white rounded-[5px]"
            type="password"
            placeholder="Enter Your Password"
            name="password"
          />
          <button
            disabled={loading}
            className="w-full p-5 border-none bg-[#1f8ef1] text-white rounded-[5px] cursor-pointer font-medium
          disabled:cursor-not-allowed disabled:bg-[#1f8ff19c]"
          >
            {loading ? "Loading" : "Sign Up"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
