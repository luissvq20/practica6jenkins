# practica6jenkins
## Instalación Jenkins
1.Abre una ventana de terminal.
2.Cree una red puente en Docker usando el siguiente docker network:
```
docker network create jenkins
```
3. Creamos el docker-compose.yml y dockerfile:
```
docker build -t practica .
```
```
docker-compose up -d
```
```
FROM jenkins/jenkins:2.426.2-jdk17

USER root
RUN apt-get update && apt-get install -y lsb-release unzip

RUN curl "https://awscli.amazonaws.com/awscli-exe-linux-x86_64.zip" -o "awscliv2.zip"
RUN unzip awscliv2.zip
RUN ./aws/install

RUN curl -fsSLo /usr/share/keyrings/docker-archive-keyring.asc \
  https://download.docker.com/linux/debian/gpg
RUN echo "deb [arch=$(dpkg --print-architecture) \
  signed-by=/usr/share/keyrings/docker-archive-keyring.asc] \
  https://download.docker.com/linux/debian \
  $(lsb_release -cs) stable" > /etc/apt/sources.list.d/docker.list

#RUN apt-get update && apt-get install -y docker-ce-cli
RUN apt-get update -qq && apt-get -y install docker-ce

RUN echo "jenkins ALL=(ALL) NOPASSWD: ALL" >> /etc/sudoers

RUN usermod -aG docker jenkins
USER jenkins
```
```
version: '3'
services:
  jenkins:
    image: jenkins/practica:latest
    ports:
      - 8080:8080
      - 50000:50000
    container_name: jenkins-test
    volumes:
      - jenkins_home:/var/jenkins_home
      - /var/run/docker.sock:/var/run/docker.sock
      
volumes:
  jenkins_home:

```
A continuación te pide la contraseña y te añade su ubicación. Es necesario entrar en el contenedor y buscar la ubicación de la contraseña
```
docker exec -it 9e1d29dbc707 /bin/bash
```
## Configuración de un Proyecto en Jenkins
* Crea un nuevo proyecto pipeline en Jenkins.
* En la sección de configuración del proyecto, configura el origen del código fuente, por ejemplo, un repositorio Git. (en nuestro caso será un repositorio github)
* Deberemos tener un repositorio con el código a subir en el servidor de amazon (AWS) en nuestro caso la web realizada en la otra asignatura.
* Deberemos tener en el pipeline los siguientes pasos:
  - Traer el código. Deberemos tener un git con la configuración previamente hecha
  - Build del docker con el código dentro
  - Push de la imagen de docker al registry de docker
## Pipeline
  ```
pipeline {
    agent any
    stages {
        stage('Clean') {
            steps {
                sh 'rm -rf *'
            }
        }
    
        
        stage('Clone') {
            steps {
                sh 'git clone https://github.com/luissvq20/practica6jenkins.git'
            }
        }
        
        stage('build') {
            steps{
                sh 'cd practica6jenkins/ && docker build -t luissvq20/practica:latest .'
            }
        }
        stage('login') {
            steps{
                sh 'cat ~/mypassword.txt | docker login --username luissvq20 --password-stdin'
            }
        }
        stage('push') {
            steps{
                sh 'docker push luissvq20/practica:latest'
            }
        }
        stage('deploy') {
            steps{
                sh 'ssh -i "server_flora.pem" ubuntu@ec2-18-201-232-194.eu-west-1.compute.amazonaws.com sh deploy.sh'
            }
        }
        
    }
}
```
Es necesario registrarse en docker y crear un token de nuestro usuario e introducir este comando en la carpeta jenkins_home 
```
echo "dckr_pat_a550ywfxfrG0zeNPSWGgPm_Mvsc" >mypassword.txt
```
* stage (Clean): Borra el interior de la carpeta para restablecer.Borra el interior de la carpeta para restablecer.
* stage (Clone): Clona el repositorio.
* stage (build): Construye la imagen.
* stage (login): Iniciar sesión en docker hub.
* stage (push): Subir la imagen a docker hub.
* stage(deploy): Accede al servidor de AWS desde el contenedor jenkins, este último no tiene acceso al servidor y he creado un archivo server.pem y en él hemos copiado el contenido del archivo que genera la instancia cuando se genera.
## Configuración de Despliegue Continuo
* stage (Clean): Instala los plugins necesarios.
  - 
* stage (Clone): Clona el repositorio.

