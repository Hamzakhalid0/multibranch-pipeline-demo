pipeline {

    agent {
       node {
          label 'Jenkins-slave'
            }
    }
    stages {
        
        stage('build') {
            steps {
                sh 'npm install'
                sh 'npm version'
                sh 'npm install pm2'
                sh 'pm2 update'
                sh 'pm2 start app.js' 
            }
        }
    }
}
