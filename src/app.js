import "dotenv/config";
import express from "express";
import mercadopago from './routes/mercadopagoRoutes.js';

const app = express();

app.use(express.json());

app.use('/mercadopago', mercadopago);

const PORT = process.env.PORT;
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
