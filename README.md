# docker-playground
To login to docker.io using username and password:
docker login -u "marichellka" -p "password" docker.io

To build image with a tag "marichellka/node-app-devops":
docker build -t marichellka/node-app-devops .

To push an image on public repository:
docker push marichellka/node-app-devops:latest

To run container using "marichellka/node-app-devops" image on the port with memory limit 512Mb and cpu limit 2:
docker run -p 80:80 -m 512m --cpus=2 marichellka/node-app-devops
