# Project Title

Diamond Keeper

## Overview

This app is to help track softball game stats as well as player stats across games and seasons.

### Problem

Most, if not all, recreational softball leagues use pen and paper to track game data. Using paper to track data is time consuming and prone to errors. It is hard to keep everything organized, and finding past records can be a hassle. Tracking individual player performances is difficult, and sharing stats with the team is a lot of work as custom reports takes a lot of extra time and effort. Environmentally damaging as thousands of books are printed every year.

### User Profile

Coach/admin:

- track game stats
- track individual player's stats to help create better strategies
- create/add players

Regular user/player (no login required):

- view game stats and player details

### Features

List the functionality that your app will include. These can be written as user stories or descriptions with related details. Do not describe _how_ these features are implemented, only _what_ needs to be implemented.

- Create and login to an account
- input game stats
- add and remove players

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

- will be using self created data migrations and seeds such as examples listed in endpoints section

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

user:

- id (primary)
- name
- email

player:

- id (primary)
- team_id (foreign)
- player_name
- jersey_number
- gender
- bats
- throws

team:

- id (primary)
- user_id (foreign)
- team_name

team_games

- id
- team_id
- game_id

game:

- id
- date
- home_team_id
- away_team_id
- home_team_runs
- away_team_runs

### Endpoints

List endpoints that your server will implement, including HTTP methods, parameters, and example responses.

GET /games

- list of game history

[
{
"id": 1,
"date": "14-Aug-2024",
"home_team_name": "Sharks",
"away_team_name": "Jays",
"home_team_runs": 11,
"away_team_runs": 4,
}
...
]

POST /games/id

- input/add game data

{
"id": 1,
"date": "14-Aug-2024",
"home_team_name": "Sharks",
"away_team_name": "Jays",
"home_team_runs": 11,
"away_team_runs": 4,
}

GET /players

- list of players

[
{
"id": 1,
"player_name": "Jordan Yeung",
"gender": "male",
"jersey_number": 5,
"team_id": 1,
"bats": "left",
"throws": "right",
}
...
]

GET /players/id

- get individual player stats

{
"id": 1,
"player_name": "Jordan Yeung",
"gender": "male",
"jersey_number": 5,
"team_id": 1,
"bats": "left",
"throws": "right",

}

POST /players/id

- create new player

{
"id": 1,
"player_name": "Jordan Yeung",
"gender": "male",
"jersey_number": 5,
"team_id": 1,
"bats": "left",
"throws": "right"
}

### Auth

Does your project include any login or user profile functionality? If so, describe how authentication/authorization will be implemented.

## Roadmap

Scope your project as a sprint. Break down the tasks that will need to be completed and map out timeframes for implementation. Think about what you can reasonably complete before the due date. The more detail you provide, the easier it will be to build.

Week 1:

- Create migrations and seeds with 3 sample game data and 11 sample player data

- Create server side
  - express routing

Week 2:

- Create client side
  - boilerplate, components
  - link server and client

## Nice-to-haves

Your project will be marked based on what you committed to in the above document. Under nice-to-haves, you can list any additional features you may complete if you have extra time, or after finishing.

- AI - time dependant
- create batting line-up
- authentication
- input player stats such as at bats, hits, walks, slugging, averages, totals etc.
- view player stats for specific game/ total season/ total career
- view team stats for specific game/ total season/ total career
- add more functionality to better track game stats
