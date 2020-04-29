#### MedioCademy Bootcamp Specialist.

---

## NodeJS Project Shop Online

### #10 Membuat Sortable list pada Admin Page

Pada materi ini kita akan belajar membuat sortable pada halaman Admin/pages dengan menggunakan jqueryui, ikuti langkah-langkah dibawah ini:

#### Langkah 1 Memindahkan jquery pada file adminfooter.ejs ke file adminheader.ejs

Cut & Paste jquery file adminfooter.ejs ke file adminheader.ejs didalam "head tag" karena untuk case ini kita ingin jquery run pada adminheader run terlebih dahulu sebelum adminheader.

	<script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
	
#### Langkah 2 copy dan paste link CDN jquery ui ke halaman bawah admin/pages.ejs

Googling untuk jqueryui cdn 

	src="https://code.jquery.com/jquery-3.3.1.slim.min.js"
	
Dan paste pada sisi bawah halaman pages.ejs:

	<script src="https://code.jquery.com/jquery-3.3.1.slim.min.js"><script>
	
#### Beri id & class pada row table dan update table menjadi seperti dibawah ini:

	<table class="table table-striped">
		<thead>
			<tr class="home">
				<th>Title</th>
				<th>Edit</th>
				<th>Delete</th>
			</tr>
		</thead>
		<tbody>
			<!-- do looping --> 
			<% pages.forEach(function (page) { %>
				<tr id="id_<%= page._id %>" class="<%= page.slug %> ">
					<td><%= page.title %></td>
					<td><a href="/admin/pages/edit-page/<%= page.slug %>">Edit</a></td>
					<% if (page.slug == 'home') { %>
						<td></td>
					<% } else { %>
						<td><a href="/admin/pages/delete-pages/<%= page._id %>">Delete</a></td>
					<% } %>
				</tr>
			<% }) %>
		</tbody>
	</table>
	
* Kemudian refresh pada browser localhost:3000/admin/pages.
* Klik kanan inspection cek apakah tr masing-masing sudah mendapatkan id dan class sesuai. 

Tambahkan script letakkan dibawah link CDN jquery seperti dibawah ini:

	  $('tbody').sortable({

        items: "tr:not('.home')",
        placeholder: "ui-state-hightlight",
        update: function () {
            var ids = $('tbody').sortable("serialize");
            var url = "/admin/pages/reorder-pages";
            
            $.post(url, ids);
        }

    });

refresh pada browser localhost:3000/admin/pages dan test.

#### Membuat method POST baru untuk sortable pages

Tambahkan kode berikut pada routes/admin_pages.js:

	/* POST sortable pages */
	router.post('/reorder-pages', function (req, res) {
	
		// console.log(req.body); Test ini pada console log
		
		var ids = req.body['id[]'];
		
		var count = 0;
		
		for (var i = 0; i < ids.length; i++) {
			var id = ids[1];
			count++;
			
			(function(count) {
				Page.findById(id, function (err, page) {
					page.sorting = count;
					page.save(function(err) {
						if (err)
							return console.log(err)
					});
				});
			}) (count);
		
		}
	});
	
Kemudian cek pada mongodb compass & sorting list of page nya, maka setiap kita lakukan reorder sortable pada list maka sorting pada database akan mengikuti.

#### Menambahkan CSS style

* Didalam public folder tambahkan folder css.
* Kemudian tambahkan file css adminstyle.css & style.css.

Tambahkan kode css untuk adminstyle.css seperti dibawah ini:

	.sorting tr:not(.home) {
		cursor: pointer;
	}
	
	.ui-state-highlight {
		border: 1px dashed #ccc;
	}

* Jangan lupa tambahkan class "sorting" pada table yang akan di sortable.
* Jangan lupa untuk menambahkan link css ini pada adminheader.ejs.

link css sbb:

	<link rel="stylesheet" href="/css/adminstyle.css" />

Kemudian test pada browser localhost:3000/admin/pages



























---
Copyright &copy;MedioSoft 2018 
Dilarang memperbanyak dan mendistribusikan Materi Training ini tanpa ijin dari MedioSoft Corporation. Pelanggaran akan hak cipta dapat ajukan ke Institusi Hukum yang berlaku.