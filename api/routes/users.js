const express = require("express")
const User = require("../models")
const usersRouter = express.Router()
const passport = require("passport")


usersRouter.post("/register", (req, res, next) => {
    const { username, email, password } = req.body;
    User.create({ username, email, password })
      .then((user) => {
        res.status(201).send(req.body);
      })
      .catch(next);
  });
  
  usersRouter.post("/login", passport.authenticate("local"), (req, res, next) => {
    res.send(req.user);
  });
  
  usersRouter.post("/logout", (req, res, next) => {
    req.logOut();
    res.sendStatus(200);
  });
  
  usersRouter.get("/me", (req, res) => {
    if (!req.user) res.sendStatus(401);
    res.send(req.user);
  });

module.exports = usersRouter