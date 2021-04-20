import { EntityRepository, Repository} from "typeorm"
import Setting from "../models/Settings";


@EntityRepository(Setting)
class SettingsRepository extends Repository <Setting>{


}

export default SettingsRepository