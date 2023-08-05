# welcome to flights search

## project setup

- clone the projects on your local
- Execute `npm install` on the same path as of your root directory tech downloaded project
- Create a `.env` file on in root directory and add the following enviroment variable
  - `PORT = 3000`
- Inside the `src/config` folder create a new file `config.json` and then add the following piece of json

```
{
  "development": {
    "username": "YOUR_DB_LOGIN_NAME",
    "password": "YOUR_DB_PASSWORD",
    "database": "Flights_search_DB_DEV",
    "host": "127.0.0.1",
    "dialect": "mysql"

  }
}

```

- once uou have added your db config as listed above , go to the src folder from
  your terminal and execute `npx sequelize db:create`

## DB Design

- AirPlane Table
- Flights
- Airport
- City

- A flights belongs to an airplane but one airplane can be used in multiple flights.
- A city has mant airports but one airport can belongs to a city.
- One airports can have many flights but a flights belongs to one airport.
