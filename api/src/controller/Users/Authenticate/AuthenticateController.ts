import {Request, Response} from 'express' 
import { AuthenticateService } from '../../../services/Users/Authenticate/AuthenticateService';

class AuthenticateController{
    async handle(request:Request, response:Response){

        const { email, pass} = request.body;

        const loginService = new AuthenticateService();

        const sendToken = await loginService.execute({email, pass})

        return response.status(200).json(sendToken)

    }
}
export {AuthenticateController}