var config = require('config.json');
var _ = require('lodash');
var jwt = require('jsonwebtoken');
var bcrypt = require('bcryptjs');
var Q = require('q');
var mongo = require('mongoskin');
var MONGOLAB_URI = config.connectionString;
var db = mongo.db(process.env.MONGOLAB_URI, { native_parser: true });
db.bind('diets');
db.bind('diseases');


var service = {};
service.getDiets = getDiets;
service.getDiseases = getDiseases;

module.exports = service;

function getDiets() {
    var deferred = Q.defer();

    db.diets.findItems({}, function (err, diets) {
        if (err) deferred.reject(err.name + ': ' + err.message);

        if (diets) {
            deferred.resolve(_.omit(diets, '_id'));
        } else {
            deferred.resolve();
        }
    });

    return deferred.promise;
}

function getDiseases() {
    var deferred = Q.defer();

    db.diseases.findItems({}, function (err, diseases) {
        if (err) deferred.reject(err.name + ': ' + err.message);

        if (diseases) {
            deferred.resolve(_.omit(diseases, '_id'));
        } else {
            deferred.resolve();
        }
    });

    return deferred.promise;
}
