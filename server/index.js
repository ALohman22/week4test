const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());

app.use(express.json());

const { 
    getCompliment,
    getFortune,
    deleteFortune,
    addFortune,
    editFortune
} = require('./controller')

app.get("/api/compliment", getCompliment);
app.get("/api/fortune", getFortune)
app.delete(`/api/fortune/:index`, deleteFortune)
app.put(`/api/fortune/:index`, editFortune)
app.post( '/api/fortune', addFortune)


app.listen(4000, () => console.log("Server running on 4000"));
