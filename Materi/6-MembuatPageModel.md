#### MedioCademy Bootcamp Specialist.

---

## NodeJS Project Shop Online

### #6 Membuat Page Model

Pada folder "models" buat file baru beri nama "page.js", kemudian tambahkan baris kode sbb :

    var moongose = require('mongoose');

    // Page Schema
    var PageSchema = mongoose.Schema({
      title: {
        type: String,
        required: true
      },
      slug: {
        type: String,
      },
      content: {
        type: String,
        required: true
      },
      sorting: {
        type: Number,
      }

    });

    var Page = module.exports = mongoose.model('Page', PageSchema);


lanjut video berikutnya :)







































---
Copyright &copy;MedioSoft 2018 
Dilarang memperbanyak dan mendistribusikan Materi Training ini tanpa ijin dari MedioSoft Corporation. Pelanggaran akan hak cipta dapat ajukan ke Institusi Hukum yang berlaku.