# NodeJS Project Shop Online

## Mediosoft Learning

### #11 Membuat Method GET Edit

Kita akan mengaktifkan button edit dengan membuat Edit Page.

Ikuti langkah-langkah dibawah ini:

#### Membuat routes get pada halaman admin_pages.js

Membuat routes get edit:

	/* GET edit page */
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

Membuat halaman baru edit_page.ejs pada views/admin/edit_page.ejs

Untuk mempercepat copas kode halaman add_page.ejs dan lakukan update seperti berikut:

	<%- include('../_layouts/adminheader') %>

	<br><br>

	<h2 class="page-title">Edit a Page</h2>
	<a href="/admin/pages" class="btn btn-primary">Back to all pages</a>

	<br><br>

	<form method="POST" action="/admin/pages/edit-page/<%= slug %>">

		<div class="form-group">
			<label for="">Title</label>
			<input type="text" class="form-control" name="title" value="<%= title %>" placeholder="Title">
		</div>

		<div class="form-group">
			<label for="">Slug</label>
			<input type="text" class="form-control" name="slug" value="<%= slug %>" placeholder="Slug">
		</div>

		<div class="form-group">
			<label for="">Content</label>
			<textarea class="form-control" name="content" cols="30" rows="10" placeholder="Content"><%= content %></textarea>
		</div>

Tambahkan input hidden id diatas button submit:

		<input type="hidden" name="id" value="<%= id %>">

		<button class="btn btn-primary">Submit</button>

	</form>

	<%- include('../_layouts/adminfooter') %>

* Di coba pada browser localhost:3000/admin/pages, klik edit pada about us.
* Klik kanan > Inspection untuk melihat hidden id. 

<br><br>

Continue to next video :)

























---
Copyright &copy;MedioSoft 2018 
Dilarang memperbanyak dan mendistribusikan Materi Training ini tanpa ijin dari MedioSoft Corporation. Pelanggaran akan hak cipta dapat ajukan ke Institusi Hukum yang berlaku.