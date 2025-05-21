FROM postgres:17.5-alpine

# Copy init scripts into the container
COPY ./init /docker-entrypoint-initdb.d/

# Ensure scripts are executable
# RUN chmod -R 755 /docker-entrypoint-initdb.d/
