'use strict';


const events = {}
/**
 * Get event
 * Get event details
 *
 * id Integer 
 * returns Event
 **/

exports.getEventById = async function(id) {
    return events[id] 
}


/**
 * Get all events
 * Get all event details
 *
 **/
exports.getEvents = async function() {
    return Object.values(events)
}


/**
 * Update the event
 * Update the single event in our system.
 *
 * body Event Update the event (optional)
 * id Integer 
 * returns Event
 **/
exports.updateEvent = async function(body,id) {
    body.id = id
    events[body.id] = body
    return body
}

