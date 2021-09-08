#!/bin/bash
# -- Steps if postgres is not installed --
# CREATE ROLE postgres superuser;
# CREATE USER postgres; 
# ALTER ROLE postgres WITH LOGIN;


psql -c "CREATE DATABASE users_api;" -U postgres
psql -U postgres -d users_api -c "CREATE TABLE leaderboard ( USER_ID serial PRIMARY KEY, USERNAME VARCHAR (50) UNIQUE NOT NULL, SCORE integer NOT NULL );"
psql -c "CREATE DATABASE appkey;" -U postgres
psql -U postgres -d users_api -c "CREATE TABLE appkey ( APP_ID serial PRIMARY KEY, APP VARCHAR (50) UNIQUE NOT NULL);"
