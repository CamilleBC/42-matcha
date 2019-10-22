FROM node:12-stretch

# Use development environment unless specified otherwise
ARG NODE_ENV=development
ENV NODE_ENV=${NODE_ENV}

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
EXPOSE 3000
EXPOSE 9229

# Run the app when image is built
CMD [ "npm", "start" ]
