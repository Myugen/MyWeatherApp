//CONTROLADORES
myWeatherApp.controller('homeController', ['$scope', 'cityService', function($scope, cityService){
	$scope.city = cityService.cityName;

	//Creo un 'watcher' para que cada cambio en el $scope.city
	//actualice la variable del servicio
	$scope.$watch('city', function() {
		cityService.cityName = $scope.city;
	});
}]);

myWeatherApp.controller('forecastController', ['$scope', 'cityService', '$resource', '$routeParams', function($scope, cityService, $resource, $routeParams) {
	$scope.appid = '5c27018f71ec43124bc0c78ab8a69ff8';
	$scope.city = cityService.cityName;
	$scope.days = $routeParams.days || '2';

	//Establezco la conexión con la API
	$scope.weatherAPI = $resource('http://api.openweathermap.org/data/2.5/forecast/daily', { callback: "JSON_CALLBACK" }, { get: { method: "JSONP" }});

	//Obtengo los datos mediante un GET pasándole varios parámetros
	//como la ciudad (q), cuantos dias (cnt), mi unidad métrica (units)
	//y mi id de la api (appid)
	$scope.weatherResult = $scope.weatherAPI.get({
		q: $scope.city,
		cnt: $scope.days,
		units: 'metric',
		appid: $scope.appid
	});

	$scope.convertToDate = function(dt) {
		return new Date(dt * 1000);
	}

}]);
