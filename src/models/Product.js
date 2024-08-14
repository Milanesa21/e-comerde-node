import {model, Schema} from 'mongooses';

const ProductSchema = new Schema({
    name: String,
    description: String,
    price: Number,
    category: String,
    stock: Number,
}, {
    timestamps: true,
});

export default model('products', ProductSchema)