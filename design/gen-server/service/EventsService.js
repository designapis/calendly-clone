'use strict';


/**
 * Get event
 * Get event details
 *
 * id Integer 
 * returns Event
 **/
exports.getEventById = function(id) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "slotDuration" : 30,
  "eventTz" : "Africa/Johannesburg",
  "timeRanges" : [ {
    "dayOfWeek" : "mon",
    "startTime" : "18:00",
    "endTime" : "19:00"
  }, {
    "dayOfWeek" : "mon",
    "startTime" : "18:00",
    "endTime" : "19:00"
  } ],
  "id" : 0,
  "title" : "Catch up call"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Get all events
 * Get all event details
 *
 * returns inline_response_200
 **/
exports.getEvents = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "items" : [ {
    "slotDuration" : 30,
    "eventTz" : "Africa/Johannesburg",
    "timeRanges" : [ {
      "dayOfWeek" : "mon",
      "startTime" : "18:00",
      "endTime" : "19:00"
    }, {
      "dayOfWeek" : "mon",
      "startTime" : "18:00",
      "endTime" : "19:00"
    } ],
    "id" : 0,
    "title" : "Catch up call"
  }, {
    "slotDuration" : 30,
    "eventTz" : "Africa/Johannesburg",
    "timeRanges" : [ {
      "dayOfWeek" : "mon",
      "startTime" : "18:00",
      "endTime" : "19:00"
    }, {
      "dayOfWeek" : "mon",
      "startTime" : "18:00",
      "endTime" : "19:00"
    } ],
    "id" : 0,
    "title" : "Catch up call"
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


/**
 * Update the event
 * Update the single event in our system.
 *
 * body Event Update the event (optional)
 * id Integer 
 * returns Event
 **/
exports.updateEvent = function(body,id) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "slotDuration" : 30,
  "eventTz" : "Africa/Johannesburg",
  "timeRanges" : [ {
    "dayOfWeek" : "mon",
    "startTime" : "18:00",
    "endTime" : "19:00"
  }, {
    "dayOfWeek" : "mon",
    "startTime" : "18:00",
    "endTime" : "19:00"
  } ],
  "id" : 0,
  "title" : "Catch up call"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

