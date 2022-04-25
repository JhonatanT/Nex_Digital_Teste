import {Request, Response} from 'express' 
import { RegProductsService } from '../../../services/Products/RegProductsService';

class RegProductsController{
    async handle(request:Request, response:Response){

        const { name_product, price} = request.body

        const regProductsService = new RegProductsService();

        const id_user = request.user_id
        
        const sendProducts= await regProductsService.execute({id_user, name_product, price})

        return response.status(200).json(sendProducts)

    }
}
export {RegProductsController}