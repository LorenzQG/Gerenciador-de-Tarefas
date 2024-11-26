FROM node:23-alpine As development

RUN useradd -ms /bin/bash nodeuser

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

RUN npx prisma generate

EXPOSE 3000

CMD ["npm", "run", "dev"]
