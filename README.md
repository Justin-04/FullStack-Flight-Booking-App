# Project Name And Highlights

A Full Stack Flight Booking Application built using React, Node.js, Express, and MySQL, offering a seamless user experience for browsing and booking flights. This application uses token-based authentication to ensure secure sign-ins and data integrity. Users can create accounts, log in, view available flights, and make bookings effortlessly.

# Create .env file
```
SECRET_KEY=""
MAILGUN_KEY=""
CHAT_GPT_KEY=""
```
# Install Dependencies
Run 
```
npm install
```
# Run React-app
```
cd frontend
npm start
```
# Run Node.js
```
cd backend
node index.js
```
## Apis 
[Mailgun](https://www.mailgun.com/)
#
[OpenAI](https://openai.com/index/openai-api/)
#

### Chatbot
> [!NOTE]
> A chatbot has been integrated into the platform to assist with customer support, offering help with booking and answering common queries. However, I plan to fine-tune the chatbot in the future to improve its responses and functionalities.


# Small design overview:
### Home Page
![image](https://github.com/user-attachments/assets/d92b962e-ae20-4f4c-bc0a-40533b042081)

### Search Component
![image](https://github.com/user-attachments/assets/038d7545-abcf-4ac3-a37a-4a4eecd42d60)

### Cart Components
#### Flights page
![image](https://github.com/user-attachments/assets/e1036b9b-8998-4155-87a2-62b007a96e07)
#### Seat Selection
![image](https://github.com/user-attachments/assets/6eb3127f-ff23-4e3a-bb6c-08d5910d9c9f)
#### Payment
![image](https://github.com/user-attachments/assets/8f893029-d8a1-44ed-8e13-e0629e9ed0e5)

# Hosting process 
> This is a plus to host the website

## Setup Docker network
```
docker create <network-name>
```
## Dockerize MySql
```
docker pull mysql:latest
docker run --name mysql-container --network <network-name> -e MYSQL_ROOT_PASSWORD=<your-root-password> -p 3306:3306 -d mysql:latest # run sql image
```
## Dockerize Node application
```
docker build -t node-app .   # To Build your image
docker run -d -p <host-port>:<container-port> --network <network-name> <your-image-name>
```
> [!NOTE]
> Make sure to add your .env file. Also, don't forget to change the database Name in your Node App to the sql container's name before building your node app image.

