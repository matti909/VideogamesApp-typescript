SELECT 'CREATE DATABASE videogames' 
WHERE NOT EXISTS (SELECT FROM pg_database WHERE datname = 'videogames')
