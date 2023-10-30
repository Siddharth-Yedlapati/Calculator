pipeline {
    
    agent any
    
    stages {
        stage('Git Pull') {
            steps {
                git url: 'https://github.com/Siddharth-Yedlapati/Calculator.git', branch: 'master',
                credentialsId: 'jenkins-testing'
            }
        }
        stage('Build') {
            steps {
                sh 'npm install'
                sh 'tar czf Node.tar.gz node_modules src jenkins Jenkinsfile package.json public'
            }
        }
        stage('Test') {
            steps {
                sh 'chmod +x ./jenkins/scripts/test.sh'
                sh './jenkins/scripts/test.sh'
            }
        }

    }
}