var app = angular.module('Beer',['ngRoute','ngResource']);

//Aqui começa as configurações do app
app.config(function($routeProvider){

	$routeProvider.when('/beers', {
		templateUrl: './views/beer/beersList.html',
		controller: 'BeerController'
	});

	$routeProvider.when('/cadastro', {
		templateUrl: './views/beer/beersCad.html',
		controller: 'BeerController'
	});

	$routeProvider.when('/cadastro/:id', {
		templateUrl: './views/beer/beersCad.html',
		controller: 'BeerController'
	});

	$routeProvider.otherwise({redirectTo:'/'});

});
/*// view engine setup
app.engine('html', require('ejs').renderFile);
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', routes);
app.use('/users', users);*/
