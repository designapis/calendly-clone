'use strict';

var utils = require('../utils/writer.js');
var Reservations = require('../service/ReservationsService');

module.exports.getReservations = function getReservations (req, res, next, eventId) {
  Reservations.getReservations(eventId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.reservationsIdGET = function reservationsIdGET (req, res, next, id) {
  Reservations.reservationsIdGET(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.reserveEvent = function reserveEvent (req, res, next, body) {
  Reservations.reserveEvent(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
