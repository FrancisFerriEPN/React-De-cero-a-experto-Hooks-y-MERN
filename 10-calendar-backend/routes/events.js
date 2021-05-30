/* 
    Event Routes
    /api/events
*/

// Todas las rutas deben pasar por la validacion JWT
const { Router } = require("express");
const { check } = require("express-validator");

const { validarJWT } = require("../middlewares/validar-jwt");
const { validarCampos } = require("../middlewares/validar-campos");

const router = Router();

const { isDate } = require("../helpers/isDate");

const {
	getEventos,
	crearEvento,
	actualizarEvento,
	eliminarEvento
} = require("../controllers/events");

// Validacion con JWT
router.use(validarJWT);

// Obtener eventos
router.get("/", getEventos);

// Crear evento
router.post(
	"/",
	[
		check("title", "El titulo es obligatorio").not().isEmpty(),
		check("start", "Fecha de inicio es obligatoria").custom(isDate),
		check("end", "Fecha de finalización es obligatoria").custom(isDate),
		validarCampos
	],
	crearEvento
);

// Actualizar evento
router.put("/:id", actualizarEvento);

// Borarr evento
router.delete("/:id", eliminarEvento);

module.exports = router;
