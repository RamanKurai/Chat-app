import "./App.css";
import Chat from "./components/chat/Chat";
import List from "./components/list/List";
import Detail from "./components/detail/Detail";
import Login from "./components/login/Login"
import Notification from "./components/notification/Notification";
import React, { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./lib/firebase";
import { useUserStore } from "./lib/userStore";
const App = () => {
  const {currentUser , fetchUserInfo , isLoading} = useUserStore();
   useEffect(() => {
    const unsub = onAuthStateChanged(auth , (user)=> {
      console.log("Auth state changed:", user)
      fetchUserInfo(user?.uid)
      console.log(user)
    })
    return () => {
      unsub();
    }
   }, [fetchUserInfo])

   if (isLoading) return <div className="loading">Loading...</div>;
  return (
    <div className="container">
      {currentUser ? (
        <>
          <List />
          <Chat />
          <Detail />
        </>
      ) : (
        <Login/>
      )}
      <Notification/>
    </div>
  );
};

export default App;
