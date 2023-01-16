/* tslint:disable */
/* eslint-disable */
/**
 * Calendly Clone
 * A clone of the popular calendly.com.
 *
 * The version of the OpenAPI document: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import { Configuration } from './configuration';
import globalAxios, { AxiosPromise, AxiosInstance, AxiosRequestConfig } from 'axios';
// Some imports not used depending on template conditions
// @ts-ignore
import { DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setOAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction } from './common';
// @ts-ignore
import { BASE_PATH, COLLECTION_FORMATS, RequestArgs, BaseAPI, RequiredError } from './base';

/**
 * 
 * @export
 * @enum {string}
 */

export const DayOfWeek = {
    Mon: 'mon',
    Tue: 'tue',
    Wed: 'wed',
    Thu: 'thu',
    Fri: 'fri',
    Sat: 'sat',
    Sun: 'sun'
} as const;

export type DayOfWeek = typeof DayOfWeek[keyof typeof DayOfWeek];


/**
 * 
 * @export
 * @interface Event
 */
export interface Event {
    /**
     * 
     * @type {number}
     * @memberof Event
     */
    'id': number;
    /**
     * 
     * @type {string}
     * @memberof Event
     */
    'title': string;
    /**
     * 
     * @type {string}
     * @memberof Event
     */
    'eventTz': string;
    /**
     * In minutes. timeRanges cannot be smaller than this number, adding them will result in a 400 response.
     * @type {number}
     * @memberof Event
     */
    'slotDuration': EventSlotDurationEnum;
    /**
     * 
     * @type {Array<EventTimeRanges>}
     * @memberof Event
     */
    'timeRanges': Array<EventTimeRanges>;
}

export const EventSlotDurationEnum = {
    NUMBER_15: 15,
    NUMBER_20: 20,
    NUMBER_30: 30,
    NUMBER_60: 60
} as const;

export type EventSlotDurationEnum = typeof EventSlotDurationEnum[keyof typeof EventSlotDurationEnum];

/**
 * 
 * @export
 * @interface EventTimeRanges
 */
export interface EventTimeRanges {
    /**
     * 
     * @type {DayOfWeek}
     * @memberof EventTimeRanges
     */
    'dayOfWeek'?: DayOfWeek;
    /**
     * 
     * @type {string}
     * @memberof EventTimeRanges
     */
    'startTime'?: string;
    /**
     * 
     * @type {string}
     * @memberof EventTimeRanges
     */
    'endTime'?: string;
}
/**
 * 
 * @export
 * @interface InlineResponse200
 */
export interface InlineResponse200 {
    /**
     * 
     * @type {Array<Event>}
     * @memberof InlineResponse200
     */
    'items': Array<Event>;
}
/**
 * 
 * @export
 * @interface InlineResponse2001
 */
export interface InlineResponse2001 {
    /**
     * 
     * @type {Array<Reservation>}
     * @memberof InlineResponse2001
     */
    'items': Array<Reservation>;
}
/**
 * 
 * @export
 * @interface Reservation
 */
export interface Reservation {
    /**
     * 
     * @type {number}
     * @memberof Reservation
     */
    'id': number;
    /**
     * 
     * @type {number}
     * @memberof Reservation
     */
    'eventId': number;
    /**
     * 
     * @type {string}
     * @memberof Reservation
     */
    'email': string;
    /**
     * 
     * @type {string}
     * @memberof Reservation
     */
    'name': string;
    /**
     * 
     * @type {string}
     * @memberof Reservation
     */
    'localTz': string;
    /**
     * 
     * @type {string}
     * @memberof Reservation
     */
    'startDateTime': string;
    /**
     * 
     * @type {string}
     * @memberof Reservation
     */
    'endDateTime': string;
}

/**
 * EventsApi - axios parameter creator
 * @export
 */
