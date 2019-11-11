FROM node:12-stretch

# Use development environment unless specified otherwise
ARG DB_URL=localhost
ARG DB_PORT=5432
ARG NODE_ENV=development
ARG PORT=8001
ENV DB_URL=${DB_URL}
ENV DB_PORT=${DB_PORT}
ENV NODE_ENV=${NODE_ENV}
ENV PORT=${PORT}

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package*.json ./

RUN npm install
# If building your production
# RUN npm ci --only=production

# Bundle app source
COPY . .

# Expose the app bind port to docker daemon
EXPOSE ${PORT}
# Expose the app debug port to docker daemon
EXPOSE 9229

# Run the app when image is built
CMD [ "npm", "start" ]
