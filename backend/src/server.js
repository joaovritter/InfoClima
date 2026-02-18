import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import router from './routes.js';

/**
 * Server é o ponto de entrada da aplicação
 * Server é responsável por configurar o servidor, as rotas e os middlewares
 * Roda a aplicação e fica escutando as requisições do front
 * Envia as respostas para o front
 * usamos cors para permitir requisições de origens específicas.
 */

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors({
  origin: 'http://localhost:5173' // URL do front, só permite requisições dessa origem
}));

app.use(express.json()); //middleware para parsear o corpo das requisições como JSON
app.use(router);


app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});