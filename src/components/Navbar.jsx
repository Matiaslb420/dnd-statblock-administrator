import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../contexts/AuthContext";
import axios from "axios";

const Navbar = () => {
  const userContext = useContext(AuthContext);
  return (
    <nav>
      {userContext.isAuthenticated ? (
        <>
          <Link to="/">
            <button
              onClick={() =>
                axios
                  .post("http://localhost:8000/api/users/logout")
                  .then(userContext.toggleAuth(null))
              }
            >
              log out
            </button>
          </Link>
          <span>{userContext.isAuthenticated ? userContext.user.username : ""}</span>
        </>
      ) : (
        <>
          <Link to="/login">
            <button className="button is-primary">login</button>
          </Link>
          <Link to="/register">
            <button>register</button>
          </Link>
        </>
      )}
    </nav>
  );
};

export default Navbar;
