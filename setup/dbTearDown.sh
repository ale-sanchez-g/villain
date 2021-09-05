#!/bin/bash
psql -c "DROP DATABASE users_api;" -U postgres
psql -c "DROP DATABASE appkey;" -U postgres