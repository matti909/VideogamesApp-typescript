SELECT 'CREATE DATABASE videogames3' 
WHERE NOT EXISTS (SELECT FROM pg_database WHERE datname = 'videogames3')