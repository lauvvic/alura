import express from "express";

const app = express();
app.listen(3000, () =>{
    console.log("Servidor escutando...");
});

app.get("/lau",(req, res) => {
    res.status(200).send("Estou participando da imersão!");

});