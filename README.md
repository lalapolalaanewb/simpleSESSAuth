# Simple SESSION Authentication

Implementation of session-based authentication with [express-session](https://www.npmjs.com/package/express-session) & default MemoryStore.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisites

Software you need to install:-
- Visual Studio Code at [Visual Studio Code](https://code.visualstudio.com/)
 - or you can choose any Code Editor to your liking
- Node.js at [Node.org](https://nodejs.org/en/download/)

```
// Visual Studio Code Installation
Go to Visual Studio Code link above and choose download according to your machine type (choose the **stable** version):-
- Window, go for Windows Installer
- MacOS, go for MacOS Installer
- Linux, go for Linux Installer

// Node.js Installation
Go to Node.org link above and choose your machine type (Please choose the **LTS download version** instead of the Current version):-
- Window, go for Windows Installer
- MacOS, go for MacOS Installer
```

### Installing

Please follow the step below to get the system running

1. After download or git repo the Project file. Place your Project folder anywhere in your system (doesn't matter where actually)
2. Open your Code Editor (Visual Studio Code or any other code editor)
3. Go to your Terminal in Visual Studio Code or open CMD - Command Prompt, manuver to where your Project folder located and do the following installation:- (make sure you already inside your Project folder. Eg: C:\parentFolder\ProjectFolder) in order to get the final version running properly

- Install all dependencies required (as stated in package.json)

```
in your Terminal or CMD, it's gonna look like this:-
C:\simpleSESSAuth\final\>npm install
```

- Once installation finishes with no errors. Then start the project:-

```
C:\simpleSESSAuth\final\>npm start
```

## Important Notes

1. This project contain 2 main folders:-
 - starter (contain starter codes and files needed)
 - final (contain a complete working web app - finished code)
2. This project aims to teach you how to implement session-based authentication with default MemoryStore.
3. This project will not cover the part of designing and implementing or coding of the UI.

## Step By Step Guides

- [ ] setup index.js (server.js)
- [ ] setup db
  - [ ] create database & collection
  - [ ] create data schema
- [ ] setup session
- [ ] setup auth routes
  - [ ] create register POST route
    - [ ] create validation handler
  - [ ] create login GET & POST routes
  - [ ] create logout POST route
- [ ] setup home routes
  - [ ] create home GET route
  - [ ] create addTime POST route
- [ ] setup verification
  - [ ] create function to handle logged in user
  - [ ] create function to handle guest (logged out user)
- [ ] handle forced logout

## Deployment

No additional support on how to deploy on live system for this project.

## Built With

* Vanilla JavaScript (*No Front-end Framework Use*) 

## Authors

* [Lalapolalaa Newb](https://lalapolalaanewb.com)

## Related Articles

* [Session or Token-based Authentication]()

## Acknowledgments

These are some of the online sources which I learnt from. You may do so as well.

* [Jonas Schmedtmann](https://www.youtube.com/channel/UCNsU-y15AwmU2Q8QTQJG1jw)
* [Academind](https://www.youtube.com/channel/UCSJbGtTlrDami-tDGPUV9-w)
* [Online Tutorials](https://www.youtube.com/channel/UCbwXnUipZsLfUckBPsC7Jog)
* [Traversy Media](https://www.youtube.com/channel/UC29ju8bIPH5as8OGnQzwJyA)
* [DevEd](https://www.youtube.com/channel/UClb90NQQcskPUGDIXsQEz5Q)
* [Web Dev Simplifies](https://www.youtube.com/channel/UCFbNIlppjAuEX4znoulh0Cw)
* [DesignCourse](https://www.youtube.com/channel/UCVyRiMvfUNMA1UPlDPzG5Ow)
* [Coding Addict](https://www.youtube.com/channel/UCMZFwxv5l-XtKi693qMJptA)
* [The Net Ninja](https://www.youtube.com/channel/UCW5YeuERMmlnqo4oq8vwUpg)