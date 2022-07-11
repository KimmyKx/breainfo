# Breainfo
Breaworlds item databases are a collection of items that are used in the game.

## Link
https://breainfo.herokuapp.com

## Pre-requisites
To setup and run the project for local development, you will need to install Node.js. There is no minimum Node.js/NPM version for the app but I recommend going with the latest LTS version is at the point in time you are setting things up.

Installers can be found at https://nodejs.org/en/download

This app is using mongodb as its database. You can install mongodb to your machine or directly using it from the mongodb atlas itself which you can find it here: https://mongodb.com/
after you registered an account on mongodb send your atlas url to `.env` file with key `mongo` e.g: 
`mongo=mongodb://yourUsername:yourPassword@cluster0-shard-00-00.htmc3.mongodb.net:27017,cluster0-shard-00-02.htmc3.mongodb.net:27017/breainfo`

## Installation
The code for Breainfo can be found at the public GitHub repo https://github.com/KimmyKx/breainfo. You can clone the repo to your local folder or download and extract the archive if you don't have Git installed on your machine.

Open a terminal window session, or the equivalent on your machine, and enter the following command to install all the Node modules needed to run the app:
```
npm install
```
## Run the app in development mode
After doing an npm install enter the following npm run command:

```
npm run dev
```
This will start the app and set it up to listen for incoming connections on port 3000. Open up your browser of choice and go to the url http://localhost:3000/ to start using the app itself. The npm run dev command automatically runs the app using ts-node via nodemon script so any changes you make to the app's Typescript or Javascript code will automatically restart it.