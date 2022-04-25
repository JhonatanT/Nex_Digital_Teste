import { ProductModel } from "../../database/models/ProductModel"

interface typeProduct{
    id_user:string
    name_product:string
    price:string
}

class RegProductsService{

    async execute({id_user, name_product, price}:typeProduct){

        try{
            await ProductModel.create({
                id_user: id_user,
                name_product: name_product,
                price: price
            })
            
            return ProductModel
        }
        catch(e){
            throw new Error("error: " + e)
        }  
    }
}
export{RegProductsService}