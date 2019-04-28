#### MedioCademy Bootcamp Specialist.

---

## NodeJS Project Shop Online

### #2 Koneksi ke Mongodb Database

#### Install Mongoose

Google for "mongoose" dan klik "quick start guide".

Install mongoose :

	npm install --save mongoose

Kemudian require it :

	var mongoose = require('mongoose');

Connecte syntax :

	mongoose.connect('mongodb://localhost/shoponline', { useNewUrlParser: true });
	
	var db = mongoose.connection;
	db.on('error', console.error.bind(console, 'connection error:'));
	db.once('open', function() {
		// we're connected!
		console.log('Connected to MongoDB')
	});

Sekarang jalankan server :

	nodemon app.js

#### Membuat folder dan file baru untuk configurasi database :

* Buat folder beri nama "config"
* Buat file baru didalam nya "database.js"

Update file database.js :

	module.exports = {
		database: 'mongodb://localhost/shoponline'
	}

Kemudian require file config :

	var config = require('./config/database');

Update :	

	mongoose.connect('mongodb://localhost/shoponline');

Menjadi :	

	mongoose.connect(config.database);

Cek koneksi di terminal (seharus nya restart otomatis karena menggunakan "nodemon"). Jika belum yakin Control + C untuk menonaktifkan server dan aktifkan kembali dengan nodemon app.js.



































---
Copyright &copy;MedioSoft 2018 
Dilarang memperbanyak dan mendistribusikan Materi Training ini tanpa ijin dari MedioSoft Corporation. Pelanggaran akan hak cipta dapat ajukan ke Institusi Hukum yang berlaku.