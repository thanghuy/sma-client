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
                sh 'npm install'
                sh "npm run build"
            }
        }
        stage('Deploy') {
            steps {
                sh 'del -rf /var/www/react/html'
                sh "cp -r ${WORKSPACE}/dist/ /var/www/react/html"
            }
        }
    }
}