const Usuario = require("../models/ModelsUarios");

exports.getUsers = (req, res) => {
    Usuario.find().then((userResult) =>  {
        //console.log(postResult);
        res.status(200).json(userResult);
    });
};

exports.addUser = (req, res) => {
    const usuarioAdd = new Usuario({
        Nombres: req.body.Nombres,
        Apellidos: req.body.Apellidos,
        Ciudad: req.body.Ciudad,
        Email: req.body.Email,
        Fecha: req.body.Fecha,
        Telefono: req.body.Telefono,
        Tipo_documento: req.body.Telefono,
        Documento: req.body.Documento,
        Estado: req.body.Estado,
        Rol: req.body.Rol
    })
    usuarioAdd.save().then ((createdUser ) => {
        res.status(201).json("Creado satifactoriamente");
    })
    .catch((error) => {
        res.status(500).json({ err: error });
      });
};

exports.getUserId = (req, res) => {
    Usuario.findById(req.params.id).then((userResult) => {
      if (userResult) {
        res.status(200).json(userResult);
      } else {
        res.status(404).json("Usuario no encontrado");
      }
    });
  };
  
exports.getUserAutorizado = (req, res) => {
    Usuario.find({ Estado: /AUTORIZADO/ }).then((userResult1) => {
        res.status(200).json(userResult1);
    });
};

exports.getUserPendiente = (req, res) => {
    Usuario.find({ Estado: /PENDIENTE/ }).then((userResult2) => {
        res.status(200).json(userResult2);
    });
};

exports.editUser = (req, res) => {
  const id = req.params.id;

  const usuarioUpd = new Usuario({
    _id: id,
    Nombres: req.body.Nombres,
    Apellidos: req.body.Apellidos,
    Ciudad: req.body.Ciudad,
    Email: req.body.Email,
    Fecha: req.body.Fecha,
    Telefono: req.body.Telefono,
    Tipo_documento: req.body.Telefono,
    Documento: req.body.Documento,
    Estado: req.body.Estado,
    Rol: req.body.Rol
  }) 

  Usuario.findByIdAndUpdate(id, usuarioUpd).then((userResult) => {
    res.status(200).json("El usuario se actualizó satisfactoriamente");
  });
};

