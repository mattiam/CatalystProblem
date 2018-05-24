(function () {
    "use strict";
    angular
        .module("personManagement")
        .controller("PersonListCtrl",
        ["personResource",
            PersonListCtrl]);
    function PersonListCtrl(personResource) {
        var vm = this;

        personResource.query(function(data) {
            vm.people = data;
        });

        //vm.people = [
        //    {
        //        'imgUrl': '/Images/Yoda.png',
        //        'name': 'Yoda',
        //        'address': '123 Main St., Anywhere, USA, 22333',
        //        'age': '22',
        //        'interests': 'beekeeping, boating, surfing, mountain biking, hiking, reading books, programming'
        //    },
        //    {
        //        'imgUrl': '/Images/Luke.jpg',
        //        'name': 'Luke',
        //        'address': '123 far far away, Galaxy, USA, 22333',
        //        'age': '26',
        //        'interests': 'defeating the Empire'
        //    }
        //];
    }
}());