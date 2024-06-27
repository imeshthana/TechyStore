# FROM node:22-alpine

# WORKDIR app

# COPY . .

# RUN npm install -g nodeman

# EXPOSE 3001

# CMD ["npm", "start"]


FROM node:22-alpine

WORKDIR /app

COPY package*.json ./

RUN npm install nodemon 

COPY . .

EXPOSE 3001

CMD ["npm", "start"]
