import express from "express"

const app = express()
app.use(express.json())

let users = [{name: "Tom", gender: "Male", bio: "Loves to paint"}, {name: "Jerry", gender: "Male", bio: "Loves sleeping"}]

app.get("/", (req, res) => {
    res.json("Hello World")
})

app.post("/users/add", (req, res) => {
    users.push({
        name: req.query.name,
        gender: req.query.gender,
        bio: req.query.bio,
    });
    res.status(201).json({
        message: "New User Created"
    })
})

const PORT = 5000

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}...`)
})
