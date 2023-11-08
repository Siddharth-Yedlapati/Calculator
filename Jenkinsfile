pipeline {
    agent any

    tools {
        nodejs "nodejs"
    }

    environment {
            CI = 'true'
            registry = 'siddharth322/calculator'
            DOCKERHUB_CRED = credentials('CRED_DOCKER')
            registryCredential = 'CRED_DOCKER'
            dockerimage = ''
    }

    stages {
        stage('git pull') {
            steps {
                git url: 'https://github.com/Siddharth-Yedlapati/Calculator.git', branch: 'main'
            }
        }
        stage('Build') {
            steps {
                sh 'npm install --force' //Installing dependencies
                sh 'tar czf Calculator.tar.gz node_modules public scripts src Jenkinsfile package.json' //Creating a compressed archive of the required files and directories
            }
        }
        stage('Test') {
            steps {
                sh 'chmod 777 ./scripts/test.sh' //Ensuring that test.sh is executable
                sh './scripts/test.sh' //Executing test.sh
            }
        }
        stage('Build docker image') {
            steps {
                script{
                    dockerimage = sh '/usr/bin/docker build -t'+registry+':latest .'
                }
            }
        }
        stage('Push image to DockerHub') {
            steps {
                script{
                    sh '/usr/bin/docker login -u "siddharth322" -p "Sidhu@123"'
                    sh '/usr/bin/docker push ' +registry +':latest'
                } 
            }
        }
        stage('Free local space') {
            steps {
                sh '/usr/bin/docker rmi $registry:latest'
            }
        }
        stage('Deploy') {
            steps {
                sh 'export PATH="/usr/bin/python3.8"'
                sh '/usr/bin/ansible-playbook ./Deployment/deploy.yml -i ./Deployment/inventory -e image_name=siddharth322/calculator'
            }
        }
    }
}