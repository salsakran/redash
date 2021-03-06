(function () {
    var Dashboard = function($resource) {
        var resource = $resource('/api/dashboards/:slug', {slug: '@slug'});
        resource.prototype.canEdit = function() {
            return currentUser.is_admin || currentUser.name == this.user;
        }
        return resource;
    }

    angular.module('redash.services')
        .factory('Dashboard', ['$resource', Dashboard])
})();
