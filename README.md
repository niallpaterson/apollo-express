# Apollo Express GraphQl API

An example Apollo Express GraphQL API.

## Project Structure

```md
server.js
start.js
|- mock
|- test
|- model
|- resolver
|- schema
```

### server.js

Setup of apollo server and express app.

### start.js

Environment config and starts server.

### /mock

Mock database for testing.

### /test

Query tests.

### /model

Database wrappers.

### /resolver

GraphQL resolvers. Calls methods defined in `/model`.

### /schema

GraphQL schemas.

## Database

Uses firestore database as a working example. New databases can be included in the `model` directory.

## Config

Google services key passed as an environment variable:

```text
GOOGLE_SERVICE_KEY: // enter minified key here
```

## Scripts

```shell
test --> ava
start:dev --> nodemon ./start.js
start:prod --> node ./start.js
```

## Test

Tested with AVA and supertest. Mocking handled by mock-require.
