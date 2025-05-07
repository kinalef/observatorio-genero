// backend/api/controllers/estadisticas.controller.js

const { CasoVictima } = require("../../shared/models");
const { Op } = require("sequelize"); //operadores

const removeDiacritics = (str) =>
  str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");

const capitalizarCadaPalabra = (str) =>
  str
    .split(" ")
    .map((palabra) =>
      palabra.charAt(0).toUpperCase() + palabra.slice(1).toLowerCase()
    )
    .join(" ");

function normalizarRelacionAgresor(relacion) {
  if (!relacion) return "Desconocido";

  const mapaNormalizacion = {
    "ex conviviente": "Ex Conviviente",
    "ex pareja": "Ex Pareja",
    "ex conyuge": "Ex Cónyuge",
    "conviviente; conocido": "Conviviente/Conocido",
    "desconocido": "Desconocido",
    "desconocidos": "Desconocido",
    "se desconoce": "Desconocido",
    "desconoce": "Desconocido",
    "desconocido; desconocido": "Desconocido",
    "desconocido; desconocido; desconocido": "Desconocido",
    "conocidos": "Conocido",
    "ex vecino": "Ex Vecino",
    "conyugue": "Cónyuge",
    "ex yerno": "Ex Yerno",
    "ex conyugue": "Ex Cónyuge",
  };

  const claveSinAcentos = removeDiacritics(relacion.trim().toLowerCase());

  if (mapaNormalizacion[claveSinAcentos]) {
    return mapaNormalizacion[claveSinAcentos];
  }

  return capitalizarCadaPalabra(removeDiacritics(relacion.trim()));
}

const calcularEstadisticasGlobales = async (req, res) => {

    const mapaRegiones = {
        "Arica": "Arica y Parinacota",
        "Arica y Parinacota": "Arica y Parinacota",
        "Iquique": "Tarapacá",
        "Tarapacá": "Tarapacá",
        "Antofagasta": "Antofagasta",
        "Atacama": "Atacama",
        "Coquimbo": "Coquimbo",
        "Valparaíso": "Valparaíso",
        "Valparaiso": "Valparaíso",
        "Metropolitana": "Metropolitana",
        "Metropolitana / Atacama": "Metropolitana",
        "Santiago": "Metropolitana",
        "O'Higgins": "O'Higgins",
        "O’Higgins": "O'Higgins",
        "O'Higgins ": "O'Higgins",
        "Ohiggins": "O'Higgins",
        "El Maule": "Maule",
        "Maule": "Maule",
        "Ñuble": "Ñuble",
        "Bio Bio": "Biobío",
        "Bio Bío": "Biobío",
        "Biobío": "Biobío",
        "Bío Bío": "Biobío",
        "Bío-Bío": "Biobío",
        "Araucanía": "La Araucanía",
        "La Araucanía": "La Araucanía",
        "La Araucania": "La Araucanía",
        "Los Rios": "Los Ríos",
        "Los Ríos": "Los Ríos",
        "Los Lagos": "Los Lagos",
        "Aysen": "Aysén",
        "Aysén": "Aysén",
        "Magallanes": "Magallanes",
      };
  try {
    // 1. Total de femicidios
    const total = await CasoVictima.count();

    // 2. Distribución por edad
    //Solo recoge los registros que tengan edad definida
    const casosConEdad = await CasoVictima.findAll({
      attributes: ['edad_victima'],
      where: {
        edad_victima: {
          [Op.not]: null,
        },
      },
    });
    const edades = casosConEdad.map(caso => caso.edad_victima);
    const promedioEdad = Math.round(edades.reduce((a, b) => a + b, 0) / edades.length);
    const menoresDeEdad = edades.filter(edad_victima => edad_victima < 18).length;
    const rango2535 = edades.filter(edad_victima => edad_victima >= 25 && edad_victima <= 35).length;

    // 3. Relación con el agresor
    const relaciones = await CasoVictima.findAll({
      attributes: ['relacion_agresor'],
    });
    const relacionCount = relaciones.reduce((acc, caso) => {
        const tipo = normalizarRelacionAgresor(caso.relacion_agresor) || 'desconocida';
        acc[tipo] = (acc[tipo] || 0) + 1;
        return acc;
      }, {});

    // 4. Por región
    const regionesRaw = await CasoVictima.findAll({ attributes: ['region'] });

    const regionesCount = regionesRaw.reduce((acc, caso) => {
        const original = caso.region?.trim() || "desconocida";
        const regionNormalizada = mapaRegiones[original] || original;
        acc[regionNormalizada] = (acc[regionNormalizada] || 0) + 1;
        return acc;
    
    }, {});

    // 5. Casos por año
    const fechas = await CasoVictima.findAll({ attributes: ['fecha'] });
    const casosPorAnio = fechas.reduce((acc, caso) => {
        let anio;
        if (caso.fecha && !isNaN(caso.fecha.getTime())) {
          anio = caso.fecha.getFullYear();
        } else {
          anio = 'Fecha desconocida';
        }
      
        acc[anio] = (acc[anio] || 0) + 1;
        return acc;
      }, {});
      // 6. Casos por región y año
    const casosRegionAnioRaw = await CasoVictima.findAll({
      attributes: ['region', 'fecha'],
      where: {
        fecha: {
          [Op.not]: null,
        },
      },
    });

    const casosPorRegionYAnio = {};

    casosRegionAnioRaw.forEach((caso) => {
      const regionOriginal = caso.region?.trim() || "desconocida";
      const region = mapaRegiones[regionOriginal] || regionOriginal;

      const anio = caso.fecha?.getFullYear?.() || 'desconocido';

      if (!casosPorRegionYAnio[region]) {
        casosPorRegionYAnio[region] = {};
      }

      casosPorRegionYAnio[region][anio] = (casosPorRegionYAnio[region][anio] || 0) + 1;
    });

    return res.json({
      total_femicidios: total,
      distribucion_edad: {
        promedio: promedioEdad,
        menores_de_edad: menoresDeEdad,
        rango_25_35: rango2535,
      },
      relacion_agresor: relacionCount,
      casos_por_region: regionesCount,
      casos_por_anio: casosPorAnio,
      casos_por_region_y_anio: casosPorRegionYAnio, 
    });
  } catch (error) {
    console.error("Error al calcular estadísticas:", error);
    res.status(500).json({ error: "Error al calcular estadísticas globales." });
  }
};

module.exports = { calcularEstadisticasGlobales };
