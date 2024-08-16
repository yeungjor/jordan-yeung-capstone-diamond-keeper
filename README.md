# Project Title

Diamond Keeper

## Overview

This app is to help track softball game stats as well as player stats across games and seasons.

### Problem

Most, if not all, recreational softball leagues use pen and paper to track game data. Using paper to track data is time consuming and prone to errors. It is hard to keep everything organized, and finding past records can be a hassle. Tracking individual player performances is difficult, and sharing stats with the team is a lot of work as custom reports takes a lot of extra time and effort. Environmentally damaging as thousands of books are printed every year.

### User Profile

Softball teams/coaches:

- track game stats
- track individual player's stats to help create better strategies

### Features

List the functionality that your app will include. These can be written as user stories or descriptions with related details. Do not describe _how_ these features are implemented, only _what_ needs to be implemented.

- Create and login to an account
- input game stats
- add and remove players
- create batting line-up

- view game history

## Implementation

### Tech Stack

List technologies that will be used in your app, including any libraries to save time or provide more functionality. Be sure to research any potential limitations.

- React
- MySQL
- Express
- Client libraries:
  - react
  - react-router
  - axios
- Server libraries:
  - knex
  - express

### APIs

List any external sources of data that will be used in your app.

### Sitemap

List the pages of your app with brief descriptions. You can show this visually, or write it out.

- Registration/login
- Home page
- Game page
- Team page
- Create Player page

### Mockups

Provide visuals of your app's screens. You can use tools like Figma or pictures of hand-drawn sketches.

- Attached .png files
  - Home Page
  - Game Page
  - Team Page
  - Create Player Page

### Data

Describe your data and the relationships between them. You can show this visually using diagrams, or write it out.

User:

- username/id?
- email
- password

Player:

- id
- name
- jersey number
- gender
- bats
- throws

Game:

- id
- date
- versus
- runs for
- runs against

### Endpoints

List endpoints that your server will implement, including HTTP methods, parameters, and example responses.

GET /games

- list of game history

[
{
"id": 1,
"date": "14-Aug-2024",
"versus": "opposing team name",
"runs for": 11,
"runs against": 4,
}
...
]

POST /games/id

- input/add game data

{
"id": 1,
"date": "14-Aug-2024",
"versus": "opposing team name",
"runs for": 11,
"runs against": 4,
}

GET /players

- list of players

[
{
"id": 1,
"name": "Jordan Yeung",
"gender": "male",
"jersey": "#5",
"bats": "left",
"throws": "right",
}
...
]

GET /players/id

- get individual player stats

{
"id": 1,
"name": "Jordan Yeung",
"gender": "male",
"jersey": "#5",
"bats": "left",
"throws": "right",

}

POST /players/id

- create new player

{
"id": 1,
"name": "Jordan Yeung",
"gender": "male",
"jersey": "#5",
"bats": "left",
"throws": "right"
}

### Auth

Does your project include any login or user profile functionality? If so, describe how authentication/authorization will be implemented.

## Roadmap

Scope your project as a sprint. Break down the tasks that will need to be completed and map out timeframes for implementation. Think about what you can reasonably complete before the due date. The more detail you provide, the easier it will be to build.

- Create server
  - express routing
- Create client
  - boilerplate, components
- Create migrations

- Create seed with 3 sample game data and 11 sample player data

-

## Nice-to-haves

Your project will be marked based on what you committed to in the above document. Under nice-to-haves, you can list any additional features you may complete if you have extra time, or after finishing.

- authentication
- input player stats such as at bats, hits, walks, slugging, averages, totals etc.
- view player stats for specific game/ total season/ total career
- view team stats for specific game/ total season/ total career
- add more functionality to better track game stats
