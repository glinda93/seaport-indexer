# SeaPort Indexer

Saves in a PostgreSQL database the new sales from the [OpenSea Seaport exchange](https://etherscan.io/address/0x00000000006c3852cbef3e08e8df289169ede581) and expose them on a GraphQL API using PostGraphile

## Installation

1. Prepare `.env` file

```console
$ cp .env.example .env
```

2. Install dependencies

```console
$ npm i
```

3. Use the `database.sql` file to restore database schema

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

### Test

Run the following command to run unit tests:

```console
$ npm run test
```

## NOTES

- Set `FROM_BLOCK` env var to a reasonable number. If you use default value or even omit it, it will take forever to fetch and store results into the database. Even worse, it might cause Alchemy API rate limit error. Go to the [transaction page](https://etherscan.io/txs?a=0x00000000006c3852cbef3e08e8df289169ede581), pick the lowest block number in the first page and use it.

- Using local database instead of supabase might speed up sync
