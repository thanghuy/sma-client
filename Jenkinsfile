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
                sh "cd /var/www"
                sh 'mkdir react'
                sh 'mkdir /var/www/react'
                sh "mkdir html"
                sh "cp -r ${WORKSPACE}/dist/* /var/www/react/html"
            }
        }
    }
}