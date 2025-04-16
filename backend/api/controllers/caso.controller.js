const { CasoVictima } = require('../../shared/models');

const obtenerCasos = async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;
    const offset = (page - 1) * limit;

    const { count, rows } = await CasoVictima.findAndCountAll({
      limit,
      offset,
      order: [['fecha', 'DESC']]
    });

    return res.json({
        total: count,
        paginaActual: page,
        totalPaginas: Math.ceil(count / limit),
        casos: rows
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ mensaje: 'Error al obtener los casos' });
  }
};

const obtenerPorId = async (req, res) => {
  try {
    const caso = await CasoVictima.findByPk(req.params.id);
    if (!caso) return res.status(404).json({ error: 'Caso no encontrado' });
    res.json(caso);
  } catch (error) {
    res.status(500).json({ error: 'Error al buscar el caso' });
  }
};

const crearCaso = async (req, res) => {
  try {
    const nuevoCaso = await CasoVictima.create(req.body);
    res.status(201).json(nuevoCaso);
  } catch (error) {
    res.status(400).json({ error: 'Error al crear el caso' });
  }
};

const actualizarCaso = async (req, res) => {
  try {
    const caso = await CasoVictima.findByPk(req.params.id);
    if (!caso) return res.status(404).json({ error: 'Caso no encontrado' });

    await caso.update(req.body);
    res.json(caso);
  } catch (error) {
    res.status(400).json({ error: 'Error al actualizar el caso' });
  }
};

const eliminarCaso = async (req, res) => {
  try {
    const caso = await CasoVictima.findByPk(req.params.id);
    if (!caso) return res.status(404).json({ error: 'Caso no encontrado' });

    await caso.destroy();
    res.json({ mensaje: 'Caso eliminado' });
  } catch (error) {
    res.status(500).json({ error: 'Error al eliminar el caso' });
  }
};
module.exports = { obtenerCasos , obtenerPorId, crearCaso, actualizarCaso, eliminarCaso};