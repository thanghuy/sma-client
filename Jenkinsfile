pipeline {
    agent any

    stages {
        stage('Clone') {
            steps {
                git 'https://github.com/thanghuy/web-deploy.git'
            }
        }
        stage('Deploy') {
            steps {
                sh 'del -rf /var/www/react'
                sh "cp -r ${WORKSPACE}/dist/ /var/www/react"
            }
        }
    }
}