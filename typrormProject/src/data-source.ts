import { DataSource } from 'typeorm';
import {Recipe} from "./entity/Recipe";
import {User} from "./entity/User";
import {Comment} from "./entity/Comment";

export const AppDataSource = new DataSource({
    type: 'sqlite', // e.g., 'mysql', 'postgres', etc.
    database: './database.sqlite',
    synchronize: true,
    logging: false,
    entities: [ Recipe, User, Comment],
    migrations: [], // Add your migration files here
    subscribers: [], // Add your subscriber files here
});