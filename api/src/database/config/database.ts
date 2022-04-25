import {Sequelize} from 'sequelize'
import dotenv from 'dotenv'

dotenv.config({
    path: process.env.NODE_ENV == 'dev' ? '.env.dev' : '.env.production'    
})

dotenv.config();

export const db = new Sequelize(
    String(process.env.DATABASE_NAME),
    String(process.env.DATABASE_USER),
    String(process.env.DATABASE_PASS),{
        dialect:'postgres',
        host: process.env.DATABASE_HOST,
        port: Number(process.env.DATABASE_PORT),
    }
    
)