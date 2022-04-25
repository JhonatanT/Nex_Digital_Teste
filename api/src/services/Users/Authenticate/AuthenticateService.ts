import { UserModel } from "../../../database/models/UserModel"
import { compare } from "bcryptjs"//função dentro da biblioteca para conseguir comparar a senha criptografada
import { sign } from "jsonwebtoken"

interface typeUser{
    email:string, 
    pass:string
}

class AuthenticateService{

    async execute({email, pass}:typeUser){

        const UserExist = await UserModel.findOne({
            where:{
                email
            }
        })

        if(!UserExist){
            throw new Error("User/Pass not exist")
        }

        const pass_compare = await compare(pass, UserExist.pass)

        if(!pass_compare){
            throw new Error("User/Pass not exist")
        }

        const token = sign({
            id:UserExist.id,
            name:UserExist.name,
        },"c094a4ad8a548c26dd6957247edde900",{
            subject: UserExist.id,
            expiresIn: "1d"
        })

        return token

    }
}
export{AuthenticateService}