import { BelongsTo, DataTypes, Model } from "sequelize";
import sequelize from "../db/database.js";
import User from "./User.js";

class Cart extends Model {}

Cart.init ({
    products: {
        type: DataTypes.JSONB,
        allowNull: false,
        defaultValue: [],
    }
}, {
    sequelize,
    modelName: 'Cart',
    tableName: 'carts'
});

Cart-BelongsTo(User, {foreignKey: 'userId'});

export default Cart;