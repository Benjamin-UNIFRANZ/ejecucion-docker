/*id
titulo
precio
fecha_ida
fecha_vuelta
imagen
descripcion
disponibles
slug*/
/*creamos la base de datos Viaje*/
create database  viaje;
/*creamos un nuevo schema*/
-- Conéctate a la base de datos
\c viaje;

-- Crear un nuevo esquema llamado 'viajes'
CREATE SCHEMA IF NOT EXISTS viajes;

-- drop table if exists viajes.viajes;
-- Crear una tabla en el esquema 'viajes'
CREATE TABLE viajes.viajes (
    id SERIAL PRIMARY KEY,
    titulo VARCHAR(100) NOT NULL UNIQUE,
    precio INTEGER CHECK (precio > 0),
    fecha_ida DATE NOT NULL,
    fecha_vuelta DATE NOT NULL,
    imagen VARCHAR(100) NOT NULL,
    descripcion TEXT NOT NULL,
    disponibles INTEGER CHECK (disponibles >= 0),
    slug VARCHAR(100)
);

-- Insertar datos en la tabla 'viajes' dentro del esquema 'viajes'
INSERT INTO viajes.viajes (titulo, precio, fecha_ida, fecha_vuelta, imagen, descripcion, disponibles, slug)
VALUES
('Italia', 50000, '2021-06-24', '2021-06-30', 'roma', 'Praesent tincidunt ante at justo semper volutpat. Sed vel metus. Ut vitae odio. Quisque volutpat condimentum velit.', 32, 'viaje-italia'),
('Canada', 60000, '2021-07-19', '2021-07-19', 'canada', 'Praesent tincidunt ante at justo semper volutpat. Sed vel metus. Ut vitae odio. Quisque volutpat condimentum velit.', 25, 'viaje-canada'),
('Grecia', 40000, '2021-08-29', '2021-09-15', 'grecia', 'Praesent tincidunt ante at justo semper volutpat. Sed vel metus. Ut vitae odio. Quisque volutpat condimentum velit.', 18, 'viaje-grecia'),
('Inglaterra', 8000, '2021-09-22', '2021-10-03', 'londres', 'Praesent tincidunt ante at justo semper volutpat. Sed vel metus. Ut vitae odio. Quisque volutpat condimentum velit.', 22, 'viaje-inglaterra'),
('Rio de Janeiro', 50000, '2021-04-16', '2021-04-25', 'rio', 'Praesent tincidunt ante at justo semper volutpat. Sed vel metus. Ut vitae odio. Quisque volutpat condimentum velit.', 23, 'viaje-rio-de-janeiro'),
('Francia', 75000, '2021-04-03', '2021-04-10', 'paris', 'Praesent tincidunt ante at justo semper volutpat. Sed vel metus. Ut vitae odio. Quisque volutpat condimentum velit.', 14, 'viaje-francia');





