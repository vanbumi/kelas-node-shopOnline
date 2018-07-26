# NodeJS Project Shop Online

### #Mediosoft Learning

## #1 Project Setup 

### Membuat Folder Project

Buatlah folder project dengan nama ProjectShopOnline.

Bukalah terminal anda dan cd ke folder project diatas & npm init:

	cd ProjectShopOnline
	npm init
	
	// Isian entry point anda bisa isi dengan server.js atau app.js, untuk kepentingan project ini saya menggunakan "app.js".
	
Bukalah Editor favorit anda (saya menggunakan Visual Studio Code).	

Anda buka folder project diatas dan package.json sudah terinstal disana pada saat kita melakukan "npm init".

### Setup Database MongoDB

#### Mongodb Compass

Kita akan menggunakan GUI MonggoDB agar lebih mudah memanage database.

Googling "mongodb compass" anda **download** dan **install** sesuai dengan Operating System yang anda gunakan. 

Silahkan download disini https://www.mongodb.com/products/compass

#### Instal MongoDB

Sebelumnya anda harus install dulu mongodb pada local komputer anda, saya tidak akan memberikan materi cara menginstall mongodb, karena sudah ada pada materi sebelumnya, sebagai referensi cara menginstall mongodb sesuai dengan Operating System yang anda gunakan, klik link dibawah ini:

* Install MongoDB Community Edition dengan Homebrew (Mac) (https://docs.mongodb.com/manual/tutorial/install-mongodb-on-os-x/)

* Install di Windows(https://docs.mongodb.com/manual/tutorial/install-mongodb-on-windows/)

* Install di Linux (https://docs.mongodb.com/manual/administration/install-on-linux/)

Sebelum anda connect ke mongodb compass pastikan jalankan dulu "server mongodb" dengan menuliskan perintah "mongod" pada terminal anda.

Buka mongodb compass dan connect :

	connect : localhost
	port 		:	27017

Klik tombol "CREATE DATABASE" dan buat database baru :

	Database name 	: shoponline
	Collection Name : pages
	
#### Install express & ejs

Pada terminal anda install package library sbb:

	npm install --save express ejs

#### Membuat file app.js

Kembali ke Text Editor anda dan buat file baru beri nama "app.js" dan buat boilerplate code sbb:

	var express = require('express');
	var path = require('path');
	
	// Initial app
	var app = express();
	
	// View engine setup
	app.set('views', path.join(__dirname, 'views'));
	app.set('view engine', 'ejs');
	
	// Set public folder
	app.use(express.static(path.join(__dirname, 'public')));
	
#### Membuat folder Views, Models, Public & Routes

Pada root buatlah 4 buah folder baru beri nama "views", "models", "public" dan "routes"
	
#### Setup server

	var port = 3000;
	app.listen(port, function() {
		console.log("Server running on port " + port);
	});
	
#### Setup home index

	app.get('/', function(req, res) {
		res.send("It's Work!")
	});

#### Install nodemon (bagi yang belum)

	npm install -g nodemon
	
#### Start Server

	nodemon app.js
	
	








---
Copyright &copy;MedioSoft 2018 
Dilarang memperbanyak dan mendistribusikan Materi Training ini tanpa ijin dari MedioSoft Corporation. Pelanggaran akan hak cipta dapat ajukan ke Institusi Hukum yang berlaku.
	
