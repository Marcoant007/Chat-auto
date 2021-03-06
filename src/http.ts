import express, { response } from 'express';
import { createServer } from "http";
import { Server, Socket} from "socket.io";
import "./database";
import routes from './routes/routes';
import path from 'path' // permite que construa o caminho de algum arquivo para passar o caminho da aplicação

const app = express();

app.use(express.static(path.join(__dirname, "..", "frontend")));
app.set("views", path.join(__dirname, "..", "frontend"));
app.engine("html", require("ejs").renderFile);
app.set("view engine", "html");

app.get("/pages/client", (request,response) => {
    return response.render("html/client.html")
})

app.get("/pages/admin", (request,response) => {
    return response.render("html/admin.html")
})

const http = createServer(app); //Criando protocolo http
const io = new Server(http); // Criando o protocolo ws de websocket

io.on("connection", (socket:Socket) => {
    console.log("Se conectou ?", socket.id);
})

app.use(express.json())
app.use(routes)

export {http, io}
