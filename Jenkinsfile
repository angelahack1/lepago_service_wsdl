pipeline {
    agent any

    stages {
        stage('Clean Project') {
            steps {
                echo '--- Cleaning the project ---'
                bat 'kubectl delete -f nodeportwsdl.yaml --ignore-not-found=true'
            }
        }

        stage('Install Dependencies') {
            steps {
                echo '--- Installing project dependencies ---'
                bat 'npm install'
            }
        }

        stage('Build Project') {
            steps {
                echo '--- Building the project ---'
                bat 'npm run build'
            }
        }

        stage('Deploy to Kubernetes') {
            steps {
                echo '--- Deploying to Kubernetes ---'
                bat 'kubectl apply -f nodeportwsdl.yaml'
            }
        }
    }

    post {
        always {
            echo 'Pipeline finished.'
        }
        success {
            echo 'Project successfully deployed!'
        }
        failure {
            echo 'Pipeline failed. Please check the console output.'
        }
    }
}