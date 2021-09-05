#!/bin/bash
# -- Steps if postgres is not installed --
# CREATE ROLE postgress superuser;
# CREATE USER postgress; 
# ALTER ROLE postgress WITH LOGIN;


psql -c "CREATE DATABASE users_api;" -U postgress
psql -U postgress -d users_api -c "CREATE TABLE leaderboard ( USER_ID serial PRIMARY KEY, USERNAME VARCHAR (50) UNIQUE NOT NULL, SCORE integer NOT NULL );"
psql -c "CREATE DATABASE appkey;" -U postgress
psql -U postgress -d users_api -c "CREATE TABLE appkey ( APP_ID serial PRIMARY KEY, APP VARCHAR (50) UNIQUE NOT NULL);"
