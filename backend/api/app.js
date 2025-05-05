const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const passport = require('./config/passport'); 
const swaggerUi = require('swagger-ui-express');
const swaggerSpec = require('./swagger');
const path = require('path');
const authRoutes = require('./routes/auth.routes');
const estadisticasRoutes = require('./routes/estadisticas.routes');
const rutas = require('./routes');


const app = express();
const PORT = process.env.PORT || 3000;
console.log("************APP.JS***************")

const casosRoutes = require('./routes/casos.routes');

// Middlewares
app.use(cors());
app.use(morgan('dev'));
app.use(express.json());
app.use(passport.initialize());
// Swagger
app.use('/api/docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

// Rutas
app.use('/api/auth', authRoutes);
app.use('/api/casos', casosRoutes);
app.use('/api/estadisticas',estadisticasRoutes );

//app.use('/', rutas);
console.log("🧩 Estadísticas route cargada:", estadisticasRoutes);
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});

module.exports = app;