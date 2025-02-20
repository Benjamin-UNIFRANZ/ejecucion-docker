import pkg from 'pg';
const { Pool } = pkg;
import dotenv from 'dotenv';

dotenv.config();

const pool = new Pool({
  host: process.env.DB_HOST || '127.0.0.1',
  port: process.env.DB_PORT || 5432,
  database: process.env.POSTGRES_DB,
  user: process.env.DB_USER || 'benjaminRo',
  password: process.env.POSTGRES_PASSWORD || 'G7h!kL9@pQwZ',
  // Agregar search_path al esquema "viajes" 
  options: '-c search_path=viajes,public '

});
  
// const additionalPool = new Pool({
//   host: process.env.DB_HOST || '127.0.0.1',
//   port: process.env.DB_PORT || 5432,
//   database: process.env.ADDITIONAL_DB || 'mydatabasePostgres',
//   user: process.env.DB_USER || 'benjaminRo',
//   password: process.env.DB_PASSWORD || 'G7h!kL9@pQwZ'
// });


export async function connectToDatabase() {
  try {
    const client = await pool.connect();
    console.log(`Conectado a la DB  en ${process.env.DB_HOST || '127.0.0.1'}:${process.env.DB_PORT || 5432}`);
    client.release();
  } catch (error) {
    console.error('Error conectando a la base de datos:', error);
  }
}

// export async function connectToAdditionalDatabase() {
//   try {
//     const client = await additionalPool.connect();
//     console.log(`Conectado a la DB ${process.env.ADDITIONAL_DB || 'mydatabasePostgres'} en ${process.env.DB_HOST || '127.0.0.1'}:${process.env.DB_PORT || 5432}`);
//     client.release();
//   } catch (error) {
//     console.error('Error conectando a la base de datos adicional:', error);
//   }
// }

export default pool;