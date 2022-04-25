import { hash } from "bcryptjs"
import { UserModel } from "../../../database/models/UserModel"
import { v4 as id } from "uuid"

interface typeUser{
    name:string, 
    email:string, 
    pass:string
}

class RegUserService{

    async execute({name, email, pass}:typeUser){

        const pass_crypt = await hash(pass, 8)
        const [user, created] = await UserModel.findOrCreate({
            where:{
                email
            },
            defaults:{
                name,
                email,
                pass: pass_crypt
            }
        })

        if(!created){
            throw new Error("email already exists")
        }
        
        return user.validate()

    }
}
export{RegUserService}