# NodeJS Project Shop Online

## Mediosoft Learning

### #12 Membuat Method POST Edit Page

Kita akan membuat method POST untuk membuat Edit Page seperti dibawah ini,
Buka file routes/admin_pages.js:

	// Membuat method POST pada Edit Page
	router.post('/edit-page', function(req, res) {

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
			Page.findOne({slug: slug, _id:{'$ne': id}}, function(err, page) {
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

Dan test pada browser localhost:3000/admin/pages, dan lakukan edit pada page tersebut.

Bila diperhatikan dari awal message success tidak muncul, maka bukalah file app.js dan update code Express Session middleware sbb:

	// Setup express session middleware
	app.use(session({
		secret: 'keyboard cat',
		resave: true,
		saveUninitialized: true,
		// cookie: { secure: true }
	}))

localhost:3000/admin/pages, dan lakukan edit pada page tersebut, maka message sudah bisa muncul.





























<br><br><br><br>

---
Copyright &copy;MedioSoft 2018 
Dilarang memperbanyak dan mendistribusikan Materi Training ini tanpa ijin dari MedioSoft Corporation. Pelanggaran akan hak cipta dapat ajukan ke Institusi Hukum yang berlaku.