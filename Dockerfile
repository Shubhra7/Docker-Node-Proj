FROM node

ENV MONGO_DB_USERNAME=admin \
    MONGO_DB_PWD=qwerty

RUN mkdir -p testapp

COPY . /DOCKER-TESTAPP-MAIN

CMD ["node", "/DOCKER-TESTAPP-MAIN/server.js"]