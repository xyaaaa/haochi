var app = angular.module('myApp',['ui.router']);


//状态路由 home、about
app.config(function($stateProvider,$urlRouterProvider){
	$stateProvider.state('allNews',{
		url:'/allNews',
		templateUrl:'pages/allNews.html',
	}).state('dongtai',{
		url:'/dongtai',
		templateUrl:'pages/dongtai.html',
	});
	$urlRouterProvider.otherwise('/allNews');
})





