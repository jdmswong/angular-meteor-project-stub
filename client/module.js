// Module settings
angular.module('newProject')

.run(function() {


	$rootScope.$on("$stateChangeError", function(event, toState, toParams, fromState, fromParams, error) {
    switch(error) {
      case "AUTH_REQUIRED":
        $state.go('logIn');
        break;
			case "NEED_ADMIN":
				console.log("you need to be an admin for that");
				break;
      case "FORBIDDEN":
        console.log("that is forbidden")
        break;
      case "UNAUTHORIZED":
        console.log("unauthorized access")
        break;
      default:
        console.log("internal client-side error")
    }
  });
	
})

.config(function($urlRouterProvider) {

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/');

})

;