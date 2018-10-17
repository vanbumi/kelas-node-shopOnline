#### MedioCademy Bootcamp Specialist.

---

## NodeJS Project Shop Online

### #8 Membuat Method POST "Add Page"

Buka file routes/admin_page.js, tambahkan kode dibawah ini :

	// POST add page
	router.post('/add-page', function(req,res) {
		req.checkBody('title', "Title must have a value").notEmpty();
		req.checkBody('content', "Content must have a value").notEmpty();
		
		var title = req.body.title;
		var slug = req.body.slug.replace(/\s+/g, '-').toLowerCase();
		if (slug == "") slug = title.replace(/\s+/g, '-').toLowerCase();
		var content = req.body.content;
		
		var errors = req.validationErrors();
		
		if (errors) {
			console.log('errors');
			res.render('admin/add_page', {
				errors: errors,
				title: title,
				slug: slug,
				content: content
			});
		} else {
			console.log('success');
		}
		
	});
	
Selanjutnya kita ingin "error messages" muncul di adminheader.ejs, tambahkan code dibawah ini pada file adminheader.ejs :

	<% if (errors) { %>
		<% errors.forEach(function(error) { %>
			<div class="alert alert-danger">
				<%= error.msg %>
			</div>
		<% }); %>
	<% } %>	

Bila anda refresh pada browser localhost:3000/admin/pages/add-page akan muncul error "errors is not defined"

Solusi nya kita harus mensetup global variable pada file app.js sbb:

	// Setup global errors variable
	app.locals.error = null;

Jangan lupa restart server dan refresh browser localhost:3000/admin/pages/add-page dan coba untuk send form kosong, maka akan muncul "error messages".

#### Menyimpan ke dalam database

Pada file admin_pages.js impor page mode

	// Get Page model
	var Page = require('../models/page')

Rubah else diatas :

	} else {
			console.log('Success');
		}
		
Menjadi :

	} else {
			Page.findOne({slug: slug}, function(err, page) {
				if (page) {
					req.flash('danger', 'Page slug exist, choose another');
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
						sorting: 0
					});
					
					page.save(function (err) {
						if (err)
							return console.log(err);
							
						req.flash('succes', 'Page added!');
						res.redirect('/admin/pages')
					});
				}
			});
		}

Coba di localhost:3000/admin/pages/add-page dengan menambahkan 

	Title = Home
	Slug = 
	Content = Home Page
	
	Klik Submit
	
Kemudian cek di database mongodb compas pada collection page.	

































---
Copyright &copy;MedioSoft 2018 
Dilarang memperbanyak dan mendistribusikan Materi Training ini tanpa ijin dari MedioSoft Corporation. Pelanggaran akan hak cipta dapat ajukan ke Institusi Hukum yang berlaku.