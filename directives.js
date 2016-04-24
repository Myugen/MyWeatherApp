//DIRECTIVAS
//Una directiva no es más que la aplicación de una plantilla a cualquier vista
//que la llame, el nombre de la directiva creará un elemento (TAG), en este caso,
//que coincidirá con la normalización HTML del nombre de la directiva (HTML <---> camelCase),
//es decir, para cada elemento <weather-report> se le aplicará la plantilla creada
//en la directiva weatherReport
myWeatherApp.directive('weatherReport', function(){
	// Runs during compile
	return {
		//scope contendrá las diferentes variables que se le pasarán como atributos
		//del elemento <weather-report>, que está llamado por ejemplo en forecast
		scope: {
			weatherDay: "=", //"=" significa que espera un objeto en este caso w
			convertToDate: "&", //"&" significa que espera una función
			dateFormat: "@" //"@" significa que espera un string
		}, // {} = isolate, true = child, false/undefined = no change
		restrict: 'E', // E = Element, A = Attribute, C = Class, M = Comment
		templateUrl: 'directives/weatherReport.html', //digo donde se encuentra la plantilla a mostrar
		replace: true, //hace que el elemento weather-report sea sustituido por los elementos de weatherReport.html
	};
});