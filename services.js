//SERVICIOS
//Permitirá asociar el contendido de las dos variables $scope.city 
//(que son independientes aunque se llamen igual) con las diferentes vistas
myWeatherApp.service('cityService', function(){
	this.cityName = 'New York, NY';
});