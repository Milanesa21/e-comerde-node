import { DataTypes, MOdel } from "sequelize";
import sequelize from "../db/database";
import { modelNames } from "mongoose";

class User extends Model {}

User.init({
    username : {
        type: DataTypes.STRING,
        allowNull: false,
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    password: {
        tpe: DataTypes.STRING,
        allowNull: false,
    },
    role: {
        type: DataTypes.ENUM('cliente', 'vendedor','admin'),
        allowNull: false,
    }
},{
    sequelize,
    modelName: 'User',
    tableName:'users',
});

export default User;