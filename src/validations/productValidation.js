import { body } from "express-validator";

export const productValidationRules = [
    body('name').notEmpty().withMessage('El nombre es requerido'),
    body('price').isFloat({ min: 0}).withMessage('Elprecio debe ser un numero positivo'),
    body('description').optional().isString(),
    body('stock').isInt({ min:0}).withMessage('El stock debe ser un numero positivo')
];