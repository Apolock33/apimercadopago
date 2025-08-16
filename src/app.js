import express from "express";
import "dotenv/config";

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
    res.json({ message: "API rodando" });
});

app.listen(process.env.PORT, () => {
    console.log(`🚀 Servidor rodando na porta ${process.env.PORT}`);
});