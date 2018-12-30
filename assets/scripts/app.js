// $("a").click(function(e) {
// 	alert("lol");
// 	// e.preventDefault();
// 	alert($(this).parent().parent().next());
// 	$(this).parent().next().css("display", "block");
// });

$("body#home section#work div.toggle i.l").click(function() {
	var current = $("div.container#projects .row.active");
	var prev = current.prev("div.container#projects .row");
	if (prev.length == 0) {
		$("div.container#projects .row").last().addClass("active");
	} else {
		prev.addClass("active");
	}
	current.removeClass("active");
});

$("body#home section#work div.toggle i.r").click(function() {
	var current = $("div.container#projects .row.active");
	var next = current.next("div.container#projects .row");
	if (next.length == 0) {
		$("div.container#projects .row").first().addClass("active");
	} else {
		next.addClass("active");
	}
	current.removeClass("active");
});

var app = angular.module('primaryApp', ['ui.router', 'ngAnimate']);

app.config(function($stateProvider, $urlRouterProvider, $locationProvider){

	$stateProvider

	.state('home', {
		url: "/",
		templateUrl: "/assets/bower_components/angular/partials/home.html",
	})

	.state('apollo', {
		url: '/project/apollo',
		templateUrl: "/assets/bower_components/angular/partials/apollo.html",
		controller: 'apolloController'
	})

	.state('pixel', {
		url: '/project/protons-to-pixels',
		templateUrl: "/assets/bower_components/angular/partials/pixel.html",
		controller: 'pixelController'
	})

	.state('pe', {
		url: '/project/project-element',
		templateUrl: "/assets/bower_components/angular/partials/pe.html",
		controller: 'peController'
	})

	.state('minet', {
		url: '/project/minet',
		templateUrl: "/assets/bower_components/angular/partials/minet.html",
		controller: 'minetController'
	})

	.state('themis', {
		url: '/project/themis',
		templateUrl: "/assets/bower_components/angular/partials/themis.html",
		controller: 'themisController'
	})

	.state('safai', {
		url: '/project/safai',
		templateUrl: "/assets/bower_components/angular/partials/safai.html",
		controller: 'safaiController'
	})

	.state('ppp', {
		url: '/project/projectPPP',
		templateUrl: "/assets/bower_components/angular/partials/ppp.html",
		controller: 'pppController'
	})

	.state('tictactoe', {
		url: '/project/tictactoe',
		templateUrl: "/assets/bower_components/angular/partials/tictactoe.html",
		controller: 'tictactoeController'
	})

	.state('navchetna', {
		url: '/project/navchetna',
		templateUrl: "/assets/bower_components/angular/partials/navchetna.html",
		controller: 'navchetnaController'
	})

	$urlRouterProvider.otherwise('/');
	$locationProvider.html5Mode(true);

});

app.controller('apolloController', function($scope){
	$scope.name = 'Apollo';
	$scope.role = 'Concept \u00B7 Interaction Design \u0026 Development \u00B7 Branding';
}); 

app.controller('pixelController', function($scope){
	$scope.name = 'Protons to Pixels';
	$scope.role = 'Interaction \u0026 Graphic Design \u00B7 Development \u00B7 Branding';
}); 

app.controller('peController', function($scope){
	$scope.name = 'Project Element';
	$scope.role = 'Interaction Design';
}); 

app.controller('minetController', function($scope){
	$scope.name = 'MINET';
	$scope.role = 'Interaction \u0026 Graphic Design \u00B7 Development';
}); 

app.controller('themisController', function($scope){
	$scope.name = "The Mother's International School";
	$scope.role = 'Interaction \u0026 Graphic Design \u00B7 Development';
}); 

app.controller('safaiController', function($scope){
	$scope.name = "Saf.AI";
	$scope.role = 'Interaction \u0026 Graphic Design \u00B7 Development \u00B7 Branding';
}); 

app.controller('pppController', function($scope){
	$scope.name = "Project People Power Partnership";
	$scope.role = 'Conceptualisation \u00B7 Design \u00B7 Branding \u00B7 Development';
}); 

app.controller('tictactoeController', function($scope){
	$scope.name = "Digital TicTacToe";
	$scope.role = 'Design \u00B7 Development';
}); 

app.controller('navchetnaController', function($scope){
	$scope.name = "Navchetna";
	$scope.role = 'Print Design';
}); 


var navHeight = $('header').outerHeight();
$(window).scroll(function() {
	if ($(this).scrollTop() > navHeight - 30) {
		$("header").addClass("sticky");
	} else {
		$("header").removeClass("sticky");
	}
});

