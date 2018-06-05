# NodeJS Project Shop Online

### Mediosoft Learning

## Membuat Halaman "Add Page"

Pada halaman Admin Area kita akan menambahkan fasilitas "Add Page", yaitu halaman untuk menambahkan halaman baru pada web aplikasi yang kita buat.

Langkah pertama kita harus menambahkan "routes" halaman tersebut pada file routes/admin_pages.js :

    // Membuat add page
    router.get('/add-page', function(req, res) {

      var title = "";
      var slug = "";
      var content = "";

      res.render('admin/add_page', {
        title: title,
        slug: slug,
        content: content
      });

    });

Pada folder views buat folder baru "admin".

Dan buat file baru dibawah folder "admin" dengan nama "add_page.ejs".

Tuliskan baris kode sbb:

    <%- include('../_layouts/adminheader.ejs') %> 


    <%- include('../_layouts/adminfooter.ejs') %>  

Buat title dan link:

    <h2 class="page-title">Add a page</h2>
    <a href="/admin/pages" class="btn btn-primary">Back to all pages</a>

    <br><br>

Membuat form:

    <form action="/admin/pages/add-page">
    
      <div class="form-group">
        <label for="">Title</label>
        <input type="text" class="form-control" name="title" value="<%= title %>" placeholder="Title">
      </div>

      <div class="form-group">
        <label for="">Title</label>
        <input type="text" class="form-control" name="slug" value="<%= slug %>" placeholder="Slug">
      </div>

      <div class="form-group">
        <label for="">Content</label>
        <textarea class="form-control" name="content" cols="30" rows"10" value="<%= content %>" placeholder="Content">
      </div>

      <button class="btn btn-primary">Submit</button>

    </form>

Coba view di browser localhost:3000/admin/pages/add-page

Update Navbar :

**Pada file adminheader** :

* Navbar brand.
* Link Pages

**Pada file adminfooter**

Tambahkan copyright:

    <br><br><br>
    <hr>
    <p class="text-center">&copy MedioShop</p> 



lanjut video berikutnya :)



































---
Copyright &copy;MedioSoft 2018 
Dilarang memperbanyak dan mendistribusikan Materi Training ini tanpa ijin dari MedioSoft Corporation. Pelanggaran akan hak cipta dapat ajukan ke Institusi Hukum yang berlaku.