import { sample_users } from './data';
import { sample_foods, sample_tags } from './../../frontend/src/data';
import express from "express";
import cors from "cors";
import jwt from "jsonwebtoken"

const app = express();
app.use(express.json());
app.use(cors({
    credentials : true,
    origin : ["http://localhost:4200"]
}));



app.get("/api/foods", (req,res) => {
    res.send(sample_foods);
})

app.get("/api/foods/search/:searchTerm", (req,res) => {
    const searchTerm = req.params.searchTerm;
    const foods = sample_foods.filter(food => 
        food.name.toLocaleLowerCase().includes(searchTerm.toLocaleLowerCase()));
    res.send(foods);
})

app.get("/api/foods/tags", (req,res) => {
    res.send(sample_tags);
})

app.get("/api/foods/tag/:tagName", (req,res) => {
    const tagName = req.params.tagName;
    const foods = sample_foods.filter(food => food.tags?.includes(tagName));
    res.send(foods);
})

app.get("/api/foods/:foodId", (req,res) => {
    const foodId = req.params.foodId;
    const food = sample_foods.find(food => food.id == foodId);
    res.send(food);
})


app.post("/api/users/login", (req,res) => {
    const {email, password} = req.body;
    const user = sample_users.find(user => 
        user.email === email && user.password === password);
    if(user){
        res.send(generateTokenResponse(user));
    }
    else{
        res.status(400).send("User name or password is not valid !");
    }
})
// encrypted token that is sent to the user after auth
// the user later will send the token with every query --> so we can decrypte it and know who it is
const generateTokenResponse = (user:any) => {
    // process of generating token := signing
    // {payload , privateKey kept in the emv file , options}
    const token = jwt.sign(
        { email : user.email, isAdmin : user.isAdmin },
        "SecretOrPrivateKey",
        { expiresIn : "30d" }
    );

    user.token = token;
    return user;
}

const port = 5000;
app.listen(port, () => {
    console.log("Website served on http://localhost:" + port);
})


