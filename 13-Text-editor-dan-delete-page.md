# NodeJS Project Shop Online.

## Mediosoft Learning.

### #13 Install Text Editor & Delete page.

Pada materi kali ini kita akan akan menambahkan tex editor di admin area dan enable fungsionanliti button delete page.

#### Wysiwig text editor

Membuat folder baru "js" dibawah folder public.

Membuat file baru "main.js" dibawah folder "js".

Membuat code jquery seperti dibawah ini pada file main.js :

	$(function() {
	
		alert("tet");
	
	});
	
Kemudian include file main.js ini pada file adminfooter.ejs :	
	
	<script src="/js/main.js"></script>

Kemudian refresh halaman localhost:3000/admin/pages, alert akan muncul.

##### CKEditor

Buka ckeditor.com/download >

CKEditor CDN > Basic package > Standard package >

Copy link CDN dan paste di file adminfooter.ejs sebelum link main.js.

Kemudian update file main.js menjadi sbb:

	$(function () {
	
		if ($('textarea#ta').length) {
			CKEDITOR.replace('ta');
		};
		
	})
	
Arti code diatas adalah jika textarea dengan **id="ta"** (singkatan dari text area) ganti dengan CKEDITOR.

Text area yang dimaksud adalah form input text area pada file add_page.ejs dan edit_page.ejs, maka tambahkan id="ta" pada keduanya seperti contoh dibawah ini:

	<textarea id="ta" class="form-control" name="content" cols="30" rows="10" placeholder="Content"><%= content %></textarea>

kemudian cek di localhost:3000/admin/pages/add-page & localhost:3000/admin/pages/edit-page/...

#### Aktifiasi delete button

Tambahkan method GET pada file admin_pages.js:

	// GET edit page

	router.get('/delete-page/:id', function(req, res) {

		Page.findById(req.params, function(err) {
			
				if (err)
					return console.log(err);

					req.flash('success', 'Page deleted!');
					req.redirect('/admin/pages');
				});
			
		});

Kita akan coba tambahkan new page dan kemudian kita akan delete.

##### Tambahkan alert confirmation

Buka file pages.ejs dan tambahkan class="confirmDeletion" pada baris delete &lt;td&gt;, seperti dibawah ini:

	<td><a class="confirmDeletion" href="/admin/pages/delete-pages/<%= page._id %>">Delete</a></td>

Kemudian update main.js:
	
	$(function () {
	
			if ($('textarea#ta').length) {
				CKEDITOR.replace('ta');
			};
			
			$('a.confirmDeletion').on('click', function () {
				if (!confirm('Confirm deletion'))
					return false;
			});
		
	})
	
Kemudian coba lagi tambah halaman baru dan test delete, confirmation alert seharus nya muncul.	
	
next video :)





















<br><br><br><br>

---
Copyright &copy;MedioSoft 2018 
Dilarang memperbanyak dan mendistribusikan Materi Training ini tanpa ijin dari MedioSoft Corporation. Pelanggaran akan hak cipta dapat ajukan ke Institusi Hukum yang berlaku.