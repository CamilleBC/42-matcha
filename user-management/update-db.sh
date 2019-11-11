#!/bin/bash
source .env
if psql -lqt | cut -d \| -f 1 | grep -qw ${DB_NAME}; then
	echo "Found ${DB_NAME}"
else
	echo "Creating ${DB_NAME}"
	#node node_modules/db-migrate/bin/db-migrate db:create matcha-db
	createdb ${DB_NAME}
fi
echo "Updating DB"
node node_modules/db-migrate/bin/db-migrate up
