var Instaplanner = Instaplanner || {};

Instaplanner.service = function ($) {
    'use strict';

    var self = {};

    self.host;
    self.token;

    self.init = function (host, token) {
        self.host = host;
        self.token = token;
    };

    // return a list of all filters (Folders + associated Tags)
    // heirarchical structured model
    // Folder -> Tags
    self.getFilterOptions = function () {

        var filterOptions;

        // make the below call to crowdriff api, which will include the entire heirarchy of folders + tags
        //https://api.crowdriff.com/v1/folders?token=e3095f0c-db49-11e5-855f-e22660f10656&include=tags

        var request = self.host + '/folders?token=' + self.token + '&include=tags';

        // not sure if we need to do any particular mapping of data model - the default model provided by crowdriff for this 
        // matches pretty closely to what the Instaplanner model for this is (Theme -> Regions)
        $.getJSON(request, function (data) {
            filterOptions = data;
        });

        return filterOptions;
    };

    // returns first tier of tags (Folders in crowdriff terminology)
    self.getSortOptions = function () {

        var sortOptions;

        var request = self.host + '/folders?token=' + self.token;

        $.getJSON(request, function (data) {
            sortOptions = data;
        });

        return sortOptions;
    };

    // for getting cards to list on the intial card listing screen
    self.searchCards = function (theme, region) {

        var cards;

        var request = self.host + '/search?token=' + self.token + '&include=include';

        // build request based on provided theme/region ... should have a default to provided for this as well as paging (offset, size)

        // map the Theme and Region(s) provided to crowdriff body POST model - at this point mainly just tags (current crowdriff search only supports providing tags, not folders)
        // note: this should also be in its own mapping class 
        var requestCriteria = {};

        $.post(request, requestCriteria).done(function (data) {

            // map the returned list of Assets to Instaplanner Cards
            $(data).each(function (asset) {
                cards.push(instaplannerCard.mapFrom(asset));
            });
            
        });

        return cards;
    };

    self.getCardById = function (cardId) {

        var request = self.host + '/assets/' + cardId + '?token=' + self.token;


    };

    self.getCardsFor = function (myTripId) {

        // unless we persist the entire Instaplanner model, then we will be forced to have a seperate call for
        // each card in a persons My Trip collection .. not desirable

        // need to think about this some more in terms of how much information we are persisting .. at this point feels like 
        // the entire Instaplanner model

        // we would then need a strategy for how often we refresh our Instaplanner model with crowdriff data ..

    };

}(jQuery)