#### MedioCademy Bootcamp Specialist.

---

## NodeJS Project Shop Online.

### #17 Edit Category

Buka routes > admin_categories.js.

Hapus code dibawah judul ```//Membuat POST sortable pages``` karena ini adalah file routes pages (hasil copas sebelumnya) dan kita tidak membutuhkan nya.

Edit code GET edit category menjadi seperti dibawah ini:

	// GET edit Category
	router.get('/edit-category/:id', function(req, res) {

		Category.findById(req.params.id, function(err, category) {
			if (err)
				return console.log(err);

			res.render('admin/edit_category', {
				title: category.title,
				id: category._id
			});  
		});
	});
	

Kemudian buka views > admin > categories.ejs dan update bagian action edit didalam table tag ```<tbody>```:

	<td><a href="/admin/categories/edit-category/<%= cat._id %>">Edit</a></td>
	

Anda perhatikan potongan code diatas ```res.render('admin/edit_category', {```	kita belum memiliki file edit_category, untuk kita kita akan membuat nya pada folder views > admin > edit_category.

Untuk langkah cepatnya kita copas file edit_page.ejs, rename dan update menjadi edit_category seperti dibawah ini:

	<%- include('../_layouts/adminheader') %>

	<br><br>

	<h2 class="page-title">Edit a Category</h2>
	<a href="/admin/categories" class="btn btn-primary">Back to all Categories</a>

	<br><br>

	<form method="POST" action="/admin/categories/edit-category/<%= id %>">

		<div class="form-group">
			<label for="">Title</label>
			<input type="text" class="form-control" name="title" value="<%= title %>" placeholder="Title">
		</div>

		<button class="btn btn-primary">Submit</button>

	</form>

	<%- include('../_layouts/adminfooter') %>

Buka localhost:3000/admin/categories dan klik edit, namun button Submit belum berfungsi.

Kemudian kita akan update juga bagian POST edit category, untuk memfungsikan button Submit, apabila clik submit maka akan melakukan update pada database.

Update seperti dibawah ini:

	// Membuat method POST pada edit category
	router.post('/edit-category/:id', function(req, res) {

		req.checkBody('title', 'Title must have a value').notEmpty();
		
		var title = req.body.title;
		var slug = title.replace(/\s+/g, '-').toLowerCase();
		var id = req.params.id;

		var errors = req.validationErrors();

		if (errors) {
			res.render('admin/edit_category', {
				errors: errors,
				title: title,
				id: id
			});
		} else {
			Category.findOne({slug: slug, _id:{'$ne':id}}, function(err, category) {

				if (category17) {
					req.flash('danger', 'Category title is exist, choose another');
					res.render('admin/edit_category', {
						title: title,
						id: id
					});
				} else {
					Category.findById(id, function (err, category) {
						if (err) 
							return console.log(err);

							category.title = title;
							category.slug = slug;
							
							category.save(function (err) {
								if (err)
									return console.log(err);

								req.flash('success', 'Category has been Edited!');
								res.redirect('/admin/categories/edit-category/' + id);
							});

					});

				}
			});
		}
	});

Coba pada browser localhost:3000/admin/categories dan lakukan edit category.














<br>

continue next video




















<br><br><br><br>

---
Copyright &copy;MedioSoft 2018 
Dilarang memperbanyak dan mendistribusikan Materi Training ini tanpa ijin dari MedioSoft Corporation. Pelanggaran akan hak cipta dapat ajukan ke Institusi Hukum yang berlaku.