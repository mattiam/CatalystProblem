(function () {
    "use strict";

    angular
        .module("common.services")
        .factory("productResource",
        ["$resource", personResource]);

    function personResource($resource) {
        return $resource("/api/search/:searchParam");
    }
}());