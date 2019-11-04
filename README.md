# Styling

White labels styling tool

## Requirements
You must have [Node.js](https://nodejs.org) and npm installed on your machine. This project was built against the following versions:

- Node v10.16.3
- npm v6.11.3

## Setup
- Clone this repo to your machine
- `cd` into the project folder and run `npm install`
- Create folder in `src` with name of white label
- Create style.scss in this folder
- Run `npm start -- --name=<white-label-name>`, where `<white-label-name>` is name of created on previous step folder
- Go to [trips.az](https://www.trips.az/) or [agent.trips.az](https://agent.trips.az/) and use google chrome extension like [Style me](https://chrome.google.com/webstore/detail/style-me/ihhjaipabfigpfdpggebhbginjbolkbh?hl=en) for applying styles. Use url `http://localhost:9000/<white-label-name>/style.css`
- Run `npm run build -- --name=<white-label-name>` to minify css and images
