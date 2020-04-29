#### MedioCademy Bootcamp Specialist.

---

## NodeJS Project Shop Online.

### #19 Product, Model dan Route.

#### Create new collection

Bukalah mongodb compass dan buatlah collection baru dengan nama "products"

#### Create Model for Product

models > product.js, ketikan code sbb:

    var mongoose = require('mongoose');

    // Product Schema
    var ProductSchema = mongoose.Schema({
    	title: {
    		type: String,
    		require: true
    	},
    	slug: {
    		type: String,
    	},
    	desc: {
    		type: String,
    		require: true
    	},
    	category: {
    		type: String,
    		require: true
    	},
    	price: {
    		type: Number,
    		require: true
    	},
    	image: {
    		type: String,
    	}
    })

    var Product = module.exports = mongoose.model('Product', ProductSchema);

#### Install new library

Kita akan menginstall beberapa library baru:

    npm install --save express-fileupload fs-extra mkdirp resize-img

- express-fileupload: adalah plugin untuk upload file dari komputer anda ke server.
- fs-extra: agar node bisa bekerja dengan file system pada komputer anda, misalnya untuk Read files, Create files, Update files, Delete files, Rename files.
- mkdirp: plugin agar bisa membuat directory.
- resize-img: plugin untuk mengatur size image.

#### Require library tsb di file app.js

    var fileUpload = require('express-fileupload')

#### Create middleware untuk fileUpload

Letakan diatas **boddy parser middleware**

    // Express fileUpload middleware
    app.use(fileUpload());

#### Set routes

Setup route untuk Product Admin masih di file app.js

    // Set routes
    var adminProducts = require('./routes/admin_products.js');

    app.use('/admin/products', adminProducts);

#### Create route file

Buat file baru di routes > admin_products.js

Tuliskan code sbb:

    var express = require('express');
    var router = express.Router();
    var mkdirp = require('mkdirp');
    var fs = require('fs-extra');
    var resizeImg = require('resize-img');

    // Get Product model.
    var Product = require('../models/product');

    // Get pages index
    router.get('/', function(req, res){
    	// mengambil data dari database
    	Page.find({}).sort({sorting: 1}).exec(function(err, pages) {
    		res.render('admin/pages', {
    			pages: pages
    		});
    	});
    });

    // Membuat add page dengan method GET
    router.get('/add-page', function(req, res) {

    	var title = "";
    	var slug = "";
    	var content = "";

    	res.render('admin/add_page', {
    		title: title,
    		slug: slug,
    		content: content
    	});
    });

    // Membuat method POST pada add page
    router.post('/add-page', function(req, res) {

    	req.checkBody('title', 'Title must have a value').notEmpty();
    	req.checkBody('content', 'Content must have a value').notEmpty();

    	var title = req.body.title;
    	var slug = req.body.slug.replace(/\s+/g, '-').toLowerCase();
    	if (slug == '') slug = title.replace(/\s+/g, '-').toLowerCase();

    	var content = req.body.content;

    	var errors = req.validationErrors();

    	if (errors) {
    		res.render('admin/add_page', {
    			errors: errors,
    			title: title,
    			slug: slug,
    			content: content
    		});
    	} else {
    		Page.findOne({slug: slug}, function(err, page) {
    			if (page) {
    				req.flash('danger', 'Page slug is exist, choose another slug');
    				res.render('admin/add_page', {
    					title: title,
    					slug: slug,
    					content: content
    				});
    			} else {
    				var page = new Page({
    					title: title,
    					slug: slug,
    					content: content,
    					sorting: 100
    				});

    				page.save(function (err) {
    					if (err)
    						return console.log(err);

    					req.flash('success', 'Page added!');
    					res.redirect('/admin/pages')
    				});
    			}
    		});
    	}
    });

    // Membuat POST sortable pages

    router.post('/reorder-pages', function(req, res) {

    	// console.log(req.body);

    	var ids = req.body['id[]'];

    	var count = 0;

    	for (var i = 0; i < ids.length; i++) {
    		var id = ids[i];
    		count++;

    		(function(count) {
    			Page.findById(id, function (err, page) {
    				page.sorting = count;
    				page.save(function (err) {
    					if (err)
    						return console.log(err)
    				});
    			});
    		})(count);
    	}
    });

    // GET edit page

    router.get('/edit-page/:slug', function(req, res) {

    	Page.findOne({slug: req.params.slug}, function(err, page) {
    		if (err)
    			return console.log(err);

    		res.render('admin/edit_page', {
    			title: page.title,
    			slug: page.slug,
    			content: page.content,
    			id: page._id
    		});
    	});
    });

    // Membuat method POST pada edit page
    router.post('/edit-page/:slug', function(req, res) {

    	req.checkBody('title', 'Title must have a value').notEmpty();
    	req.checkBody('content', 'Content must have a value').notEmpty();

    	var title = req.body.title;
    	var slug = req.body.slug.replace(/\s+/g, '-').toLowerCase();
    	if (slug == '') slug = title.replace(/\s+/g, '-').toLowerCase();

    	var content = req.body.content;
    	var id = req.body.id;

    	var errors = req.validationErrors();

    	if (errors) {
    		res.render('admin/edit_page', {
    			errors: errors,
    			title: title,
    			slug: slug,
    			content: content,
    			id: id
    		});
    	} else {
    		Page.findOne({slug: slug, _id:{'$ne':id}}, function(err, page) {

    			if (page) {
    				req.flash('danger', 'Page slug is exist, choose another slug');
    				res.render('admin/edit_page', {
    					title: title,
    					slug: slug,
    					content: content,
    					id: id
    				});
    			} else {
    				Page.findById(id, function (err, page) {
    					if (err)
    						return console.log(err);

    						page.title = title;
    						page.slug = slug;
    						page.content = content;

    						page.save(function (err) {
    							if (err)
    								return console.log(err);

    							req.flash('success', 'Page has been update!');
    							res.redirect('/admin/pages/edit-page/'+page.slug);
    						});

    				});

    			}
    		});
    	}
    });

    // GET delete page
    router.get('/delete-pages/:id', function (req, res) {
    	Page.findByIdAndRemove(req.params.id, function (err) {
    			if (err)
    					return console.log(err);

    			req.flash('success', 'Page deleted!');
    			res.redirect('/admin/pages/');
    	});
    });

    // export
    module.exports = router;

<br>

continue next video

<br><br><br><br>

---

Copyright &copy;MedioCademy.com 2018
Dilarang memperbanyak dan mendistribusikan Materi Training ini tanpa ijin dari MedioSoft Corporation. Pelanggaran akan hak cipta dapat ajukan ke Institusi Hukum yang berlaku.
