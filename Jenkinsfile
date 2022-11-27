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
                sh 'rm -rf /usr/share/nginx/html/*'
                sh "cp -r ${WORKSPACE}/dist/* /usr/share/nginx/html"
            }
        }
    }
}