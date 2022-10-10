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
];

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

app.post("/users", (req,res) => {
    let {id, name, gender, bio} = req.body;
    const new_user = {id,name,gender,bio};
    users.push(new_user);
    res.status(201).json({
        "users":users
    });
})

const PORT = 8080;

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}...`)
})