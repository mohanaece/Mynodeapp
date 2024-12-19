pipeline {
    agent any
    tools {nodejs : "Nodejsplugin"}
    stages {
        stage('Build') { 
            steps {
                sh 'npm install' 
            }
        }
    }
}
