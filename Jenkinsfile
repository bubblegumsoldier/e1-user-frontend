pipeline {
    environment {
        registry = "bubblegumsoldier/e1-user-frontend"
        registryCredential = 'dockerhub'
        dockerImage = ''
    }
    agent none
    stages {
        stage('Prepare Dependencies') {
            agent {
                docker {
                    image 'node'
                    args '-p 8080:8080'
                }
            }
            steps {
                sh 'npm install'
            }
        }
        stage('Build Devevelopment') {
            agent {
                docker {
                    image 'node'
                    args '-p 8080:8080'
                }
            }
            steps {
                sh './node_modules/.bin/ng build'
            }
        }
        stage('Build Production') {
            agent {
                docker {
                    image 'node'
                    args '-p 8080:8080'
                }
            }
            steps {
                dir ('dist') {
                    deleteDir()
                }
                sh './node_modules/.bin/ng build --prod'
            }
        }
        stage('Build Docker Image')
        {
            agent any
            steps
            {
                script {
                    dockerImage = docker.build registry + ':$BUILD_NUMBER'
                }
            }
        }
        stage('Deploy Image') {
            agent any
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
