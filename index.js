const express = require('express')
const database = require('./models')

const app = express()
const port = process.env.PORT || 3000

app.get('/', (req, res) => {
  const userCount = database.User.findAll()
    .then((results) => {
      res.send(`We have ${results.length} users`)
    })
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
