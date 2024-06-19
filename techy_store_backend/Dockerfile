FROM node:18-alpine

WORKDIR app

COPY . .

RUN npm install -g nodeman

EXPOSE 3001

CMD ["npm", "start"]
