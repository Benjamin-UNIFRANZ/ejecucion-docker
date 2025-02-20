

-- ---
--
-- erDiagram
--     %%diseñar la tabla testimoniales usuarios
--
--     testimoniales{
--         int id PK "🔑 ID Testimonial"
--         varchar nombre "👤 Nombre"
--         varchar correo "📧 Correo"
--         text mensaje "📝 Mensaje"
--     }
--     %% Definición de relaciones con iconos
-- %%    ENCARGOS ||--o{ COCHES : "🚗 pertenece"


-- crear la tabla testimoniales en la db viaje

create table if not exists viajes.testimoniales(
    id serial primary key not null,
    nombre varchar(69) not null,
    correo varchar(69) not null,
    mensaje text not null
);

alter table if exists viajes.testimoniales
    add constraint unique_correo unique (correo);



alter table if exists viajes.testimoniales
    add column fecha timestamp;

create or replace function set_fecha_creacion()
    returns trigger as $$
    begin
        new.fecha = now();
        return new;
    end;
    $$ language plpgsql;

create trigger before_insert_testimoniales
    before insert on viajes.testimoniales
    for each row  --Indica que el trigger se ejecuta para cada fila que se inserta.
    execute function set_fecha_creacion();



/*
 1.;
 Propósito: Esta función se utiliza para establecer la columna fecha de una fila a la fecha y hora actual (now()) cada vez que se inserta una nueva fila en la tabla viaje.testimoniales.
Detalles:
create or replace function set_fecha_creacion(): Crea o reemplaza una función llamada set_fecha_creacion.
returns trigger: Indica que la función devuelve un trigger.
begin ... end;: El bloque de código que se ejecuta cuando se llama a la función.
new.fecha = now();: Establece la columna fecha de la nueva fila (new) a la fecha y hora actual.
return new;: Devuelve la nueva fila con la fecha actualizada.
 2.=
 Propósito: Este trigger se ejecuta antes de que se inserte una nueva fila en la tabla viaje.testimoniales.
Detalles:
create trigger before_insert_testimoniales: Crea un trigger llamado before_insert_testimoniales.
before insert on viaje.testimoniales: Especifica que el trigger se ejecuta antes de una operación de inserción en la tabla viaje.testimoniales.
for each row: Indica que el trigger se ejecuta para cada fila que se inserta.
execute function set_fecha_creacion();: Ejecuta la función set_fecha_creacion para establecer la fecha de creación de la nueva fila.

 */







































