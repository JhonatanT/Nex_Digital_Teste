import { Model, DataTypes, Sequelize, ModelAttributeColumnReferencesOptions } from "sequelize";
import { db } from "../config/database";
import { v4 as uuid } from "uuid"

type UserAttributes={
    id?:string,
    name:string, 
    email:string, 
    pass:string
}

export class UserModel extends Model<UserAttributes>{
    id?:string
    name:string
    email:string
    pass:string
}

UserModel.init({
    id:{
        type: DataTypes.UUIDV4,
        defaultValue: uuid,
        allowNull:false,
        primaryKey:true
    },

    name:{
        type: DataTypes.STRING,
        allowNull:false,
    },

    email:{
        type: DataTypes.STRING,
        allowNull:false,
    },

    pass:{
        type: DataTypes.STRING,
        allowNull:false,
    },
}, {
    sequelize:db,
    tableName:"tb_users"
});