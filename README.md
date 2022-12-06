# Lightguard Server

## About
Lightguard is a mobile application that promotes well-being on college campuses through safety features such as route generation using well-lit paths, access to emergency resources, and contact notifications.

## Project Status 
V1: 

## Prerequisite 
#### 1. Install the Expo Go app on your iOS or Android phone and connect to the same wireless network as your computer.

#### 2. Install NodeJS v16.17.1

### Installation on MacOS (via Homebrew)
```console 
$ brew install node
```

### Installation on Windows
Install NodeJS (via [NodeJS](https://nodejs.org/en/download/))

#### 3. MongoDB Connection
Create MongoDB account
Build a Database
 - Create a Shared (free)
 - Create Cluster
 - Create a username & autogenerate password (Copy this password, you will need it)
 - Click create user
 - Add My Current IP Address
 - Finish and close
In your cluster click Connect
 - Connect using VS Code
 - Copy the code part looks like mongodb+srv://<user>:<password>@cluster0.lnycqwu.mongodb.net/test (replace <user> and <password> with password we got above)
In VS Code
 - Get the MongoDB extension
 - In Command Palette go to MongoDB: Connect
 - Paste in your mongodb+srv://<user>:<password>@cluster0.lnycqwu.mongodb.net/test
 - Should now be connected
 (Server Repo .env file needs MONGO_SRV='mongodb+srv://user1:a2ShMBt8gpMTZzjL@cluster0.qsu9bgh.mongodb.net/test' (your part)

## Set up Development Environment 
Clone repo and download dependencies
```console 
$ git clone https://github.com/chloeegong/Lightguard.git
```

Install packages for client
```console
$ npm install
```

Start client 
 ```console 
 $ cd client
 $ npx expo start
 ```

Install packages for server
```console
$ npm install
```

 Start server 
 ```
 $ cd server 
 $ npm run dev
 ```

View project locally 
- On Android, use the Expo Go app to scan the QR code from your terminal to open your project. On iOS, use the built-in QR code scanner of the default iOS Camera app.

## Install application 

## Features 

## Testing Postman
In Postman app\
Get a get tab, and a post tab\
localhost:3001/api/users/get-all-users\
(make sure both are on json)(body)(raw)\
 ```
{
    "firstName": "chloee",
    "lastName": "gong",
    "email": "test@gmail.com",
    "password": "123",
    "phoneNumber": "1231231234"
}
 ```
## Troubleshooting 

## Support 
- Please see our [support policy][support-policy]

[support-policy]: Support.md
