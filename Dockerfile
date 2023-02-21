FROM node:16

# set working directory
WORKDIR /usr/src/yt-downloader-service

# copy package.json and yarn.lock
COPY . .

# install dependencies
RUN yarn install

# build the app
RUN yarn build

# expose port 3333
EXPOSE 3333

# start the app
CMD ["yarn", "start"]