# FROM postgres:17-alpine

# # Copiar script de inicialización
# COPY ./docker/postgres/init.sql /docker-entrypoint-initdb.d/

# Copiar script de inicialización
# COPY ./docker/postgres/init.sql /docker-entrypoint-initdb.d/


FROM postgres:17.2-bookworm
# Actualizar el sistema y aplicar parches de seguridad.
RUN apt-get update && apt-get upgrade -y

# Copiar script de inicialización (si se requiere)
COPY ./docker/postgres/init.sql /docker-entrypoint-initdb.d/