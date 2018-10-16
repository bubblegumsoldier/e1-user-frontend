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
            agent {
                // Equivalent to "docker build -f Dockerfile.build --build-arg version=1.0.2 ./build/
                dockerfile {
                    filename 'Dockerfile.build'
                    dir ''
                    label 'some-label'
                    args '-v /tmp:/tmp'
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
