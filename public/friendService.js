angular.module('userProfiles')
.service('friendService', function( $http ) {


    this.login = function( user ) {
      return $http.post('/api/login', { name: user.name, password: user.password })
    };

    this.getFriends = function() {
      return $http ({
        method: 'GET',
        url: '/api/profiles'
      })
    };

});
