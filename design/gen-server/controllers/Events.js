'use strict';

var utils = require('../utils/writer.js');
var Events = require('../service/EventsService');

module.exports.getEventById = function getEventById (req, res, next, id) {
  Events.getEventById(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getEvents = function getEvents (req, res, next) {
  Events.getEvents()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.reserveEvent = function reserveEvent (req, res, next, body) {
  Events.reserveEvent(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.updateEvent = function updateEvent (req, res, next, body, id) {
  Events.updateEvent(body, id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
