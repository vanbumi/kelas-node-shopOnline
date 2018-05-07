# NodeJS Project Shop Online

### #Mediosoft Learning

## 3. Template Engine

### Template EJS

Pada materi terdahulu kita sudah belajar mengenai apa itu template engine, jadi kita tidak akan membahasnya lagi disini, kita akan langsung menerapkan Engine EJS pada project kita.

#### Membuat folder baru "_layout" di dalam view "folder"

Buatlah folder baru  _layouts di dalam view folder

Buatlah beberapa file dibawah folder "_layouts" sbb :

* header.ejs
* adminheader.ejs
* footer.ejs
* adminfooter.ejs

#### Membuat layout dengan bootstrap

Bukalah getbootsrap.com, pilih starter "starter template" untuk template project shop online kita.

Copy dan paste layout tsb ke header.ejs

Remove fixed top pada nav:

    <nav class="navbar navbar-expand-md navbar-dark bg-dark fixed-top">
		
Remove link bootstrap pada "header".

Remove content dari container.

Copy dan paste CDN bootrap: yaitu CSS dan JS Bootstrap.

Cut footer dan paste di footer.ejs dan juga di adminfooter.ejs

Rubah title adminheader.ejs menjadi "Admin Area".

Rubah title header.ejs menjadi "Home".

#### Membuat file index

Dibawah folder views buat file baru beri nama index.ejs.

Update file index.ejs agar merender hider dan footer :

  <% include _layout/header %>

    <h1>Hello Node!</h1>

  <% include _layout/footer %>

#### Upate syntax home index

	app.get('/', function(req, res) {
		res.render("index", {
			title: 'Home'
		});
	});
	
Update title pada "header.ejs"	dengan :

	<%= title %>

#### Start the server

Jalankan server dengan :

	nodemon app.js
	
	






























---
Copyright &copy;MedioSoft 2018 
Dilarang memperbanyak dan mendistribusikan Materi Training ini tanpa ijin dari MedioSoft Corporation. Pelanggaran akan hak cipta dapat ajukan ke Institusi Hukum yang berlaku.