import express from "express";
const router = express.Router();

let users = [
  { id: 1, name: "Tom", gender: "Male", bio: "Loves to paint" },
  { id: 2, name: "Jerry", gender: "Male", bio: "Loves sleeping" },
];

router.get("/", (req, res) => {
  res.json(users);
});

router.get("/:id", (req, res) => {
  const { id } = req.params;
  const getUser = users.find((user) => user.id === Number(id));
  if (!getUser) {
    return res.status(404).send("User not found");
  } else {
    return res.json(getUser);
  }
});

router.delete("/delete/:id",(req,res)=>{
  const { id } = req.params;
  const userIndex = users.findIndex((user)=>user.id===Number(id));
  if (userIndex===-1) {
    return res.status(404).send("User not found");
  } else {
    const deleteduser=users[userIndex];
    users=[...users.slice(0,userIndex),...users.slice(userIndex+1)];
    return res.json(deleteduser);
  }
});

router.put("/update/:id",(req,res)=>{
  const { id } = req.params;
  const userIndex = users.findIndex((user)=>user.id===Number(id));
  const {name,gen,bio}=req.body;
  if (userIndex===-1) {
    return res.status(404).send("User not found");
  }
  else if(gen==='Male'||gen==='Female'||!gen) 
  {
    users[userIndex].name=(name)?name:users[userIndex].name;
    users[userIndex].gender=(gen)?gen:users[userIndex].gender;
    users[userIndex].bio=(bio)?bio:users[userIndex].bio;
    return res.json(users[userIndex]);
  }
  else {
    // console.log(gen)
    return res.status(400).send("Incorrect entry in gender field");
  }
});



export default router;
