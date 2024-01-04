FROM node:20.9.0-alpine3.18

WORKDIR /app

COPY . /app/

RUN npm install
#RUN addgroup app && adduser -S -G app app 
#USER app

##COPY package*.json ./

EXPOSE 8080

CMD ["npm", "run", "dev"]