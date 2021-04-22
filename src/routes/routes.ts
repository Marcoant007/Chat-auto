import { response, Router } from "express";
import MessagesController from "../controller/MessagesController";
import SettingsController from "../controller/SettingsController";
import UsersController from "../controller/UsersController";

const routes = Router();

const settingsController = new SettingsController();
const usersContoller = new UsersController();
const messagesController = new MessagesController();

routes.post("/settings", settingsController.create);
routes.get("/settings/:username", settingsController.findByUsername)
routes.put("/settings/:username", settingsController.update)

routes.post("/users", usersContoller.create);
routes.post("/messages", messagesController.create )
routes.get("/messages/:id", messagesController.showByUser)


export default routes