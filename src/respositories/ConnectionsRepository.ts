import { EntityRepository, Repository } from "typeorm";
import { Connection } from "../models/Connection";


@EntityRepository(Connection)
class ConnectionsRepository extends Repository<Connection>{

}

export default ConnectionsRepository