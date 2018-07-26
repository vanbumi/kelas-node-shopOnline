# NodeJS Project Shop Online

### Mediosoft Learning

## #9 Membuat Admin Page Index

(Membuat halaman index untuk Halaman Admin)

Langkah pertama kita akan mengupdate GET pages index pada file routes/admin_page.js

	router.get('/', function(req, res){
		res.send('Admin Area');
	});
	
Menjadi:

	router.get('/', function(req, res){
		// mengambil data dari database
		Page.find({}).sort({sorting: 1}).exec(function (err, pages) {
			res.render('admin/pages', {
				pages: pages	
			});
		});
	});

Buatlah file baru "pages.ejs" pada folder views, ketik kode dibawah ini pada file "pages.ejs" :

	<%- include('../_layouts/adminheader') %>
	<br><br>

	<h2 class="page-title">Pages</h2>
	<a href="/admin/pages/add-page" class="btn btn-primary">Add new page</a>
	<br><br>
	
	<table class="table table-striped">
		<thead>
			<tr>
				<th>Title</th>
				<th>Edit</th>
				<th>Delete</th>
			</tr>
		</thead>
		<tbody>
			// do looping
			<% pages.forEach(function (page) { %>
				<tr>
					<td><%= page.title %></td>
					<td><a href="/admin/pages/edit-page/<%= page.slug %>">Edit</a></td>
					<td><a href="/admin/pages/delete-page/<%= page._id %>">Delete</td>
				</tr>
			<% }); %>
		</tbody>
	</table>
		
	<%- include('../_layouts/adminfooter') %>

Pada halaman admin_pages.js rubah sorting menjadi 100

	sorting: 100
	
Pada browser localhost:3000/admin/pages/add-page tambahkan beberapa halaman baru seperti :

	About Us
	Services
	
Dan kemudian cek pada compass database mongodb apakah sudah di tambahkan.

Coba test pada browser localhost:3000/admin/pages.

Update kode loop dengan if condition agar button delete tidak muncul pada list home page:

	<% if (page.slug == "home") { %>
		<td></td>
	<% } else { %>
		<td><a href="/admin/pages/delete-page/<%= page._id %>">Delete</td>
	<% } %>

test pada browser localhost:3000/admin/pages.

continue to the next video
	


























---
Copyright &copy;MedioSoft 2018 
Dilarang memperbanyak dan mendistribusikan Materi Training ini tanpa ijin dari MedioSoft Corporation. Pelanggaran akan hak cipta dapat ajukan ke Institusi Hukum yang berlaku.