export const EventsApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * Get event details
         * @summary Get event
         * @param {number} id 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getEventById: async (id: number, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            assertParamExists('getEventById', 'id', id)
            const localVarPath = `/events/{id}`
                .replace(`{${"id"}}`, encodeURIComponent(String(id)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Get all event details
         * @summary Get all events
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getEvents: async (options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/events`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Reserve a given event
         * @summary Reserve a given event and time.
         * @param {Reservation} [reservation] The reservation.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        reserveEvent: async (reservation?: Reservation, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/reservations`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(reservation, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Update the single event in our system.
         * @summary Update the event
         * @param {number} id 
         * @param {Event} [event] Update the event
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        updateEvent: async (id: number, event?: Event, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            assertParamExists('updateEvent', 'id', id)
            const localVarPath = `/events/{id}`
                .replace(`{${"id"}}`, encodeURIComponent(String(id)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'PUT', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(event, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * EventsApi - functional programming interface
 * @export
 */
export const EventsApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = EventsApiAxiosParamCreator(configuration)
    return {
        /**
         * Get event details
         * @summary Get event
         * @param {number} id 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getEventById(id: number, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Event>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getEventById(id, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Get all event details
         * @summary Get all events
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getEvents(options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<InlineResponse200>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getEvents(options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Reserve a given event
         * @summary Reserve a given event and time.
         * @param {Reservation} [reservation] The reservation.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async reserveEvent(reservation?: Reservation, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Reservation>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.reserveEvent(reservation, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Update the single event in our system.
         * @summary Update the event
         * @param {number} id 
         * @param {Event} [event] Update the event
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async updateEvent(id: number, event?: Event, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Event>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.updateEvent(id, event, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * EventsApi - factory interface
 * @export
 */
export const EventsApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = EventsApiFp(configuration)
    return {
        /**
         * Get event details
         * @summary Get event
         * @param {number} id 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getEventById(id: number, options?: any): AxiosPromise<Event> {
            return localVarFp.getEventById(id, options).then((request) => request(axios, basePath));
        },
        /**
         * Get all event details
         * @summary Get all events
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getEvents(options?: any): AxiosPromise<InlineResponse200> {
            return localVarFp.getEvents(options).then((request) => request(axios, basePath));
        },
        /**
         * Reserve a given event
         * @summary Reserve a given event and time.
         * @param {Reservation} [reservation] The reservation.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        reserveEvent(reservation?: Reservation, options?: any): AxiosPromise<Reservation> {
            return localVarFp.reserveEvent(reservation, options).then((request) => request(axios, basePath));
        },
        /**
         * Update the single event in our system.
         * @summary Update the event
         * @param {number} id 
         * @param {Event} [event] Update the event
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        updateEvent(id: number, event?: Event, options?: any): AxiosPromise<Event> {
            return localVarFp.updateEvent(id, event, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * EventsApi - object-oriented interface
 * @export
 * @class EventsApi
 * @extends {BaseAPI}
 */
export class EventsApi extends BaseAPI {
    /**
     * Get event details
     * @summary Get event
     * @param {number} id 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof EventsApi
     */
    public getEventById(id: number, options?: AxiosRequestConfig) {
        return EventsApiFp(this.configuration).getEventById(id, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Get all event details
     * @summary Get all events
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof EventsApi
     */
    public getEvents(options?: AxiosRequestConfig) {
        return EventsApiFp(this.configuration).getEvents(options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Reserve a given event
     * @summary Reserve a given event and time.
     * @param {Reservation} [reservation] The reservation.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof EventsApi
     */
    public reserveEvent(reservation?: Reservation, options?: AxiosRequestConfig) {
        return EventsApiFp(this.configuration).reserveEvent(reservation, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Update the single event in our system.
     * @summary Update the event
     * @param {number} id 
     * @param {Event} [event] Update the event
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof EventsApi
     */
    public updateEvent(id: number, event?: Event, options?: AxiosRequestConfig) {
        return EventsApiFp(this.configuration).updateEvent(id, event, options).then((request) => request(this.axios, this.basePath));
    }
}


/**
 * ReservationsApi - axios parameter creator
 * @export
 */
export const ReservationsApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * Get all reservations
         * @summary Get all reservations
         * @param {number} [eventId] Filter reservations by event
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getReservations: async (eventId?: number, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/reservations`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            if (eventId !== undefined) {
                localVarQueryParameter['eventId'] = eventId;
            }


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary Get the details of this reservation by ID.
         * @param {number} id 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getReservationsByID: async (id: number, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            assertParamExists('getReservationsByID', 'id', id)
            const localVarPath = `/reservations/{id}`
                .replace(`{${"id"}}`, encodeURIComponent(String(id)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Reserve a given event
         * @summary Reserve a given event and time.
         * @param {Reservation} [reservation] The reservation.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        reserveEvent: async (reservation?: Reservation, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/reservations`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(reservation, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * ReservationsApi - functional programming interface
 * @export
 */
export const ReservationsApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = ReservationsApiAxiosParamCreator(configuration)
    return {
        /**
         * Get all reservations
         * @summary Get all reservations
         * @param {number} [eventId] Filter reservations by event
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getReservations(eventId?: number, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<InlineResponse2001>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getReservations(eventId, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @summary Get the details of this reservation by ID.
         * @param {number} id 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getReservationsByID(id: number, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Reservation>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getReservationsByID(id, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Reserve a given event
         * @summary Reserve a given event and time.
         * @param {Reservation} [reservation] The reservation.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async reserveEvent(reservation?: Reservation, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Reservation>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.reserveEvent(reservation, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * ReservationsApi - factory interface
 * @export
 */
export const ReservationsApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = ReservationsApiFp(configuration)
    return {
        /**
         * Get all reservations
         * @summary Get all reservations
         * @param {number} [eventId] Filter reservations by event
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getReservations(eventId?: number, options?: any): AxiosPromise<InlineResponse2001> {
            return localVarFp.getReservations(eventId, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Get the details of this reservation by ID.
         * @param {number} id 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getReservationsByID(id: number, options?: any): AxiosPromise<Reservation> {
            return localVarFp.getReservationsByID(id, options).then((request) => request(axios, basePath));
        },
        /**
         * Reserve a given event
         * @summary Reserve a given event and time.
         * @param {Reservation} [reservation] The reservation.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        reserveEvent(reservation?: Reservation, options?: any): AxiosPromise<Reservation> {
            return localVarFp.reserveEvent(reservation, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * ReservationsApi - object-oriented interface
 * @export
 * @class ReservationsApi
 * @extends {BaseAPI}
 */
export class ReservationsApi extends BaseAPI {
    /**
     * Get all reservations
     * @summary Get all reservations
     * @param {number} [eventId] Filter reservations by event
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ReservationsApi
     */
    public getReservations(eventId?: number, options?: AxiosRequestConfig) {
        return ReservationsApiFp(this.configuration).getReservations(eventId, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Get the details of this reservation by ID.
     * @param {number} id 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ReservationsApi
     */
    public getReservationsByID(id: number, options?: AxiosRequestConfig) {
        return ReservationsApiFp(this.configuration).getReservationsByID(id, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Reserve a given event
     * @summary Reserve a given event and time.
     * @param {Reservation} [reservation] The reservation.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ReservationsApi
     */
    public reserveEvent(reservation?: Reservation, options?: AxiosRequestConfig) {
        return ReservationsApiFp(this.configuration).reserveEvent(reservation, options).then((request) => request(this.axios, this.basePath));
    }
}

