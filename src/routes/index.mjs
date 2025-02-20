import express from 'express';
import {
  getViajes,
  getViajeInfo,
  paginaInicio,
  paginaNosotros,
  paginaTestimoniales
} from '../controllers/viajesController.mjs';
import { guardarTestimonial } from '../controllers/testimonialesController.mjs';
import validarTestimonial from '../middlewares/validarTestimonial.mjs';

const router = express.Router();

// Rutas usando los controllers
router.get('/', paginaInicio);
router.get('/nosotros', paginaNosotros);
router.get('/viajes', getViajes);
router.get('/viajes/info/:slug', getViajeInfo);
router.get('/testimoniales', paginaTestimoniales);
router.post('/testimoniales', validarTestimonial, guardarTestimonial);

export default router;
