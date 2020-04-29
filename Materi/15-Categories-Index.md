#### MedioCademy Bootcamp Specialist.

---

## NodeJS Project Shop Online

### #15 Membuat Halaman Categories Index.

Kita akan lanjutkan pada materi ini yaitu membuat halaman index untuk Categories.

#### Buka file routes/admin_categories.js

Edit code block ini:

	// Get Category index
	router.get('/', function(req, res){

		res.send('Welcome to Category Index')

		// mengambil data dari database
		// Page.find({}).sort({sorting: 1}).exec(function(err, pages) {
		//   res.render('admin/pages', {
		//     pages: pages
		//   });
		// });
	});

Menjadi :

	// Get Category index
	router.get('/', function(req, res){
		// mengambil data dari database
		Category.find(function(err, categories) {
			if (err) return console.log(err);
			res.render('admin/categories', {
					categories: categories
			});
		});
	});

Selanjutnya kita akan membuat halaman categories.ejs pada *Views*.

#### Buat baru file views/admin/categories.ejs.

Dan update code nya menjadi seperti dibawah ini:

	<%- include('../_layouts/adminheader') %>

	<br><br>

	<h2 class="page-title">Categories (Index)</h2>
	<a href="/admin/categories/add-category" class="btn btn-primary">Add new category</a>
	<br><br>

	<table class="table table-striped">
		<thead>
			<tr>
				<th>Category</th>
				<th>Edit</th>
				<th>Delete</th>
			</tr>
		</thead>
		<tbody>
			<!-- do looping --> 
			<% categories.forEach(function (cat) { %>
				<tr>
					<td><%= cat.title %></td>
					<td><a href="/admin/categories/edit-category/<%= cat.slug %>">Edit</a></td>
					<td><a class="confirmDeletion" href="/admin/categories/delete-category/<%= cat._id %>">Delete</a></td>
				</tr>
			<% }) %>
		</tbody>
	</table>

	<%- include('../_layouts/adminfooter') %>

Coba di browser localhost:3000/admin/categories.

#### Menambahkan link menu untuk category pada _layouts/adminheader.js.

Pada navbar tambahkan link menu category:

	<div class="collapse navbar-collapse" id="navbarsExampleDefault">
		<ul class="navbar-nav mr-auto">
			<li><a href="/admin/pages">Pages</a></li>
			<li><a href="/admin/categories">Categories</a></li>
		</ul>
	</div>

Refresh localhost:3000/admin/categories link Categories akan muncul.

<br>

continue next video




















<br><br><br><br>

---
Copyright &copy;MedioSoft 2018 
Dilarang memperbanyak dan mendistribusikan Materi Training ini tanpa ijin dari MedioSoft Corporation. Pelanggaran akan hak cipta dapat ajukan ke Institusi Hukum yang berlaku.