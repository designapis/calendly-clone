'use strict';

let latestId = 0
const reservations = {}


/**
 * Get all reservations
 * Get all reservations
 *
 * eventId Integer Filter reservations by event (optional)
 * returns inline_response_200_1
 **/
exports.getReservations = async function(eventId) {
    if(!eventId)
        return Object.values(reservations)
    return Object.values(reservations).filter(a => a.eventId == eventId)
}


/**
 * Get the details of this reservation by ID.
 *
 * id Integer 
 * returns Reservation
 **/
exports.getReservationsByID = async function(id) {
    return reservations[id]
}


/**
 * Reserve a given event and time.
 * Reserve a given event
 *
 * body Reservation The reservation. (optional)
 * returns Reservation
 **/
exports.reserveEvent = async function(body) {
    body.id = latestId++
    reservations[body.id] = body
    return body
}

