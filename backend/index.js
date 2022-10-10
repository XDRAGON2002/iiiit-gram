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

app.put("/users/:id", (req,res) => {
    const userId = req.params.id;
    let {name, gender, bio} = req.body;
    const body = {name,gender,bio};
    const user = users.find((user) => user.id === Number(userId));
    if(!user){
        res.status(404).send(`User with ID ${userId} not found`)
    }else{
        const userIndex = users.indexOf(user);
        const updatedUser = {...user, ...body};
        users[userIndex] = updatedUser;
        res.status(200).send(updatedUser);
    }

})

app.delete("/users/:id", (req,res) => {
    const userId = req.params.id;
    const user = users.find((user) => user.id === Number(userId));
    if(!user) {
        res.status(404).send(`Account with ID ${userId} not found`);
    }else{
        let new_user = users.filter((user) => user.id != userId);
        user = new_user;
        res.status(200).send(`Account Deleted!`);
    }
})

const PORT = 8080;

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}...`)
})