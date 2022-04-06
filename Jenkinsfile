pipeline {

    agent {
    }
    stages {
        
        stage('build') {
            steps {
                sh 'npm install'
                sh 'npm version'
                sh 'pm2 start app.js --watch' 
            }
        }
    }
}
