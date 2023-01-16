'use strict';


/**
 * Get all reservations
 * Get all reservations
 *
 * eventId Integer Filter reservations by event (optional)
 * returns inline_response_200_1
 **/
exports.getReservations = function(eventId) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "items" : [ {
    "eventId" : 6,
    "startDateTime" : "2022-01-01T00:00:000Z",
    "name" : "Bob Example",
    "localTz" : "Africa/Johannesburg",
    "id" : 0,
    "endDateTime" : "2022-01-01T00:01:000Z",
    "email" : "bob@example.com"
  }, {
    "eventId" : 6,
    "startDateTime" : "2022-01-01T00:00:000Z",
    "name" : "Bob Example",
    "localTz" : "Africa/Johannesburg",
    "id" : 0,
    "endDateTime" : "2022-01-01T00:01:000Z",
    "email" : "bob@example.com"
  } ]
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Get the details of this reservation by ID.
 *
 * id String 
 * returns Reservation
 **/
exports.reservationsIdGET = function(id) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "eventId" : 6,
  "startDateTime" : "2022-01-01T00:00:000Z",
  "name" : "Bob Example",
  "localTz" : "Africa/Johannesburg",
  "id" : 0,
  "endDateTime" : "2022-01-01T00:01:000Z",
  "email" : "bob@example.com"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Reserve a given event and time.
 * Reserve a given event
 *
 * body Reservation The reservation. (optional)
 * returns Reservation
 **/
exports.reserveEvent = function(body) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "eventId" : 6,
  "startDateTime" : "2022-01-01T00:00:000Z",
  "name" : "Bob Example",
  "localTz" : "Africa/Johannesburg",
  "id" : 0,
  "endDateTime" : "2022-01-01T00:01:000Z",
  "email" : "bob@example.com"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

