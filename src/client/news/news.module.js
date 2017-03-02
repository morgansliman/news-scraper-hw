angular
	.module('starterApp', ['ngSanitize', 'ngMaterial', 'users'])
	.config(appConfig);

function appConfig($mdThemingProvider, $mdIconProvider){

	$mdIconProvider
		.defaultIconSet("./assets/svg/avatars.svg", 128)
		.icon("menu"       , "./assets/svg/menu.svg"        , 24)
		.icon("share"      , "./assets/svg/share.svg"       , 24)
		.icon("google_plus", "./assets/svg/google_plus.svg" , 512)
		.icon("hangouts"   , "./assets/svg/hangouts.svg"    , 512)
		.icon("twitter"    , "./assets/svg/twitter.svg"     , 512)
		.icon("phone"      , "./assets/svg/phone.svg"       , 512);

	var customBlueMap = 		$mdThemingProvider.extendPalette('light-blue', {
		'contrastDefaultColor': 'light',
		'contrastDarkColors': ['50'],
		'50': 'ffffff'
	});
	$mdThemingProvider.definePalette('customBlue', customBlueMap);
	$mdThemingProvider.theme('default')
		.primaryPalette('customBlue', {
			'default': '500',
			'hue-1': '50'
		})
		.accentPalette('pink');
}