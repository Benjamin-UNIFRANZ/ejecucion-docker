import { getAllViajes, getViajeBySlug, getThreeRandomViajes } from '../models/viajesModel.mjs';
import { getTestimoniales, getThreeTestimoniales } from '../models/testimonialesModel.mjs';

export async function getViajes(req, res) {
  try {
    const viajes = await getAllViajes();
    console.log('Datos de viajes obtenidos:', viajes); // Debug: mostrar datos obtenidos
    res.render('viajes', { viajes });
  } catch (error) {
    console.error('Error obteniendo viajes:', error); // Debug: mostrar error en consola
    res.status(500).render('viajes', { viajes: [], error: 'Error al obtener los viajes' });
  }
}

export async function getViajeInfo(req, res) {
  try {
    const slug = req.params.slug;
    const viaje = await getViajeBySlug(slug);
    console.log(`Datos del viaje (${slug}):`, viaje); // Debug: mostrar datos individuales
    if (!viaje) return res.status(404).send('Viaje no encontrado');
    res.render('informacionViajes', { viaje });
  } catch (error) {
    console.error(`Error obteniendo información del viaje (${req.params.slug}):`, error);
    res.status(500).send('Error al obtener la información del viaje');
  }
}

// Nuevas funciones agregadas:

export async function paginaInicio(req, res) {
  try {
    const [tresViajes, tresTestimoniales] = await Promise.all([
      getThreeRandomViajes(),
      getThreeTestimoniales()
    ]);
    // Se pasa la variable home a true para asignar la clase al body
    res.render('inicio', { home: true, viajes: tresViajes, testimoniales: tresTestimoniales });
  } catch (error) {
    console.error('Error en página de inicio:', error);
    res.status(500).send('Error al cargar la página de inicio');
  }
}

export function paginaNosotros(req, res) {
  // Renderiza la página "nosotros". Se puede pasar una variable, por ejemplo, con datos o un saludo.
  res.render('nosotros', { viajes: 'Bienvenidos a la empresa de viajes' });
}

const paginaTestimoniales = async (req, res)=>{
  try {
    const testimoniales = await getTestimoniales();
    res.render('testimoniales', {
      pagina:'Testimoniales',
      testimoniales
    });

  }catch(error){
    console.error('Error obteniendo testimoniales:', error);
    res.status(500).render('testimoniales', {testimoniales: [], error: 'Error al obtener los testimoniales'});
  }
}

export {paginaTestimoniales}