import React from "react";
import { Routes, Route } from "react-router";
import Navbar from "./components/Navbar.jsx"
import Login from "./components/Login.jsx";
import Register from "./components/Register.jsx";
import AuthContextProvider from "./contexts/AuthContext.jsx";


const App = ()=> {
  return (
  <AuthContextProvider>
    <Navbar/>
    <Routes>
      <Route path="/" element={<h1>sexy goblin?</h1>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/register" element={<Register/>}/>
    </Routes>
  </AuthContextProvider>
  )
}

export default App;
