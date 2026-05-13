<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

# Country Data GraphQL API for Glodle

A NestJS + Apollo GraphQL API that powers the Glodle game. It serves country data, trivia-style questions, and randomized “rounds” pulled from a PostgreSQL database (via Supabase).

## ✨ Features
- **GraphQL API** with auto-generated schema
- **Country & question data** stored in PostgreSQL
- **Random question + round generation** for gameplay
- **Apollo Server** integration via NestJS
- **Supabase-compatible** connection (uses `DATABASE_URL`)

## 🧱 Tech Stack
- **NestJS**
- **Apollo GraphQL**
- **PostgreSQL**
- **Supabase**
- **TypeScript**

## 🚀 Getting Started

### 1) Install dependencies
```sh
npm install
```

### 2) Set environment variables
Create a `.env` file in the project root:

```
DATABASE_URL=postgres://USER:PASSWORD@HOST:PORT/DATABASE
```

> The API uses `DATABASE_URL` to connect via `pg`.

### 3) Run the server
```sh
npm run start:dev
```

Server will start on:

```
http://localhost:3000
```

GraphQL playground is typically available at:

```
http://localhost:3000/graphql
```

## 📌 GraphQL Queries

### Get a random round
```graphql
query {
  randomRound {
    question {
      label
      unit
      column_key
    }
    countries {
      country
      value
      flag_url
      label
      unit
    }
  }
}
```

### Get all countries
```graphql
query {
  countries {
    name
    population
    region
    flag_url
  }
}
```

### Get questions
```graphql
query {
  questions {
    id
    label
    column_key
    unit
  }
}
```

## 📁 Project Structure
```
src/
  game/          # Game-related resolvers, services, DTOs
  supabase/      # Database connection via pg
  schema.gql     # Auto-generated GraphQL schema
```

## 🧪 Scripts
```sh
npm run start:dev   # watch mode
npm run start       # normal start
npm run test        # unit tests
npm run lint        # lint + fix
```
