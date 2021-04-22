import { getCustomRepository, Repository } from "typeorm"
import { Connection } from "../models/Connection"
import ConnectionsRepository from "../respositories/ConnectionsRepository"


interface IConnectionCreate{
    socket_id: string;
    user_id: string;
    admin_id?: string;
    id?: string;
}

class ConnectionServices {
    private connectionRepository: Repository<Connection>

    constructor(){
        this.connectionRepository = getCustomRepository(ConnectionsRepository)
    }

    async create({socket_id,user_id,admin_id,id}:IConnectionCreate){
      const connection =  this.connectionRepository.create({
        socket_id,
        user_id,
        admin_id,
        id

      })

      await this.connectionRepository.save(connection);
      return connection
    }

    async findByUserId(user_id: string){
        const connections = await this.connectionRepository.findOne({
            user_id
        })

        return connections
    }

    

}

export default ConnectionServices