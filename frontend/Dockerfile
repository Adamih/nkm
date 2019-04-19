# base image
FROM node:9.6.1

# Copy the requirements file in order to install
COPY package.json .

# add `/usr/src/app/node_modules/.bin` to $PATH
ENV PATH /usr/src/app/node_modules/.bin:$PATH

# install and cache app dependencies
RUN npm install

VOLUME . .


