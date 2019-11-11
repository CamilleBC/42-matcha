# 42-matcha-backend

42 School Web Project.
This is the backend for 42-matcha.
It will be managed as a set of microservices, each presenting an API used by the dispatcher.
The stack is based on Node.js and Express.js.

**TOC**:

- [42-matcha-backend](#42-matcha-backend)
  - [Prerequisite](#prerequisite)
    - [postgresql](#postgresql)
    - [dotEnv](#dotenv)
  - [How-to](#how-to)
  - [Architecture](#architecture)
  - [Database](#database)

## Prerequisite

The server should be running a _PostgreSQL 12_ database and a set of related environment variables should be defined in a `.env` file at the root of the directory.

### postgresql

The server should be running a PostgreSQL database, whose user, password, and URL will be defined in a `.env` file.

### dotEnv

To run the server you should have a `.env` file in the `server` directory, containing the following keys:

```shell
DB_URL=[db_server_url i.e: localhost]
DB_PORT=[db_server_port i.e: 5432]
DB_NAME=[db_name i.e:matcha]
DB_USER=[db_user]
DB_PASSWORD=[db_password]
NODE_ENV=[development/production]
PORT=[server port, default is `:8001`]
```

## How-to

You should have a postgresql instance launched on the machine.
You will need to pass the postgresql database username, password, url, port and database name in an `.env` environment file in the `server` directory.

Connect to `localhost:8001` to access the server.

Initial setup:

- Step 1: run the `upgrade-db.sh` script. It uses the `.env` file to figure out the URL, username and password.
- Step 2 (optionnal): run `npm test` to check that everything is in order.
- Step 3: run `npm start`. The server will be listening on the specified port.

## Architecture

**Current:**
Monolith backend. Single node.js server running all services.
The app tries to follow the [Clean Architecture](https://blog.cleancoder.com/uncle-bob/2012/08/13/the-clean-architecture.html) pattern.

- domain: framework agnostic logic, independant from the implementation
- gateways: I need to find a way to implement interfaces in js.
- routes/db/validation: external services that implement the domain requirements.

**Future:**
The server will be run as the following microservices:

- authentication
- user management
- chat
- notification

## Database

The server uses [db-migrate](https://github.com/db-migrate/node-db-migrate) to manage the database migrations.
All migrations are described as SQL in the `migrations` folder.
Internally, the database connections and queries are managed through [pg-promise](https://github.com/vitaly-t/pg-promise)
