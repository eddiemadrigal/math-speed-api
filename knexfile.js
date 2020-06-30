// Update with your config settings.

require('dotenv').config();

module.exports = {

  development: {
    client: 'pg',
    connection: {
      host: 'localhost',
      database: 'math-speed-dev',
      user: process.env.PG_USERNAME,
      password: process.env.PG_PASSWORD
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      directory: 'data/migrations',
      tableName: 'knex_migrations'
    },
    seeds: {
      directory: 'data/seeds'
    },
  },

  production: {
    client: 'pg',
    connection: {
      host: 'localhost',
      database: 'math-speed-dev',
      user: process.env.PG_USERNAME,
      password: process.env.PG_PASSWORD
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      directory: '.data/migrations',
      tableName: 'knex_migrations'
    },
    seeds: {
      directory: 'data/seeds'
    },
  },

};
