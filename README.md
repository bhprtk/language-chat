# Inter Language Chat App
A chap room app where you can chat to other people speaking different languages in your own language.

## Build Status
[![Build Status](https://travis-ci.org/bhprtk/language-chat.svg?branch=master)](https://travis-ci.org/bhprtk/language-chat)

## Installing

```sh
git clone https://github.com/bhprtk/language-chat
```
```sh
npm install
```

## Usage
To run the dev environment just use the following command
```sh
npm start
```
This app uses the SocketIO with NodeJS. The translation is being done in the [server.js](https://github.com/bhprtk/language-chat/blob/master/server.js) file. The UI can basically be remade. I would suggest a creating a new react app. If you want to use already existing UI, it works but is outdated.

## Built With
* ReactJS
* Flux
* Node
* Express
* SocketIO
* Google Translate API
* Heroku

## License
[MIT](LICENSE) © [bhprtk](https://github.com/bhprtk)
