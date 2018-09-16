# NodeJS Project Shop Online.

## Mediosoft Learning.

### #14 Membuat Admin Categories, Model Category dan Setup Route.

Pada materi ini kita akan membuat Category product pada Admin area.

#### Langkah wajib yang harus kita lakukan adalah:

1. Membuat **model** baru --> file category.js.
2. Membuat **route** baru --> file admin_categories.js.
3. Membuat **route** baru --> udpate file **app.js**, untuk route file admin_category.js dan update link / url nya.
4. Membuat collection baru database compass dan buat dummy data untuk testing.

##### 1. Membuat **model** baru.

Buat file baru models/category.js, udpate kode nya seperti dibawah ini:

	var mongoose = require('mongoose');

	// Category Schema
	var CategorySchema = mongoose.Schema({
		title: {
			type: String,
			require: true
		},
		slug: {
			type: String,
		}

	})

	var Category = module.exports = mongoose.model('Category', CategorySchema);

<br>

##### 2. Membuat **route** baru.

Buat file baru routes/admin_categories.js, udpate kode nya seperti dibawah ini:

	var express = require('express');
	var router = express.Router();

Get Category model

	// Get Category model.
	var Category = require('../models/category');

Get pages index

	// Get pages index
	router.get('/', function(req, res){

		res.send('Category Index')

	});

<br>

##### 3. Pada file **app.js** update **route** baru 

Tambahkan var baru :

	var adminCategories = require('./routes/admin_categories.js');

Dan juga tambahkan URL / Link baru :

	app.use('/admin/categories', adminCategories);

Tes pada browser localhost:3000/admin/categories

<br>

##### 4. Membuat collection baru.

* Buka mongodb compass
* Klik create Collections, Collection Name : "categories".
* Klik "categories" collection yang baru saja kita buat.
* Klik Insert document.
* Tambahkan dummy data baru:

		title: "food"
		slug: "food"
		
* Klik Insert document lagi, tambahkan data baru:		
		
		title: "drink"
		slug: "drink"


























<br><br><br><br>

---
Copyright &copy;MedioSoft 2018 
Dilarang memperbanyak dan mendistribusikan Materi Training ini tanpa ijin dari MedioSoft Corporation. Pelanggaran akan hak cipta dapat ajukan ke Institusi Hukum yang berlaku.