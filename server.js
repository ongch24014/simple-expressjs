const express = require('express')
const app = express()

app.set('view engine', 'ejs')

app.get('/', (req, res) => {
  console.log('Here')

  // success with json
  // res.json({ message: "Success" })

  // error with json
  // res.status(500).json({ message: "Error" })

  // download file
  // res.download("server.js")

  // render html file
  res.render("index", { text: "World" })

  // for testing purposes, use .send()
  // res.send("hi")
})

const userRouter = require("./routes/users")

// all url starts with /users, go to this route
app.use("/users", userRouter)

app.listen(3000)