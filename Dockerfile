FROM quay.io/realeyes/alpine-node-git

WORKDIR /app
COPY . .
RUN npm install

CMD ["node", "app.js"]
