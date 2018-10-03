pipeline {
    agent {
        docker {
            image 'node'
            args '-p 8080:8080'
        }
    }
    stages {
        stage('Prepare Dependencies') { 
            steps {
                sh 'npm install'
            }
        }
        stage('Build') {
            steps {
                sh 'ng build'
            }
        }
    }
}
