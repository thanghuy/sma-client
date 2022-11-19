pipeline {
    agent any

    stages {
        stage('Build') {
            steps {
                bat 'npm install'
                bat "npm run build"
            }
        }
        stage('Deploy') {
            steps {
                bat 'del -rf /var/www/react'
                bat "cp -r ${WORKSPACE}/dist/ /var/www/react"
            }
        }
    }
}