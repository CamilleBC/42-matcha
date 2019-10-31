# 42-matcha

42 School Web Project

## How-to

You should have a postgresql instance launched on the machine.
You will need to pass the postgresql database username, password, url, port and database name in an `.env` environment file in the `server` directory.

Use the `docker-compose up -d` command in the root folder to launch all services (optional `--build` flag if you want to rebuild the Dokerfile images).

Connect to `localhost:8001` to access the server (use `docker-machine env default` on Windows/Darwin to find the machine's IP to connect to).

Initial setup:

- Option 1: run the `db-setup.sh` script.
- Option 2:
  - Run `node node_modules/db-migrate/bin/db-migrate db:create [db_name]` to create the database
  - Run `node node_modules/db-migrate/bin/db-migrate up` to update the postgresql database to the last migration.

## Server

To run the server you should have a `.env` file in the `server` directory, containing the following keys:

```shell
DB_URL=[db_server_url]
DB_PORT=[db_server_port]
DB_NAME=[db_name i.e:matcha-db]
DB_USER=[db_user]
DB_PASSWORD=[db_password]
NODE_ENV=development
PORT=[server port]
```

## Database

The database is a PostgreSQL db on a docker container. The persistent db is store in `postgres-data` in the root folder.

The project uses [flyway](https://flywaydb.org/) to manage its database migrations. The `SQL` migrations are located in `migrations-sql` in the root folder.

## Credits

Main app icon made by [dDara](https://www.flaticon.com/authors/ddara) from [flaticon](https://www.flaticon.com/).

Thanks to Samuel Ogundipe for his [pusher tutorial](https://pusher.com/tutorials/postgresql-realtime)