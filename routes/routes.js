module.exports = function(router,Beer){
	
	//Definindo as rotas
	router.route('/beers')
		.post(function(req,res){

			var beer = new Beer();
			beer.nome = req.body.nome;
			beer.quantidade = req.body.quantidade;
			beer.valor = req.body.valor;

			beer.save(function(err){
				if (err) {
					res.send(err);
				};
				res.json({message: 'Beer cadastrada!'});
			});
		})
		.get(function(req,res){
			Beer.find(function(err, beers) {
				if (err){
					res.send(err);
				};
				res.json(beers);
			});
		});

	router.route('/beers/:beer_id')
		.get(function(req,res){
			Beer.findById(req.params.beer_id,function(eer,beer){
				if (eer) {
					res.send(eer);
				};
				res.json(beer);
			});
		})
		.put(function(req,res){
			Beer.findById(req.params.beer_id,function(eer,beer){
				if (eer) {
					res.send(eer);
				};

				beer.nome = req.body.nome;
				beer.quantidade = req.body.quantidade;
				beer.valor = req.body.valor;

				beer.save(function(err){
					if (err) {
						res.send(err);
					};
					res.json({message: 'Beer atualizada'});
				});

			});
		}).delete(function(req,res){
			Beer.remove({_id: req.params.beer_id},function(err,beer){
				if (err) {
					res.send(err);
				};
				res.json({message: 'Deletado com sucesso'});
			});
		});
			// catch 404 and forward to error handler
			app.use(function(req, res, next) {
			  var err = new Error('Not Found');
			  err.status = 404;
			  next(err);
			});

			// error handlers

			// development error handler
			// will print stacktrace
			if (app.get('env') === 'development') {
			  app.use(function(err, req, res, next) {
			    res.status(err.status || 500);
			    res.render('error', {
			      message: err.message,
			      error: err
			    });
			  });
			}

			// production error handler
			// no stacktraces leaked to user
			app.use(function(err, req, res, next) {
			  res.status(err.status || 500);
			  res.render('error', {
			    message: err.message,
			    error: {}
			  });
			});
};


