# NodeJS Project Shop Online.

## Mediosoft Learning.

### #16 Menambah (add) Category.

Buka admin_category.js, update comment dibawah ini:

	// Membuat add page dengan method GET
	
Menjadi 

	// Membuat add Category dengan method GET
	
**Dan rubah GET METHODE code dibawah nya menjadi**	
	
	// Membuat add Category dengan method GET
	router.get('/add-category', function(req, res) {

		var title = "";

		res.render('admin/add_category', {
			title: title,
		});
	});
	
Sekarang kita membutuhkan file baru "*add_category*" dan buatlah file tsb dibawah folder views/admin/ beri nama: "add_category.ejs".

Dan sementara copy paste content nya dari file add_page.ejs update seperti dibawah ini:

	<%- include('../_layouts/adminheader') %>

	<br><br>

	<h2 class="page-title">Add a Category</h2>
	<a href="/admin/pages" class="btn btn-primary">Back to all categories</a>

	<br><br>

	<form method="POST" action="/admin/categories/add-category">

		<div class="form-group">
			<label for="">Title</label>
			<input type="text" class="form-control" name="title" value="<%= title %>" placeholder="Title">
		</div>

		<button class="btn btn-primary">Submit</button>

	</form>

	<%- include('../_layouts/adminfooter') %>

Kemudian anda cek di browser localhost:3000/admin/categories/add-category, klik button "add new category".

**POST METHOD add Category**

Update code nya seperti dibawah ini:

	// Membuat method POST pada add category
	router.post('/add-category', function(req, res) {

		req.checkBody('title', 'Title must have a value').notEmpty();
		
		var title = req.body.title;
		var slug = title.replace(/\s+/g, '-').toLowerCase();
		
		var errors = req.validationErrors();

		if (errors) {
			res.render('admin/add_category', {
				errors: errors,
				title: title
			});
		} else {
			Category.findOne({slug: slug}, function(err, category) {
				if (category) {
					req.flash('danger', 'Category title is exist, choose another slug');
					res.render('admin/add_category', {
						title: title
					});
				} else {
					var category = new Category({
						title: title,
						slug: slug
					});

					category.save(function (err) {
						if (err)
							return console.log(err);

						req.flash('success', 'Category added!');
						res.redirect('/admin/categories')
					});
				}
			});
		}
	});

Cek localhost:3000/admin/categories/add-category, tambahkan category *fruits*, *T-shirts*
























<br>

continue next video




















<br><br><br><br>

---
Copyright &copy;MedioSoft 2018 
Dilarang memperbanyak dan mendistribusikan Materi Training ini tanpa ijin dari MedioSoft Corporation. Pelanggaran akan hak cipta dapat ajukan ke Institusi Hukum yang berlaku.