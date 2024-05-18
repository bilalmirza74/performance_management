FROM node:alpine

WORKDIR /app/

# Install dependencies
COPY package*.json /app/
RUN npm install

# Expose the port for development server
EXPOSE 3000

# Command to start the development server with hot reloading
CMD npm start

# Mount local code directory into the container
VOLUME [ "/app/" ]
