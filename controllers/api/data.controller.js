var config = require('config.json');
var express = require('express');
var router = express.Router();
var dataService = require('services/data.service');
// routes
router.get('/diets', getDiets);
router.get('/diseases', getDiseases);

module.exports = router;

function getDiets(req, res) {
    dataService.getDiets()
        .then(function (diets) {
            if (diets) {
                res.send(diets);
            } else {
                res.sendStatus(404);
            }
        })
        .catch(function (err) {
            res.status(400).send(err);
        });
}

function getDiseases(req, res) {
    dataService.getDiseases()
        .then(function (diseases) {
            if (diseases) {
                res.send(diseases);
            } else {
                res.sendStatus(404);
            }
        })
        .catch(function (err) {
            res.status(400).send(err);
        });
}


