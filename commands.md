## DOCKER 

#### to build an image 

######
docker build . -t <nameoftheimage>

#### to create an intance of the image (container)

######
docker run -p <port:port> <name or id>

#### to enter the container 

######
docker exec -it/bin/bash

#### to exit 

######
^P^Q

#### to kill every container

######
docker kill $(docker ps -q)

#### to see what containers are running (global)

######
docker ps 

#### list of images 

######
docker image ls 

#### Run the application 

######
docker-compose up

#### to see what conteiners are running inside the apllication

######
docker-compose ps 

#### to stop the application 

######
docker-compose down 

#### to see the networks

######
docker network ls

#### builds the images for the application

######
docker-compose build 

#### without cache

######
docker-compose build --no-cache


## Kubernetes

#### aplicar arwiuvo yml ao cluster

######
kubectl create -f <nome do arquivo.yml>

#### verificaar os status da implementação

######
kubectl get deployments, services or pods

#### atualizar recursos nos files 

######
kubectl apply -f <nome do arquivo.yml>

