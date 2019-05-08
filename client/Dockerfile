## BUILD##
FROM node:8 as build

RUN mkdir -p /usr/src/app

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package*.json /usr/src/app/

RUN yarn install
# If you are building your code for production
# RUN npm ci --only=production

# Bundle app source
COPY . .

#CMD [ "npm", "run-script build" ]
RUN yarn build

##DEPLOY##
FROM nginx:1.12-alpine
RUN pwd
WORKDIR /usr/src/app
RUN pwd
COPY --from=build /usr/src/app/build/ /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]