import { serverHttp } from "./server";
import {db} from './database/config/database'

db.sync().then(() => {
    console.log('connect db');
}) 
serverHttp.listen(3030, async () => {
    console.log("RUNNING 3030")
})