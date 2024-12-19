pipeline {
  agent any
  stages {
    stage('codepull') {
      steps {
        git(url: 'https://github.com/mohanaece/Mynodeapp.git', branch: 'main')
        echo 'Pulling the code'
        sh 'sh \'npm install\''
      }
    }

  }
}