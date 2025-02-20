import { body } from 'express-validator';

const validarTestimonial = [
  // Validación para 'nombre'
  body('nombre')
    .trim()
    .notEmpty().withMessage('El nombre es obligatorio')
    .isLength({ min: 2, max: 50 }).withMessage('El nombre debe tener entre 2 y 50 caracteres')
    .escape(),
  // Validación para 'correo'
  body('correo')
    .trim()
    .notEmpty().withMessage('El correo es obligatorio')
    .isEmail().withMessage('Debe ingresar un correo electrónico válido')
    .normalizeEmail(),
  // Validación para 'mensaje'
  body('mensaje')
    .trim()
    .notEmpty().withMessage('El mensaje es obligatorio')
    .isLength({ min: 5, max: 500 }).withMessage('El mensaje debe tener entre 10 y 500 caracteres')
    .escape()
];


export default validarTestimonial;
