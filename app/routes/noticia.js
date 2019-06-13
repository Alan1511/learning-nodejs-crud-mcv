module.exports = function (application) {
	
	application.get('/noticia/', function(req, res){			
		res.render('noticia/list');
		// este render se refere ao arquivo /noticia/list.ejs
		//que está dentro da pasta views
	});

	application.post('/noticia/list', function(req, res){
		application.app.controllers.noticia.list(application, req, res);
	});

	application.get('/noticia/show/:noticia_id', function(req, res){
		
	});	

	application.post('/noticia/getById', function(req, res){		
		application.app.controllers.noticia.getById(application, req, res);
	});	

	application.get('/noticia/add', function(req, res){
	
	});
		
	application.post('/noticia/add', function(req, res){
	
	});

	application.get('/noticia/edit/:noticia_id', function(req, res){
	
	});	
	
	application.post('/noticia/edit', function(req, res){
	
	});

	application.get('/noticia/delete/:noticia_id', function(req, res){
	
	});	
		
}