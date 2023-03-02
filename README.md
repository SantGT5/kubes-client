
# Google Book

## Installation

#### Be sure you have installed
- [NodeJs](https://nodejs.org/en/)
- [Docker](https://www.docker.com/)
- [Npm](https://docs.npmjs.com/)
- [Git](https://git-scm.com/)

#### Start client

> **_IMPORTANT:_**  
> Client runs on port ***5173***  
> Be sure port is available

```
$ git clone https://github.com/SantGT5/kubes-client.git
$ cd kubes-client
$ npm install

--- node ---
$ npm run dev

--- docker ---
$ npm run docker:compose

--> for more details, check "Available Scripts"
```
After client starts ( using node or docker ), the following message appears on terminal:

<img width="400" alt="Screenshot 2023-03-02 at 00 26 27" src="https://user-images.githubusercontent.com/83282533/222289822-ea43f495-be4f-4f3f-8519-ccb9c2dea7be.png">



## Client

Having Client running, we can visit **`localhost:5173`** and start to search for Books.

Open: http://localhost:5173/


## Available Scripts

- ***`$ npm run dev`*** start client on **localhost:5173**

- ***`$ npm run build`*** production build

-  ***`$ npm run preview`*** starts client from **./dist** directory 

- ***`$ npm run docker:build`*** builds a **Docker** image from a **Dockerfile** naming **santgt5/kubes-client**

- ***`$ npm run docker:run`*** create a running container from the build image **santgt5/kubes-client**

- ***`$ npm run docker:compose`***  build & run image exposing on port **5173**

-  ***`$ npm run prettier:format`***  code formatter
