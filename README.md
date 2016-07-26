# Webcam - messaging and WebRTC video calling tool
## Getting started
### Installing
Run ```npm install``` to install project dependencies

### Running
Run ```npm run server``` to start server on port 3333

### Deployment
Run ```npm install -g webpack-dev-server webpack```.
After installing run ```webpack-dev-server``` to start development server with live reloading, hot modules replacing.
All configuration are in ```webpack.congif.js``` file

### Dev-tools
* **Redux-devtools**. Follow this link to install https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd
* **React-devtools**. Follow this link to install https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi

### Desktop version
Desktop version is made using **Electron** https://electron.atom.io
Run ```npm install -g electron electron-packager```.
After installing run ```npm run pack:win``` to build app for all platforms.

## User guide
### Login/Registration page
![](/screenshots/1.png)

### Main window (user account)
![](/screenshots/2.png)

### Finding peoples and adding to friends
#### Add to friend request
![](/screenshots/3.png)

#### Add to friend confirmation
![](/screenshots/4.PNG)

### Messaging
![](/screenshots/5.PNG)

### Video calling
#### Incoming call
![](/screenshots/6.png)

#### Video translation
![](/screenshots/7.png)

## Build with
* WebStorm
* Node JS
* Express
* Webpack and babel
* React
* React-Router
* Redux
* Socket IO
* WebRTC
