# SeaPort Indexer

Saves in a PostgreSQL database the new sales from the OpenSea Seaport exchange and expose them on a GraphQL API using PostGraphile

## Installation

1. Prepare `.env` file

```console
$ cp .env.example .env
```

2. Install dependencies

```console
$ npm i
```

3. Use the following dump file to restore database schema

## Usage

### Indexing

1. Build the project

```console
$ npm run build
```

2. Start the script

```console
$ npm run start
```

### GraphQL

Use the following command to start a GraphQL server

```console
$ npx postgraphile -c '[POSTGRES_URL in the env file]' --watch --enhance-graphiql --dynamic-json --port 4000 --append-plugins @graphile-contrib/pg-simplify-inflector --export-schema-graphql schema.graphql
```
