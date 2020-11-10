var express = require('express');
const { request } = require('http');
var db = require('../database');

const couponCtrl = {};

couponCtrl.createCoupon = (req, res) => {
    let coupon = req.body;
    console.log(coupon); 
    if (req.headers.auth == 'admin') {
        db.query(`INSERT INTO Coupon VALUES ('${coupon.Id_coupon}', '${coupon.Nombre}', '${coupon.Description}', '${coupon.Valid_since}', '${coupon.Valid_until}', '${coupon.Product_id_product}')`, (err, data) => {
            if (err) {
                res.json({ error: err });
                console.log("Hubo un error en la creación del cupon" + err);
            } else {
                res.status(200).send("Se creo correctamente el cupon");
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

couponCtrl.getCoupons = (req, res) => {
    if (req.headers.auth == 'admin') {
        db.query(`SELECT * FROM Coupon`, (err, data) => {
            if (err) {
                res.json({ error: err });
                console.log("Hubo un error en la busqueda de cupones" + err);
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

module.exports = couponCtrl;