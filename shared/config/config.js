const path = require('path');
const dotenv = require('dotenv');

// Cargar .env.shared ANTES de usar process.env
const envPath = path.resolve(__dirname, '../../.env.shared');
const result = dotenv.config({ path: envPath });

if (result.error) {
  console.error('Error al cargar .env.shared:', result.error);
} else {
  console.log('Variables de entorno cargadas correctamente desde:', envPath);
  console.log('DB_USER:', process.env.DB_USER); // Solo para verificar en consola
}

console.log("path: ", path.resolve(__dirname, '../../.env.shared'));
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
    database: process.env.DB_NAME_TEST , 
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    dialect: "postgres",
    logging: false 
  },
  production: {
    
  }
};