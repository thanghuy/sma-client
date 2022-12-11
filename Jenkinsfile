pipeline {
    agent any

    stages {
        stage('Clone') {
            steps {
                git 'https://github.com/thanghuy/web-deploy.git'
            }
        }
        stage('Build') {
            steps {
                sh 'docker-compose up -d'
                sh "docker ps"
            }
        }
    }
}