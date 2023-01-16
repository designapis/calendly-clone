'use strict';

var utils = require('../utils/writer.js');
var Events = require('../service/EventsService');
function wrap(items=[]) {
    return {items}
}

module.exports.getEventById = function getEventById (req, res, next, id) {
  Events.getEventById(id)
    .then(function (response) {
        if(!response) {
	    return res.status(404).send()
        }
      utils.writeJson(res, response);
    })
    .catch(function (response) {
        utils.writeJson(res, response);
    });
};

module.exports.getEvents = function getEvents (req, res, next) {
  Events.getEvents()
    .then(function (response) {
        utils.writeJson(res, wrap(response));
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
