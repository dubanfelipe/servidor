var express = require('express');
const { restart } = require('nodemon');
var db = require('../database');

const productCtrl = {};

productCtrl.getProducts = (req, res) => {
    if (req.headers.auth == 'admin') {
        db.query(`SELECT * FROM Product`, (err, data) => {
            if (err) {
                res.json({ error: err });
                console.log("Hubo un error en la busqueda de Productos" + err);
            } else {
                res.json(data);
            }
        });
    } else if (req.headers.auth == 'customer') {
        console.log("Servicio denegado, solo administrador");
        res.status(403).send({ error: "No esta autorizado para esta acción" });
    }
    else {
        console.log("Servicio denegado encabezado incorrecto ");
        res.status(401).send({ error: "No esta autorizado encabezado incorrecto" });
    }
}

productCtrl.getProductById = (req, res) => {
    let id = req.params.id_product;
    if (req.headers.auth == 'admin') {
        db.query(`SELECT * FROM Product WHERE Id_product='${id}'`, (err, data) => {
            if (err) {
                res.json({ error: err });
                console.log("Hubo un error en la busqueda del Producto" + err);
            } else {
                res.json(data);
            }
        });
    } else if (req.headers.auth == 'customer') {
        console.log("Servicio denegado, solo administrador");
        res.status(403).send({ error: "No esta autorizado para esta acción" });
    }
    else {
        console.log("Servicio denegado encabezado incorrecto ");
        res.status(401).send({ error: "No esta autorizado encabezado incorrecto" });
    }
}

module.exports = productCtrl;