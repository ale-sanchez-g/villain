#!/bin/bash
psql -c "CREATE DATABASE users_api;" -U postgres
psql -U postgres -d users_api -c "CREATE TABLE leaderboard ( USER_ID serial PRIMARY KEY, USERNAME VARCHAR (50) UNIQUE NOT NULL, SCORE integer NOT NULL );"