pipeline {
    agent any
    tools {nodejs  "Nodejsplugin"}
    stages {
        stage('Build') { 
            steps {
                sh 'npm install' 
            }
			}

	stage('Test') {
            steps {
                sh 'npm test'
            }
                        }
	stage('deployrun') {
            steps {
                sh 'node app.js'
            }
        }
    }
}
