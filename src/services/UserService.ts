import { getCustomRepository, Repository } from "typeorm"
import User from "../models/User"
import UsersRepository from "../respositories/UsersRepository"

class UserService {
    private userRepository: Repository<User>

    constructor(){
        this.userRepository = getCustomRepository(UsersRepository)
    }


    async create(email: string){



        const userExists = await this.userRepository.findOne({
            where: {email}
        })

        if(userExists){
            return userExists;
        }

        const user = this.userRepository.create({
            email
        })

        await this.userRepository.save(user)
        return user

    }

}

export default UserService