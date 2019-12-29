#### MedioCademy Bootcamp Specialist.

---

## NodeJS Project Shop Online

### #3 Template Engine

### Template EJS

Pada materi terdahulu kita sudah belajar mengenai apa itu template engine, jadi kita tidak akan membahasnya lagi disini, kita akan langsung menerapkan Engine EJS pada project kita.

#### Membuat folder baru "_layouts" di dalam view "folder"

Buatlah folder baru  _layouts di dalam view folder

Buatlah beberapa file dibawah folder "_layouts" sbb :

* header.ejs
* adminheader.ejs
* footer.ejs
* adminfooter.ejs



#### Membuat layout dengan bootstrap

/> Bukalah getbootsrap.com, 

/> Klik Documentation 

/> Scroll kebawah Pilih starter "Starter Template" sebagai template project.

/> Copy dan paste layout tsb ke header.ejs

/> Klik Example pada top menu.

/> Pilih example carousel (https://getbootstrap.com/docs/4.4/examples/carousel/) kita hanya akan mengambil contoh navbar nya saja.

/> Klik kanan pada navbar nya 

/> Pililh Inspect.

/> Pada Tab Elements klik kanan pada nav pilih edit as html.

/> Paste dibawah pembuka element body ```<body>```

```
<body>
    <nav class="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
        <a class="navbar-brand" href="#">Carousel</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarCollapse">
            <ul class="navbar-nav mr-auto">
            <li class="nav-item active">
                <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="#">Link</a>
            </li>
            <li class="nav-item">
                <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
            </li>
            </ul>
            <form class="form-inline mt-2 mt-md-0">
            <input class="form-control mr-sm-2" type="text" placeholder="Search" aria-label="Search">
            <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
            </form>
        </div>
    </nav>
```





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


​	





























---
Copyright &copy;MedioSoft 2018 
Dilarang memperbanyak dan mendistribusikan Materi Training ini tanpa ijin dari MedioSoft Corporation. Pelanggaran akan hak cipta dapat ajukan ke Institusi Hukum yang berlaku.