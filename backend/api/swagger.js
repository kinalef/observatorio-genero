// api/swagger.js

const swaggerJsdoc = require('swagger-jsdoc');

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'API Observatorio de Violencia de Género',
      version: '1.0.0',
      description: 'Documentación de la API de casos de femicidio en Chile con información de La Red Chilena contra la Violencia hacia las Mujeres (https://www.nomasviolenciacontramujeres.cl/registro-de-femicidios/)',
    },
    servers: [
      {
        url: 'http://localhost:3000',
        description: 'Servidor de desarrollo local',
      },
    ],
    components: {
      securitySchemes: {
        BearerAuth: {
          type: 'http',
          scheme: 'bearer',
          bearerFormat: 'JWT',
        },
      },
    },
    tags: [

    ],
    security: [{ BearerAuth: [] }],
  },
  apis: ['./api/routes/*.js'], 
};

const swaggerSpec = swaggerJsdoc(options);
module.exports = swaggerSpec;