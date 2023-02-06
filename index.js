const express = require("express")

const app = express()
const port = 6600;

let users = [
    {
        id: 1,
        name: "Wale"
    },
    {
        id: 2,
        name: "Emmanuel"
    },
]

app.get('/user/:userId', (req,res) => {
    res.sendStatus(404)
    res.send("This is the profile of: " + req.params.userId)
})


app.get('/user/', (req,res) => {
    res.sendStatus(404)
    res.send(JSON.stringify(users))
})

app.post('/user/', (req,res) => {
    res.sendStatus(404)
    res.send("This is the profile of: ")
})

app.delete('/user/:userId', (req,res) => {
    res.send("We should delete user: " + req.params.userId)
})

app.listen(port, () => {
  console.log(`Example app listening on http://localhost:${port}`)
})
