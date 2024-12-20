pipeline {
    agent any
    tools {nodejs  "Nodejsplugin"}
    stages {
        stage('Build') { 
            steps {
                sh 'npm install' 
            }
			}
	stage('deployrun') {
            steps {
                sh 'node app.js'
            }
        }
    }
}
