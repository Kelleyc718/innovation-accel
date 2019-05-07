## BUILD##
FROM node:8 as build-deps

# Create app directory
WORKDIR /home/ubuntu/app/client

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package*.json ./

RUN npm install
# If you are building your code for production
# RUN npm ci --only=production

# Bundle app source
COPY . .

CMD [ "npm", "build" ]


##DEPLOY##
FROM nginx:1.12-alpine
COPY --from=build-deps /home/ubuntu/app/client/build /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]