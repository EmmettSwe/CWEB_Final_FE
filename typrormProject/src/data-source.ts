import "reflect-metadata"
import { DataSource } from "typeorm"
import { User } from "./entity/User"

export const AppDataSource = new DataSource({
    type: 'sqlite', // prostgress, localdb, mysql, mariadb
    database: './sqlite.db',
    synchronize: true,
    logging: false,
    entities: [User],
    migrations: [],
    subscribers: [],
})
