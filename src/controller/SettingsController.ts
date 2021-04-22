import {Request, Response} from "express"
import { getCustomRepository } from "typeorm";
import SettingsRepository from "../respositories/SettingsRepository";
import SettingService from "../services/SettingsService";

class SettingsController {

    async create(request:Request, response:Response){
        const { chat, username} = request.body
        const settingsService = new SettingService();
     
        try {
            const settings = await settingsService.create({chat,username})
            return response.json(settings)
        } catch (err) {
            return response.status(400).json({
                message: err.message
            })
        }
    }

}

export default SettingsController