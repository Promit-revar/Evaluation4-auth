module.exports={
  "development": {
    "username": process.env.AUTH_USERNAME,
    "password": process.env.AUTH_DATABASE_PASSWORD,
    "database": "auth",
    "host": process.env.AUTH_HOST,
    "dialect": "postgres"
  },
  "test": {
    "username": process.env.AUTH_USERNAME,
    "password": process.env.AUTH_DATABASE_PASSWORD,
    "database": "auth",
    "host": process.env.AUTH_HOST,
    "dialect": "postgres"
  },
  "docker":{
    "username": process.env.DB_USER,
    "password": process.env.DB_PASSWORD,
    "database": process.env.DB_NAME,
    "host": process.env.DB_HOST,
    "port": process.env.DB_PORT,
    "dialect": "postgres"
  }
}

