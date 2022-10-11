import express from "express"

const app = express()
app.use(express.json())

let users = [{name: "Tom", gender: "Male", bio: "Loves to paint"}, {name: "Jerry", gender: "Male", bio: "Loves sleeping"}]

app.get("/", (req, res) => {
    res.json("Hello World")
})
app.get('/users/',(req,res)=>{
    res.json(users)
})

const PORT = 8080

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}...`)
})