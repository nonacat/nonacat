FROM node:12.16.2

WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install
COPY dist ./

EXPOSE 3000
CMD [ "node", "app.js" ]