app.directive('thumbnailClick', function() {
	return {
		restrict: 'A',
		link: function(scope, element, attrs) {
			element.bind('click', function() {
				var src = $(this).attr('src');
				var captionNum = $(this).parent().data('content');
				$(".caption p.active").removeClass("active");
				$(".caption p[data-caption='" + captionNum + "']").addClass("active");
				$(".thumbnail.active").removeClass("active");
				$(this).parent().addClass("active");
				$(".showcase .twelve").eq(0).css("transition", "opacity 0.5s");
				$(".showcase .twelve").eq(0).css("opacity", 0);
				$(".caption p").css("display", "none");
				$(".caption p").css("transition", "opacity 0.5s");
				$(".caption p").css("opacity", 0);
				setTimeout(function() {
					$(".showcase .twelve").eq(0).css("opacity", 1);
					$(".showcase .twelve img").eq(0).hide();
					$(".showcase .twelve img").eq(0).attr('src', src);
					$(".showcase .twelve img").eq(0).show();
					$(".showcase .twelve img").eq(0).css({
						display: "block",
						opacity: 1,
						transition: "opacity 0.5s"
					});
					$(".caption p.active").css({
						display: "block",
						opacity: 1,
						transition: "opacity 0.5s"
					});
				}, 500);
			})
		}
	};
});

app.directive('rightCarousel', function() {
	return {
		restrict: 'A',
		link: function(scope, element, attrs) {
			element.bind('click', function() {
				var currentImg = $(".thumbnail.active");
				var nextImg = currentImg.next();
				if (nextImg.length == 0) {
					nextImg = $(".thumbnail").first();
				}
				currentImg.removeClass("active");
				nextImg.addClass("active");
				var src =  $(nextImg).find('img').attr('src');
				var captionNum = $(nextImg).data('content');
				$(".caption p.active").removeClass("active");
				$(".caption p[data-caption='" + captionNum + "']").addClass("active");
				$(".showcase .twelve").eq(0).css("transition", "opacity 0.5s");
				$(".showcase .twelve").eq(0).css("opacity", 0);
				$(".caption p").css("display", "none");
				$(".caption p").css("transition", "opacity 0.5s");
				$(".caption p").css("opacity", 0);
				setTimeout(function() {
					$(".showcase .twelve").eq(0).css("opacity", 1);
					$(".showcase .twelve img").eq(0).hide();
					$(".showcase .twelve img").eq(0).attr('src', src);
					$(".showcase .twelve img").eq(0).show();
					$(".showcase .twelve img").eq(0).css({
						display: "block",
						opacity: 1,
						transition: "opacity 0.5s"
					});
					$(".caption p.active").css({
						display: "block",
						opacity: 1,
						transition: "opacity 0.5s"
					});
				}, 500);
			})
		}
	};
});

app.directive('leftCarousel', function() {
	return {
		restrict: 'A',
		link: function(scope, element, attrs) {
			element.bind('click', function() {
				var currentImg = $(".thumbnail.active");
				var nextImg = currentImg.prev();
				if (nextImg.length == 0) {
					nextImg = $(".thumbnail").last();
				}
				currentImg.removeClass("active");
				nextImg.addClass("active");
				var src =  $(nextImg).find('img').attr('src');
				var captionNum = $(nextImg).data('content');
				$(".caption p.active").removeClass("active");
				$(".caption p[data-caption='" + captionNum + "']").addClass("active");
				$(".showcase .twelve").eq(0).css("transition", "opacity 0.5s");
				$(".showcase .twelve").eq(0).css("opacity", 0);
				$(".caption p").css("display", "none");
				$(".caption p").css("transition", "opacity 0.5s");
				$(".caption p").css("opacity", 0);
				setTimeout(function() {
					$(".showcase .twelve").eq(0).css("opacity", 1);
					$(".showcase .twelve img").eq(0).hide();
					$(".showcase .twelve img").eq(0).attr('src', src);
					$(".showcase .twelve img").eq(0).show();
					$(".showcase .twelve img").eq(0).css({
						display: "block",
						opacity: 1,
						transition: "opacity 0.5s"
					});
					$(".caption p.active").css({
						display: "block",
						opacity: 1,
						transition: "opacity 0.5s"
					});
				}, 500);
			})
		}
	};
});

// app.directive('readmoreClick', function() {
// 	return {
// 		restrict: 'A',
// 		link: function(scope, element, attrs) {
// 			element.bind('click', function() {
// 				alert(element.parent().css().html());
// 				$(this).parent().next("p").css("display", "block");
// 			})
// 		}
// 	};
// });