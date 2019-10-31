CREATE TABLE "user_table" (
    id BIGSERIAl NOT NULL PRIMARY KEY,
    username VARCHAR(20) NOT NULL,
    password VARCHAR(200) NOT NULL,
    firstname VARCHAR(20) NOT NULL,
    lastname VARCHAR(20) NOT NULL,
    email VARCHAR(200) NOT NULL
);