import { getCustomRepository, Repository } from "typeorm";
import Setting from "../models/Settings";
import SettingsRepository from "../respositories/SettingsRepository";


interface ISettingsCreate {
    chat: boolean,
    username: string
}

class SettingService {

    private settingsRepository: Repository<Setting>

    constructor(){
        this.settingsRepository = getCustomRepository(SettingsRepository);
    }

    async create({chat, username}:ISettingsCreate){
        const userAlreadyExists = await this.settingsRepository.findOne({
            where: {username: username}
        });

        if(userAlreadyExists){
            throw new Error("User already exists");
        }

        const settings = this.settingsRepository.create({
            chat,
            username
        });
    
        await this.settingsRepository.save(settings)
        return settings
    }

}

export default SettingService;