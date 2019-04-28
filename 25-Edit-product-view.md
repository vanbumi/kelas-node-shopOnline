#### MedioCademy Bootcamp Specialist.

------

## NodeJS Project Shop Online.

### #25 Edit Product View.



Update kembali file **routes > admin_product.js**, tambahkan sbb:

```javascript
id:p._id
```

pada kode:

```javascript
res.render('admin/edit_product', {

  title: p.title,
  errors: errors,
  desc: p.desc,
  categories: categories,
  category: p.category.replace(/\s/g, '-').toLowerCase(),
  price: p.price,
  image: p.image,
  galleryImages: galleryImages,
  id:p._id

});
```





Setelah kita membuat GET method pada Edit product, selanjutnya kita akan membuat edit product view.

Buat file baru **edit_product.ejs** dan copy konten **add_product.ejs** dan paste ke dalam file **edit_product.ejs** kemudian kita akan sesuaikan sbb:

```javascript
<%- include('../_layouts/adminheader') %>

<br><br>

<h2 class="page-title">Edit Product</h2>
<a href="/admin/products" class="btn btn-primary">Back to all products</a>

<br><br>

<form method="POST" action="/admin/products/edit-product/<%= id %>" enctype="multipart/form-data">

  <div class="form-group">
    <label for="">Title</label>
    <input type="text" class="form-control" name="title" value="<%= title %>" placeholder="Title">
  </div>

  <div class="form-group">
    <label for="">Description</label>
    <textarea class="form-control" name="desc" cols="30" rows="10" placeholder="Description"><%= desc %></textarea>
  </div>

  <div class="form-group">
    <label for="">Category</label>
    <select id="category" class="form-control">
      <% categories.forEach(function(cat){ %>
      	<option value="<%= cat.slug %>"
        	<% if (cat.slug == category){ %>
            selected="selected"
          <% } %>
          ><%= cat.title %>  
      	</option>
      <% }) %>
    </select>
  </div>

  <div class="form-group">
    <label for="">Price</label>
    <input type="text" class="form-control" name="price" value="<%= price %>" placeholder="Price">
  </div>
                                       
  <div class="form-group">
    <label for="">Current Image</label>
    <p>
      <% if (image == "") { %>
        <img id="noimage" src="/images/noimage.png" alt="">
      <% } else %>      
        <img id="noimage" src="/product_images/<%= id %>/<%= image %>" alt="">
      <% } %>
     </p>
  </div>                                     

  <div class="form-group">
    <label for="">Upload Image</label>
    <input type="file" class="form-control" name="image" id="img">
    <img src="#" alt="imgPreview" id="imgPreview">
  </div>

   <input type="hidden" name="pimage" value="<%= image %>">                        
                           
  <button class="btn btn-primary">Submit</button>
</form>

<%- include('../_layouts/adminfooter') %>
```

 

Coba pada browser localhost:3000/admin/products, dan klik Edit pada salah satu product.



Dibawah form kita akan membuat **Image Gallery**, tambahkan kode dibawah form sbb:

```javascript
<hr>
  
<h3 class="page-header">Gallery Image</h3>

<ul class="gallery">

  <% galleryImages.forEach(function(image) { %>
  	<% if (image ! = "thumbs"){ %>
    	<li>
  			<img src="/product_images/<%= id %>/gallery/thumbs/<%= image %>" alt="" >&nbsp;
      	<a class="confirmDeletion" href="/admin/products/delete-image/<%= image %>?id=<%= id %>">delete</a>                                      
  	</li>  
    <% } %>  
  <% }); %>
  
</ul>
```

Coba pada browser localhost:3000/admin/products, dan klik Edit pada salah satu product.

Cek di bagian bawah halaman Gallery Image.



Selanjutnya dibagian bawah kita akan install **dropzone** , googling dengan keyword "dropzone cdn".

Copy link **css & js** dan tempatkan pada halaman tersebut diatas ```<script></script>```sbb:

```html
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/dropzone/5.5.1/basic.css" >

<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/dropzone/5.5.1/dropzone.css" >

// dan JS

<script src="https://cdnjs.cloudflare.com/ajax/libs/dropzone/5.5.1/dropzone.js"></script>

```



Kemudian tambahkan form diatas link tsb sbb:

```html
<form action="/admin/products/product-gallery/<%= id %>" method="post" enctype="multipart/form-data" class="dropzone" id="dropzoneForm"></form>
```

Coba pada browser localhost:3000/admin/products, dan klik Edit pada salah satu product.

kemudian refresh halaman, maka area dropzone akan nampak.

 

Kemudian tambahkan **script js** untuk Dropzone dibawah preview image script, sbb :

```javascript
// Dropzone
Dropzone.options.dropzoneForm = {
  acceptedFiles: "image/*",
  init: function() {
    this.on("queuecomplete", function(file) {
      setTimeout(function() {
        location.reload()
      },1000);
    });
  }
}
```



Buka browser localhost:3000/admin/products, dan klik edit salah satu product.



































<br>

next video "28 Post Edit Product"

<br><br><br><br>

------

Copyright &copy;MedioCademy.com 2018
Dilarang memperbanyak dan mendistribusikan Materi Training ini tanpa ijin dari MedioSoft Corporation. Pelanggaran akan hak cipta dapat ajukan ke Institusi Hukum yang berlaku.