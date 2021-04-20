import express, { response } from 'express';
import "./database";
import routes from './routes/routes';

const app = express();
app.use(express.json())
app.use(routes)

app.listen(3333, ()=> console.log("Servidor rodando na porta 3333"));