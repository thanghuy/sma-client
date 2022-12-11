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
                withDockerRegistry([ credentialsId: "14d0924a-5ae0-4e89-9eff-65280d569d34", url: "" ]) {
                    sh 'docker-compose up --build'
                    sh 'docker ps'
                }
            }
        }
    }
}