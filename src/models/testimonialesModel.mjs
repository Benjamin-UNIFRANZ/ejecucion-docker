import pool from '../config/database.mjs';

// Función para guardar un testimonial en la tabla 'testimoniales'
export async function saveTestimonial({ nombre, correo, mensaje }) {
  // ...código previo o configuración si es necesario...
  const query = 'INSERT INTO testimoniales (nombre, correo, mensaje) VALUES ($1, $2, $3) RETURNING *';
  const values = [nombre, correo, mensaje];
  const res = await pool.query(query, values);
  return res.rows[0];
}

const getTestimoniales = async ()=>{
    try{
        const testimoniales = await pool.query('SELECT * FROM testimoniales')
        return testimoniales.rows;
    }catch(error){
        console.error('Error obteniendo testimoniales:', error.menssage);
        return [];
    }
}

export {getTestimoniales}

export async function getThreeTestimoniales() {
  const res = await pool.query('SELECT * FROM testimoniales ORDER BY RANDOM() LIMIT 3;');
  return res.rows;
}
