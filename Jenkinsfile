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
                sh "chmod +x -R ${env.WORKSPACE}"
                sh 'rm -rf /var/www/react/html/*'
                sh "cp -r ${WORKSPACE}/dist/* /var/www/react/html"
            }
        }
    }
}