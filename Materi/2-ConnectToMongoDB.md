#### MedioCademy Bootcamp Specialist.

---

## NodeJS Project Shop Online

### #2 Koneksi ke Mongodb Database

#### Install Mongoose

Google for "mongoose" dan klik "quick start guide".

Install mongoose :

	npm install --save mongoose

Kemudian require mongoose pada file app.js

	var mongoose = require('mongoose');

Kemudian buat Connection syntax ke database:

	// Connection to database mongodb
	mongoose.connect('mongodb://localhost/shop-online-v2', 
	{ 
	    useNewUrlParser: true,
	    useUnifiedTopology: true
	 });

Kemudian require it di file **app.js**

	var mongoose = require('mongoose');

Connecte syntax :

	mongoose.connect('mongodb://localhost/olshop', { useNewUrlParser: true });
	
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

Kemudian require file config pada file app.js agar available

	var config = require('./config/database');

Update syntax connection nya sbb:	

Update :	

	mongoose.connect('mongodb://localhost/shoponline');

Menjadi :	

	mongoose.connect(config.database, { useNewUrlParser: true });

Cek koneksi di terminal (seharus nya restart otomatis karena menggunakan "nodemon"). Jika belum yakin Control + C untuk menonaktifkan server dan aktifkan kembali dengan nodemon app.js.



































---
Copyright &copy;MedioCademy
Dilarang memperbanyak dan mendistribusikan Materi Training ini tanpa ijin dari MedioCademy Corporation. Pelanggaran akan hak cipta dapat ajukan ke Institusi Hukum yang berlaku.