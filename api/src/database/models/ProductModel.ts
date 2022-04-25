import { Model, DataTypes, Sequelize } from "sequelize";
import { db } from "../config/database";
import { v4 as uuid } from "uuid"
import { UserModel } from "./UserModel";

type ProductAttributes={
    id?:string,
    id_user:string, 
    name_product:string, 
    price:string
}

export class ProductModel extends Model<ProductAttributes>{
    id?: string
    id_user: string
    name_product: string
    price: string
}

ProductModel.init({
    id:{
        type: DataTypes.STRING,
        defaultValue:uuid,
        allowNull:false,
        primaryKey:true
    },

    id_user:{
        type: DataTypes.STRING,
        allowNull:false,
    },

    name_product:{
        type: DataTypes.STRING,
        allowNull:false,
    },

    price:{
        type: DataTypes.STRING,
        allowNull:false,
    },
}, {
    sequelize:db,
    tableName:"tb_products"
});


