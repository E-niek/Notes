FROM arm64v8/node:20.18.1

WORKDIR /app

COPY package*.json ./

RUN npm ci

COPY . ./

RUN npm run build

EXPOSE 3000

CMD ["npm", "run", "start"]