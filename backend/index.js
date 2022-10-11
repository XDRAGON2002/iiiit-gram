import express from "express"

const app = express()
app.use(express.json())

let users = [{id:1 ,name: "Tom", gender: "Male", bio: "Loves to paint"}, {id:2,name: "Jerry", gender: "Male", bio: "Loves sleeping"}]

app.get("/", (req, res) => {
    res.json("Hello World")
})
app.get('/users/',(req,res)=>{
    res.json(users)
})
app.get('/users/:id',(req,res)=>{
    const {id}=req.params
    const getUser=users.find((user)=>user.id===Number(id))
    if(!getUser){
        return res.status(404).send('User not found')
    }
    else{
        return res.json(getUser)
    }
    
})

const PORT = 8080

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}...`)
})
