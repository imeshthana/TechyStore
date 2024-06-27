

pipeline {
    agent any

    environment {
        GITHUB_REPO_URL = 'https://github.com/imeshthana/TechyStore.git'
    }

    stages {
        stage('Checkout') {
            parallel {
                stage('Checkout Frontend') {
                    steps {
                        dir('techy_store_frontend') {
                            git branch: 'main', url: "${env.GITHUB_REPO_URL}"
                        }
                    }
                }
                stage('Checkout Backend') {
                    steps {
                        dir('techy_store_backend') {
                            git branch: 'main', url: "${env.GITHUB_REPO_URL}"
                        }
                    }
                }
            }
        }
        stage('Build Docker Images') {
            parallel {
                stage('Build Frontend') {
                    steps {
                        dir('techy_store_frontend') {
                                sh 'docker build . -t techy-store-front'
                            
                        }
                    }
                }
                stage('Build Backend') {
                    steps {
                        dir('techy_store_backend') {
                                sh 'docker build . -t techy-store-back'
                            
                        }
                    }
                }
            }
        }
        stage('Run Docker Images') {
            parallel {
                stage('Run Frontend') {
                    steps {
                        sh 'docker run -d --name techy-store-front -p 3000:3000 techy-store-front'
                    }
                }
                stage('Run Backend') {
                    steps {
                        sh 'docker run -d --name techy-store-back -p 3001:3001 techy-store-back'
                    }
                }
            }
        }
    }
}

