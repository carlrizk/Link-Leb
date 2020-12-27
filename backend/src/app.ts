import  express from "express"
import  bodyParser from "body-parser"
import passport from "passport"
import mongoose from "mongoose"
import AppRouter from "./app.router"
import authStrategy from "./auth/auth.strategy"
import  cors from "cors"

const app = express()

app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }));

passport.use(authStrategy)
passport.serializeUser(function(user, done){
  done(null, user)
})
passport.deserializeUser(function(user, done){
  done(null, user)
})

app.use(passport.initialize())

mongoose.connect('mongodb://localhost/LinkLeb',
  { useNewUrlParser: true, useUnifiedTopology: true }
);

app.use("/api", AppRouter)

const port = process.env.PORT || 3000
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})