var Instaplanner = Instaplanner || {};

// need to define data model for
// --- myTrip
// --- activity

// Service for dealing with myTrip (CRUD)
Instaplanner.myTrip = function ($) {
    'use strict';

    self = {};

    self.init = function (myTripId) {
        // use myListId to load by
        // - client-side cookie
        // - if no matching cookie, check server based on myListId
        // - if no myList found, create a new one (i.e. create a new cookie instance)
        
    };

    // returns the current myTrip
    self.get = function () {

    };

    // adds a selected Card to the current myTrip
    self.add = function (card) {

    };

    self.remove = function (card) {

    };

    // persists the current myList to the server db, using the Guid (same key as used by cookie)
    self.save = function () {

    };

    self.getShareUrl = function () {
        // copy and save current myTrip as new instance
        // provide Url to share, which will include the Guid/Id of the new myTrip 

    }

    // to allow a new list to be created based on the current list - whereby replacing the current myTrip model with a new one
    // returns Id of the newly created myTrip
    self.copy = function (myTripId) {

    };

}(jQuery)