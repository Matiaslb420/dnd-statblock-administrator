import React from "react";
import './App.css';
import { Routes, Route } from "react-router";
import Navbar from "./components/Navbar.jsx";
import Login from "./components/Login.jsx";
import Register from "./components/Register.jsx";
import CharacterPage from "./components/CharacterPage.jsx";
import AuthContextProvider from "./contexts/AuthContext.jsx";
import CharContextProvider from "./contexts/CharacterContext.jsx";

const App = () => {
  return (
    <AuthContextProvider>
      <CharContextProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<h1>sexy goblin?</h1>} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/charPage" element={<CharacterPage />} />
        </Routes>
      </CharContextProvider>
    </AuthContextProvider>
  );
};

export default App;
