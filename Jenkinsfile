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
                sh 'pm2 save'
                sh 'pm2 start app.js' 
            }
        }
    }
}
