import { validationResult } from 'express-validator';
import { saveTestimonial, getTestimoniales, getThreeTestimoniales } from '../models/testimonialesModel.mjs';

export async function guardarTestimonial(req, res) {
  const { nombre, correo, mensaje } = req.body;
  const errores = validationResult(req);
  
   // Validación propia adicional
   const customErrors = [];
   if (nombre.trim().toLowerCase() === 'admin') {
     customErrors.push({ msg: 'El nombre "admin" no está permitido.' });
   }
   // Se pueden agregar más validaciones personalizadas aquí
 
   if (customErrors.length > 0) {
     return res.status(400).render('testimoniales', {
       pagina: 'Testimoniales',
       errores: customErrors,
       nombre,
       correo,
       mensaje
     });
   }

  if (!errores.isEmpty()) {
    const testimoniales = await getTestimoniales();
    return res.status(400).render('testimoniales', {
      pagina: 'Testimoniales',
      errores: errores.array(),
      nombre,
      correo,
      mensaje,
      testimoniales
    });
  }else{
    try {
      const nuevoTestimonial = await saveTestimonial({ nombre, correo, mensaje });
      // Se podría redirigir o renderizar la página con éxito
      console.log('Testimonial guardado:', nuevoTestimonial);

      const testimoniales = await getTestimoniales();

      res.render('testimoniales', {
        pagina: 'Testimoniales',
        success: 'Testimonial guardado correctamente',
        testimoniales

      });
      
    } catch (error) {
      console.error('Error al guardar el testimonial:', error);
      res.status(500).send('Error interno al almacenar el testimonial');
    }
  }
  
}

export async function paginaTestimonialesAlt(req, res) {
  try {
    const [todosTestimoniales, tresTestimoniales] = await Promise.all([
      getTestimoniales(),
      getThreeTestimoniales()
    ]);
    res.render('testimonialesLayout', {
      testimoniales: todosTestimoniales,
      destacados: tresTestimoniales
    });
  } catch (error) {
    console.error('Error en testimonials:', error);
    res.status(500).send('Error al cargar los testimoniales');
  }
}
