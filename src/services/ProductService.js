import Product from '../models/Product.js';

class ProductService {
    async getAllProducts(role) {
        if (role === 'admin' || role === 'vendedor') {
            return Product.findAll();
        } else if (role === 'cliente') {
            return Product.findAll({ where: {avaliable: true} });
        }
        throw new Error('Rol no autorizado para esta accion');
    }

    async createProduct(productData, role){
        if (role !== 'vendedor' && role !== 'admin') {
            throw new Error('Rol no autorizado para crear productos');
        }
        return Product.create(productData);
    }

    async updateProduct (id, productData, role) {
        if (role !== 'vendedor' && role !== 'admin') {
            throw new Error ('Rol no autorizado para actualizar el producto');
        }
        return Product.update(productData, {where: {id} });
    }

    async deleteProduct(id, role) {
        if(role !== 'admin') {
            throw new Error ('Rol no auroizado para eliminar productos');
        }
        return Product.destroy({ where: {id} });
    }

    async getProductById(id, role) {
        if (role === 'admin' || role === 'vendedor') {
            return Product.findByPk(id);
        } else if (role === 'cliente'){
            const product = await Product-findByPk(id);
            if (product && product.avaliable) {
                return product;
            } else {
                throw new Error('Producto no disponible o no encontrado');
            }
        }
        throw new Error('Rol no autorizado para esta accion');
    }
}

export default new ProductService ();