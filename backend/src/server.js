import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import router from './routes.js';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors({
  origin: 'http://localhost:5173' // URL do front, só permite requisições dessa origem
}));

app.use(express.json()); 
app.use(router);


app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});