import {Request, Response} from 'express' 
import { RegUserService } from '../../../services/Users/Register/RegUserService';

class RegUserController{
    async handle(request:Request, response:Response){

        const {name, email, pass} = request.body;

        const regUserService = new RegUserService();

        const registerUser = await regUserService.execute({name, email, pass})

        return response.status(200).json(registerUser)

    }
}
export {RegUserController}