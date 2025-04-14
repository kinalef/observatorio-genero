
// Archivo: scripts/procesar_excel_red_contra_violencia.js

const fs = require('fs');
const path = require('path');
const xlsx = require('xlsx');
const { CasoVictima,  FuenteDato  } = require('../../shared/models');
const sequelize = require('../../shared/models').sequelize;

const carpetaDatos = path.join(__dirname, '../data/red');

async function procesarArchivosExcel() {
  const archivosExcel = fs.readdirSync(carpetaDatos).filter(file => file.endsWith('.xlsx'));
  console.log('---------Archivos encontrados:', archivosExcel);

  for (const archivo of archivosExcel) {
    const rutaArchivo = path.join(carpetaDatos, archivo);
    const nombreFuente = 'Red Chilena contra la Violencia hacia las Mujeres';
    const fechaProcesamiento = new Date();

    try {
      const workbook = xlsx.readFile(rutaArchivo);
      const nombreHoja = workbook.SheetNames[0];
      const hoja = workbook.Sheets[nombreHoja];
      const filas = xlsx.utils.sheet_to_json(hoja, { header: 1 });

      const encabezados = filas.find(fila => fila.some(celda => typeof celda === 'string' && celda.toLowerCase().includes('fecha')));
      if (!encabezados) {
        console.log(`No se encontró fila de encabezado válida en: ${archivo}`);
        console.log("─".repeat(60));
        continue;
      }

      const filaEncabezadoIndex = filas.indexOf(encabezados);
      const datosCrudos = filas.slice(filaEncabezadoIndex + 1);

      const datos = datosCrudos.map((fila, index) => {
        console.log("**********************************************");
        console.log("**********************************************");
        console.log(`\nFila #${index + filaEncabezadoIndex + 2}:`);
        console.log(fila);
        const obj = {};
        encabezados.forEach((columna, i) => {
          if (columna) obj[columna.trim()] = fila[i];
        });
        return obj;
      });

      const fuente = await FuenteDato.create({
        nombre: nombreFuente,
        archivo: archivo,
        fecha_procesamiento: fechaProcesamiento
      });

      let casosProcesados = 0;

      for (const dato of datos) {

        if (
            !dato['Nombre víctima'] &&
            !dato['Nombre Víctima'] &&
            !dato['Nombre'] &&
            !dato['Fecha']
          ) {
            console.log(` Fila ignorada por no contener datos válidos (${archivo})`);
            continue;
          }
       
        console.log(`Procesando archivo ${archivo}`);
        console.log("Preparando fila para guardar:");
        console.log({
        nombre: dato["Nombre víctima"] || dato["Nombre Víctima"],
        edad: dato["Edad"] || dato["Edad víctima"] || dato["Edad Víctima"],
        edad_femicida: dato["Edad femicida"] || dato["Edad Femicida"],
        fecha: dato["Fecha"],
        region: dato["Región"],
        comuna: dato["Comuna"] || dato["Lugar"],
        });
        console.log("**********************************************");
        console.log("**********************************************");



        const nuevoCaso = await CasoVictima.create({
          fecha: convertirFechaFlexible(dato['Fecha']) || null,
          comuna: dato['Comuna'] || dato['Lugar'] || null,
          region: dato['Región'] || null,
          nombre_victima: dato['Nombre víctima'] || dato['Nombre Víctima'] || dato['Nombre'] || null,
          edad_victima: dato['Edad'] || dato['Edad víctima'] || null,
          nacionalidad_victima: dato['Nacionalidad'] || dato['Nacionalidad víctima'] || null,
          ocupacion_victima: dato['Ocupación'] || dato['Ocupación víctima'] || null,
          informacion_hecho: dato['Información sobre el hecho'] || null,
          forma_agresion: dato['Forma de agresión'] || null,
          violencia_sexual: transformarABooleano(dato['Violencia sexual']) || null,
          relacion_agresor: dato['Relación víctima-femicida'] || dato['Relación Víctima-Femicida'] || null,
          tipificacion_red_chilena: dato['Categoría Red Chilena'] || dato['Tipificación Red Chilena'] || dato['Categorías Red Chilena'] || null,
          nombre_femicida: dato['Nombre femicida'] || dato['Nombre Femicida'] || dato['Femicidia'] || dato['Femicida'] || null,
          edad_femicida: dato['Edad femicida'] || dato['Edad Femicida'] || null,
          nacionalidad_femicida: dato['Nacionalidad femicida'] || dato['Nacionalidad Femicida'] || null,
          ocupacion_femicida: dato['Ocupación femicida'] || null,
          suicidio_agresor: transformarABooleano(dato['Suicidio']) || transformarABooleano(dato['suicidio']) ||null,
          confiesa_delito: transformarABooleano(dato['Confiesa delito']) || null,
          antecedentes: dato['Antecedentes al hecho'] || dato['Antecedentes sobre el hecho'] || dato['Antecedentes relación víctima-femicida'] || null,
          antecedentes_ley_vif: dato['Antecedentes ley VIF'] || null,
          registrado_sernameg: transformarABooleano(dato['Registro SernamEG']) ||transformarABooleano(dato['Registrado en Sernameg'])  || transformarABooleano(dato['Sernam']) || null,
          tipificacion_penal: dato['Tipificación penal'] || null,
          tipificacion_penal_adicional: dato['Tipificación penal adicional'] || null,
          estado_causa: dato['Situación judicial: estado causa'] || null,
          fecha_causa: convertirFechaFlexible(dato['Situación judicial: fecha']) || convertirFechaFlexible(dato['Situacion judicial: fecha']) || null,
          estado_femicida: dato['Situación judicial: estado femicida'] || null,
          tribunal: dato['Tribunal'] || null,
          fiscal: dato['Fiscal a cargo'] || null,
          rit: dato['RIT'] || dato['RUC'] || null,
          sentencia: dato['Sentencia'] || null,
          sentencia_adicional: dato['Sentencia penal adicional'] || dato['Sentencia adicional'] || null,
          info_medios_1: dato['Información medios 1'] || dato['Información en medios 1'] || null,
          info_medios_2: dato['Información medios 2'] || dato['Información en medios 2'] || null,
          info_medios_3: dato['Información medios 3'] || dato['Información en medios 3'] || null,
          informe_pj: dato['Informe Poder Judicial'] || dato['Informe poder judicial'] || dato['Informe del Poder Judicial'] || null,
          actualizacion: convertirFechaFlexible(dato['Información actualizada por última vez']) || convertirFechaFlexible(dato['Última fecha de modificación']) || null,
          fuente_dato_id: fuente.id
        });

        if (nuevoCaso) casosProcesados++;
      }

      console.log(`✔ Archivo procesado: ${archivo}`);
      console.log(`Casos guardados: ${casosProcesados}`);
      console.log("─".repeat(60));

    } catch (error) {
      console.error(`Error al procesar ${archivo}:`, error);
    }
  }
}

sequelize.sync().then(() => {
  procesarArchivosExcel().then(() => {
    console.log("Procesamiento finalizado");
    process.exit();
  });
});

function transformarABooleano(valor) {
    if (typeof valor === 'boolean') return valor;
  
    if (typeof valor === 'string') {
      const normalizado = valor.trim().toLowerCase();
      if (['sí', 'si', 's', 'x', 'true', '1'].includes(normalizado)) return true;
      if (['no', 'n', 'false', '0'].includes(normalizado)) return false;
    }
  
    return null; // valor no reconocido
  }

  function convertirFechaFlexible(valor) {
    if (!valor) return null;
  
    // Si es un número (Excel serial date)
    if (!isNaN(valor) && typeof valor === 'number') {
      // Excel considera el 1 de enero de 1900 como día 1 (en realidad 0), pero tiene un error de 2 días
      const fechaBase = new Date(1899, 11, 30); // 30/12/1899
      fechaBase.setDate(fechaBase.getDate() + valor);
      return fechaBase;
    }
  
    // Si es un string tipo '27/03/2023' o '2023-03-27'
    const parsed = new Date(valor);
    if (!isNaN(parsed)) {
      return parsed;
    }
  
    return null;
  }

