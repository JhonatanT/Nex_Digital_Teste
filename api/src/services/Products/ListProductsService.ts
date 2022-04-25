import { ProductModel } from "../../database/models/ProductModel"

interface typeProduct{
    id_user:string
}

class ListProductsService{

    async execute({id_user}:typeProduct){

        try{

            const FindProducts = await ProductModel.findAll({
                where:{
                    id_user
                }
            })
            
            return FindProducts
        }

        catch(e){
            throw new Error("error: " + e)
        } 

    }
}
export{ListProductsService}