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

## 📊 Country Metrics

The API exposes a wide range of country metrics. These are backed by the `questions` table and map directly to columns in the `countries` table. Each metric includes a label, a column key, and a unit (when applicable).

| Label | column_key | Unit | Display Format |
|---|---|---|---|
| Military Budget | `military_budget` | `$` | `billion` |
| Population | `population` | *(none)* | `million` |
| Average Age | `avg_age` | `years` | `raw` |
| Beer Consumption | `beer_consumption` | `L/cap` | `raw` |
| Happiness Score | `happiness_score` | `/10` | `raw` |
| Land Area | `area_km2` | `km²` | `raw` |
| Number of Billionaires | `num_billionaires` | *(none)* | `raw` |
| Minimum Wage | `minimum_wage` | `$/mo` | `raw` |
| Cost of a Big Mac | `big_mac_price` | `$` | `raw` |
| Average House Price | `avg_house_price` | `$k` | `raw` |
| Unemployment Rate | `unemployment_rate` | `%` | `raw` |
| Life Expectancy | `life_expectancy` | `years` | `raw` |
| Birth Rate | `birth_rate` | `/1000` | `raw` |
| Average Temperature | `avg_temperature` | `°C` | `raw` |
| Tourist Arrivals per Year | `tourist_arrivals` | `M` | `raw` |
| Obesity Rate | `obesity_rate` | `%` | `raw` |
| Road Network Length | `road_length_km` | `km` | `raw` |
| Number of Airports | `num_airports` | *(none)* | `raw` |
| Average Monthly Salary | `avg_monthly_salary` | `$` | `raw` |
| Cost of Living Index | `cost_of_living_index` | *(none)* | `raw` |
| House Price-to-Income Ratio | `house_price_income_ratio` | `x` | `raw` |
| Gasoline Price | `gasoline_price` | `$/L` | `raw` |
| Gold Reserves | `gold_reserves` | `t` | `raw` |
| Highest Mountain Peak | `highest_peak_m` | `m` | `raw` |
| Coffee Consumption | `coffee_consumption` | `kg/cap` | `raw` |
| Wine Consumption | `wine_consumption` | `L/cap` | `raw` |
| All-Time Olympic Medals | `olympic_medals_total` | *(none)* | `raw` |
| McDonald's Locations | `num_mcdonalds` | *(none)* | `raw` |
| Average Height (Men) | `avg_height_cm` | `cm` | `raw` |
| Chocolate Consumption | `chocolate_consumption` | `kg/cap` | `raw` |
| Air Pollution | `air_pollution_pm25` | `μg/m³` | `raw` |

🌍 Countries in the Database

The current dataset includes the following countries:

    United States
    China
    Russia
    India
    United Kingdom
    Germany
    France
    Japan
    South Korea
    Saudi Arabia
    Australia
    Canada
    Italy
    Brazil
    Spain
    Poland
    Netherlands
    Turkey
    Norway
    Sweden
    Denmark
    Singapore
    Pakistan
    Indonesia
    Mexico
    Argentina
    South Africa
    Nigeria
    Egypt
    Thailand
    Ukraine
    Israel


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


## Start
```sh
npm run start:dev   # watch mode
npm run start       # normal start
```
