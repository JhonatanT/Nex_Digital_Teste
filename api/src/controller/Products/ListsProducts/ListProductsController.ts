import {Request, Response} from 'express' 
import { ListProductsService } from '../../../services/Products/ListProductsService';

class ListProductsController{
    async handle(request:Request, response:Response){

        const listProductsService = new ListProductsService();

        const id_user = request.user_id
        
        const sendProducts= await listProductsService.execute({id_user})

        return response.status(200).json(sendProducts)

    }
}
export {ListProductsController}