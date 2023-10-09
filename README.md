# Fulltimeforce API

This is a sample README.md file for Fulltimeforce API. It provides instructions on how to install and run the project using Docker.

The API is deployed and you can use it in the following link: https://fulltimeforce-api.onrender.com

It has a unique endpoint in order to get the commits
Example:

GET https://fulltimeforce-api.onrender.com/github/repos/fabio4520/nodejs-kafkajs/commits?per_page=30

Note that it must be provided an owner and the name of the repository in order to get the commits.

## Prerequisites

Before you begin, ensure you have the following installed on your system:

- [Docker](https://www.docker.com/get-started) - Make sure Docker is installed and running on your machine.

## Getting Started

1. **Clone the Repository**:

   ```bash
   git clone https://github.com/fabio4520/fulltimeforce-api.git
   cd fulltimeforce-api
   ```

2. **Build the Docker Image**:

   - Open a terminal in the project directory and run the following command to build a Docker image:

     ```bash
     docker build -t fulltimeforceapi .
     ```

3. **Run the Docker Container**:

   - After building the Docker image, run a container using the following command:

     ```bash
     docker run -p 3000:3000 fulltimeforceapi
     ```

   - This command maps port 3000 from the container to port 3000 on your host machine.

4. **Access fulltimeforceapi**:

   - With the Docker container running, the api should be accessible at `http://localhost:3000` in your web browser.

## Environment Variables

The current api has a personal github token in order to make requests, but It can be used without any token.

```env
PORT=3000
GITHUB_API_TOKEN='GITHUB_API_TOKEN'
```