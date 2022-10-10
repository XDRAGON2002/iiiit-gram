import express from "express"

const app = express()
app.use(express.json())

let users = [
    {
        id: 1,
        name: "Tom", 
        gender: "Male", 
        bio: "Loves to paint"
    }, 
    {
        id: 2,
        name: "Jerry",
        gender: "Male",
        bio: "Loves sleeping"
    }
]

app.get("/", (req, res) => {
    res.json("Hello World")
})

app.get("/users", (req, res) => {
    res.json({"users": users});
});

app.get("/users/:id", (req,res) => {
    const id = req.params.id;
    const user = users.find((user) => user.id === Number(id));
    res.json({"user":user});
})

const PORT = 8080;

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}...`)
})