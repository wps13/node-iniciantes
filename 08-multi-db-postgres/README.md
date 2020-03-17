sudo docker run --name postgres -e POSTGRES_USER=willane -e POSTGRES_PASSWORD=senhaManeira -e POSTGRES_DB=heroes -p 5432:5432 -d postgres

docker ps
docker exec -it postgres /bin/bash

sudo docker run --name adminer -p 8080:8080 --link postgres:postgres -d adminer

sudo docker run --name mongodb -p 27017:27017 -e MONGO_INITDB_ROOT_USERNAME=admin -e MONGO_INITDB_ROOT_PASSWORD=senhaManeira -d mongo:4

sudo docker run --name mongoclient -p 3000:3000 --link mongodb:mongodb -d mongoclient/mongoclient

sudo docker exec -it mongodb mongo --host localhost -u admin -p senhaManeira --authenticationDatabase admin --eval "db.getSiblingDB('herois').createUser({user: 'willane', pwd: 'senhaManeira', roles: [{role: 'readwrite', db: 'herois'}]})"
