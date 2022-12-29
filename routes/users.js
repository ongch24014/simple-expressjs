const express = require('express')
const router = express.Router()

// * urls are read from top to bottom

router.get('/', (req, res) => {
  // query parameter
  console.log(req.query.name)
  res.send("User List")
})

router.get('/new', (req, res) => {
  res.render("/users/new")
})

router.post('/', (req, res) => {
  const isValid = true
  if (isValid) {
    users.push({ firstName: req.body.firstName })
    res.redirect(`/users/${users.length - 1}`)
  } else {
    console.log("Error")
    res.render("users/new", { firstName: req.body.firstName })
  }
})

// url with parameter
// router.get('/:id', (req, res) => {
//   const id = req.params.id
//   res.send(`Get user with ID ${id}`)
// })

router
  .route("/:id")
  .get((req, res) => {
    console.log(req.user) // req from router.param
    const id = req.params.id
    res.send(`Get user with ID ${id}`)
  })
  .put((req, res) => {
    const id = req.params.id
    res.send(`Update user with ID ${id}`)
  })
  .delete((req, res) => {
    const id = req.params.id
    res.send(`Delete user with ID ${id}`)
  })

const users = [{ name: "Chun Heng" }, { name: "Chai Mei" }]
// when any url has "id", this code will run first, good to use for getting data instead of writing get data in each url
router.param("id", (req, res, next, id) => {
  req.user = users[id]
  next()
})

module.exports = router