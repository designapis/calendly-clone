'use strict';

var utils = require('../utils/writer.js');
var Reservations = require('../service/ReservationsService');

module.exports.getReservations = function getReservations (req, res, next, eventId) {
  Reservations.getReservations(eventId)
    .then(function (reservations) {
        const response = {
            items: reservations || []
        }
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getReservationsByID = function getReservationsByID(req, res, next, id) {
  Reservations.getReservationsByID(id)
    .then(function (response) {
        if(!response)
            return res.status(404).send()
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.reserveEvent = function reserveEvent (req, res, next, body) {
  Reservations.reserveEvent(body)
    .then(function (response) {
        res.status(201).send(response)
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
