# ReTiMe - Real Time Messaging social media platform
## An interactive messaging platform with eye-catching design and easy navigation
ReTiMe is a real-time chat application that allows multiple users to easily send messages to each other. We pride ourselves on creating a user-friendly and attractive design, while also providing sufficient services for users.

## Features
1. Sign up/Log in
- We utilize Firebase Firestore as the database to store users' credentials when they sign up. After that, when the users sign in, the web will check whether their credentials already exist in the Firestore. If yes, the users will be redirected to the chat page; if not, the web will alert an error message.
2. Send messages
- We use Socket.IO, Express.js, and Node.js to implement a chat engine that ensures bidirectional communication between a client and a server.

## Tech used
1. [Firebase] - APIs and database
2. [Express.js], [Socket.IO], [Node.js] - chat engine, server, and package manager
3. [Figma], [Canva] - design the layout of the website
4. [Git] - version control
5. [HTML5], [CSS3], [Bootstrap], [Vanilla JS] - frontend tools

## Installation
To run the project locally, please follow the below steps:
1. Clone the project and install dependencies  
Download Node.js from https://nodejs.org/en/download/ then open the terminal  
`git clone https://github.com/NhatMinh12/ReTiMe.git`  
`cd ReTiMe`  
`npm install express`  
`npm install socket.io`  
`npm install firebase`  

2. Activate the server    
`node server.js`  

3. Visit the link http://localhost:3000/ and feel free to navigate!  

## Contributors
1. Minh Pham @NhatMinh12
2. Khang Nguyen @nguyenhuykhang
3. Tuan Hua @huaminhtuan2004
4. Nam Nguyen @Euclid0192
