const express = require("express")
const session = require("express-session")

const db = require("./db")
const routes = require("./routes")
const User = require("./models")

const cors = require("cors")
const passport = require("passport")
const local = require("passport-local")
const cookieParser = require("cookie-parser")
const morgan = require("morgan")
const bodyParser = require("body-parser")

const app = express()
const localStrategy = local.Strategy;

app.use(cors({
    origin:"http://localhost:3000",
    credentials:true
}));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true }));
app.use(morgan("tiny"));

app.use(
    session({
        secret:'login',
        resave: true,
        saveUninitialized: true,
    })
)

app.use(cookieParser('login'));

app.use(passport.initialize());
app.use(passport.session());

passport.use(new localStrategy((username, password, done) => {
    User.findOne({where:{username}})
    .then(user => {
        if(!user) {
            return done(null, false)
        }
        user.hash(password, user.salt)
        .then(hash => {
            if (hash !== user.password) return done(null, false)
            return done(null, user)
        })
    })
}))

passport.serializeUser((user, done) => done(null, user.id))

passport.deserializeUser((id, done)=>{
    User.findByPk(id)
    .then(user => {
        done(null, user)
    })
    .catch(done)
})

app.use("/api", routes);
app.use((err, req, res, next) => {
  console.log("ERROR");
  console.log(err);
  res.status(500).send(err.message);
});

db.sync({force:false})
.then(()=> app.listen(8000, ()=> console.log('Servidor iniciado en el puerto 8000.')))