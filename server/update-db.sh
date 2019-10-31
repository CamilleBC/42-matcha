#!/bin/bash
if psql -lqt | cut -d \| -f 1 | grep -qw matcha-db; then
	echo "Found matcha-db"
else
	echo "Creating matcha-db"
	#node node_modules/db-migrate/bin/db-migrate db:create matcha-db
	createdb matcha-db
fi
echo "Updating DB"
node node_modules/db-migrate/bin/db-migrate up
