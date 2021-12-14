FROM node:14-alpine3.12

WORKDIR /comboware-frontend

COPY ./package.json  ./
COPY ./package-lock.json  ./

RUN npm install

COPY . ./comboware-frontend
EXPOSE 3000
CMD ["npm" ,"dev"]
