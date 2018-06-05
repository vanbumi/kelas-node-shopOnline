# NodeJS Project Shop Online

### Mediosoft Learning

## 4. Routes

Pada materi ini kita akan belajar cara setup routes pada NodeJS, sebelumnya kita membuat routes untuk halaman index pada file app.js, untuk membuat website lebih scalable & organize, kita harus memisahkan routing dengan halaman sendiri.

### Membuat halaman routes terpisah.

Pada folder "routes" buat file baru dengan nama "**pages.js**" dan update dengan kode sbb:

    var express = require('express');
    var router = express.Router();

Exports

    module.exports = router;

Pindahkan routes halaman index dari halaman app.js ke halaman pages.js :

    // Home / index
    app.get('/', function(req, res){
      res.render("index", {
        title : 'Home'
      })
    });

Rubah app.get menjadi "router.get" :

    // Home / index
    router.get('/', function(req, res){
      res.render("index", {
        title : 'Home'
      })
    });

Update file app.js sbb :

    // Set routes
    var pages = require('./routes/pages.js');

    // Redirection
    app.use('/', pages);

Test pada browser localhost:3000

#### Membuat route pada Admin Area

    // Set routes
    var adminPages = require('./routes/admin_pages.js');

Buat file baru "admin_pages.js" dan copy paste kode dari halaman pages.js ke admin_pages.js. Dan update sbb :

    router.get('/', function(req, res){
      res.send('admin area');
    });

Update file app.js sbb :

    // Redirection
    app.use('/admin/pages', adminPages);
















































---
Copyright &copy;MedioSoft 2018 
Dilarang memperbanyak dan mendistribusikan Materi Training ini tanpa ijin dari MedioSoft Corporation. Pelanggaran akan hak cipta dapat ajukan ke Institusi Hukum yang berlaku.