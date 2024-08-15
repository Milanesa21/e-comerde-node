import { DataTypes, Model } from "sequelize";
import sequelize from "../db/database.js";

class Product extends Model {}

Product.init ({
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    price: {
        type: DataTypes.FLOAT,
        allowNull: false,
    },
    description: {
        type: DataTypes.STRING,
    },
    category: {
        type: DataTypes.STRING,
    },
    stock: {
        type: DataTypes.INTEGER,
        defaultValue: 0,
    },
    avaliable: {
        type: DataTypes.BOOLEAN,
        defaultValue: true,
    }

}, {
    sequelize,
    modelName: 'Product',
    tableName: 'products',
});

export default Product;