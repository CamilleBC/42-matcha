# 42-matcha

42 School Web Project

## How-to

You should have docker launched (or docker-machine on Windows/Darwin).
Use the `docker-compose up -d` command in the root folder to launch all services (optional `--build` flag if you want to rebuild the Dokerfile images).

Connect to `localhost:8001` to access the server (use `docker-machine env default` on Windows/Darwin to find the machine's IP to connect to).

## Database

The database is a PostgreSQL db on a docker container. The persistent db is store in `postgres-data` in the root folder.

The project uses [flyway](https://flywaydb.org/) to manage its database migrations. The `SQL` migrations are located in `migrations-sql` in the root folder.

## Credits

Main app icon made by [dDara](https://www.flaticon.com/authors/ddara) from [flaticon](https://www.flaticon.com/).
