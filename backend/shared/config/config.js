const path = require('path');
const dotenv = require('dotenv');

let result = {};

//Cargar dotenv para ambientes que no sean producción
if (process.env.NODE_ENV !== 'production') {
  const envPath = path.resolve(__dirname, '../../.env');
  result = dotenv.config({ path: envPath });

  console.log("envPath: ", envPath);

  if (result.error) {
    console.error('Error al cargar .env:', result.error);
  } else {
    console.log('Variables de entorno cargadas correctamente desde:', envPath);
    console.log('DB_USER:', process.env.DB_USER); // Solo para verificar en consola
  }

  console.log("path: ", envPath);
}

module.exports = {
  development: {
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    dialect: "postgres"
  },
  test: {
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME_TEST,
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    dialect: "postgres",
    logging: false
  },
  production: {
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    dialect: "postgres",
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false
      }
    }
  }
};