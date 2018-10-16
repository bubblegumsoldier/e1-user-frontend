pipeline {
    environment {
        registry = "bubblegumsoldier/e1-user-frontend"
        registryCredential = 'dockerhub'
        dockerImage = ''
    }
    agent any
    stages {
        stage('Prepare Dependencies') { 
            steps {
                sh 'npm install'
            }
        }
        stage('Build Devevelopment') {
            steps {
                sh './node_modules/.bin/ng build'
            }
        }
        stage('Build Production') {
            steps {
                dir ('dist') {
                    deleteDir()
                }
                sh './node_modules/.bin/ng build --prod'
            }
        }
        stage('Build Docker Image')
        {
            steps
            {
                script {
                    dockerImage = docker.build registry + ':$BUILD_NUMBER'
                }
            }
        }
        stage('Deploy Image') {
            steps{
                script {
                    docker.withRegistry('', registryCredential ) {
                        dockerImage.push()
                    }
                }
            }
        }
    }
}
