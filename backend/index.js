import express from "express"

const app = express()
app.use(express.json())

app.get("/", (req, res) => {
    res.json("Hello World")
})

const PORT = 5000

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}...`)
})