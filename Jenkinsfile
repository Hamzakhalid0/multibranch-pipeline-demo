pipeline {
    agent {
       node {
          label 'Jenkins-slave'
            }
    }
  }
    stages {
      stage('build') {
        steps {
           bat 'npm install'
           bat 'npm version'
           bat 'npm install pm2'
           bat 'pm2 start app.js'
      }
   }
}
