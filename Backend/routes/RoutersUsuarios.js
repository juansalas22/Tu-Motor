const express = require("express");
const router = express.Router();

const UsuariosControllers = require("../controllers/ControllersUsuarios")

router.get("",UsuariosControllers.getUsers  );
router.post("",UsuariosControllers.addUser  );
router.get("/autorizados",UsuariosControllers.getUserAutorizado);
router.get("/pendientes",UsuariosControllers.getUserPendiente);
router.get("/:id",UsuariosControllers.getUserId );
router.put("/:id",UsuariosControllers.editUser);

module.exports = router;