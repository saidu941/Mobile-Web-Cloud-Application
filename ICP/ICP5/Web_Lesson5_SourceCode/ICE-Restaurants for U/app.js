// 'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [])

    .controller('View1Ctrl', function ($scope, $http) {
        $scope.venueList = new Array();
        $scope.mostRecentReview;
        $scope.getVenues = function () {
            var placeEntered = document.getElementById("txt_placeName").value;
            var searchQuery = document.getElementById("txt_searchFilter").value;
            if (placeEntered != null && placeEntered != "" && searchQuery != null && searchQuery != "") {

                //This is the API that gives the list of venues based on the place and search query.
                var handler = $http.get("https://api.foursquare.com/v2/venues/search" +
                    "?client_id=S33NVW3ITS0FDWF0B3CUVUHLCIR5JFCYPGHF5HZ1NOXIXNON" +
                    "&client_secret=C2OVCMX1RJVEPTE5LYXFXFRBBKWDGUF4G0IEHFUDEAFZJUWE" +
                    "&v=20160215&limit=5" +
                    "&near=" + placeEntered +
                    "&query=" + searchQuery);

                handler.success(function (data) {
                    if (data != null && data.response != null && data.response.venues != undefined && data.response.venues != null) {
                        // Tie an array named "venueList" to the scope which is an array of objects.
                        // Each object should have key value pairs where the keys are "name", "id" , "location" and values are their corresponding values from the response
                        // Marks will be distributed between logic, implementation and UI
                        console.log(data.response.venues);

                        //var venues = data.response.venues;

                        $scope.venueList = Object.keys(data.response.venues).map(function (k) {
                            $scope.isLoading = false;
                            var i = data.response.venues[k];
                            console.log(i.name);
                            return {name: i.name, location: i.location.address, contact: i.contact.phone  }
                        });

                    }
                })
                handler.error(function (data) {
                    alert("There was some error processing your request. Please try after some time.");
                });
            }
        }
    });
