#### MedioCademy Bootcamp Specialist.

---

## NodeJS Project Shop Online.

### #20 Product index Page

Buka file routes/admin_products.js dan update code nya seperti dibawah ini:

	var express = require('express');
	var router = express.Router();
	var mkdirp = require('mkdirp');
	var fs = require('fs-extra');
	var resizeImg = require('resize-img');

	// Get Product model.
	var Product = require('../models/product');
	
	// Get Category model.
	var Category = require('../models/category');

	// Get products index
	router.get('/', function(req, res){
		var count;
		
		Product.count(function(err, c) {
			count = c;
		});
		
		Product.find(function(err, products) {
			res.render('admin/products', {
				products: products,
				count: count
			});
		});
	});
	
	
	// export
	module.exports = router;

	
Selanjutnya kita harus membuat view diatas yaitu 'admin/products', buat lah file baru pada folder views/admin/products.ejs, kemudian tuliskan code seperti dibawah ini atau anda copas content dari file pages.ejs kemudian kita lakukan update:

	<%- include('../_layouts/adminheader') %>

	<h2 class="page-title">Products</h2>
	<a href="/admin/products/add-product" class="btn btn-primary">Add a new product</a>
	<br><br>

	<% if (count > 0) { %>

	<table class="table table-striped alignmiddle">

		<thead>
			<tr class="home">
				<th>Product</th>
				<th>Price</th>
				<th>Category</th>
				<th>Product Image</th>
				<th>Edit</th>
				<th>Delete</th>
			</tr>
		</thead>
		<tbody>
			<% products.forEach(function(product){ %>
			<tr>
				<td>
					<%= product.title %>
				</td>
				<td>$
					<%= parseFloat(product.price).toFixed(2) %>
				</td>
				<td>
					<%= product.category %>
				</td>
				<td>
					<% if (product.image == "") { %>
					<img id="noimage" src="/images/noimage.png">
					<% } else {%>
					<img id="noimage" src="/product_images/<%= product._id %>/<%= product.image %>">
					<% } %>
				</td>
				<td><a href="/admin/products/edit-product/<%= product._id %>">Edit</a></td>
				<td><a class="confirmDeletion" href="/admin/products/delete-product/<%= product._id %>">Delete</a></td>
			</tr>
			<% }); %>
		</tbody>
	</table>

	<% } else {%>
	
	<h3 class="text-center">There are no products.</h3>
	
	<% }%>

	<%- include('../_layouts/adminfooter') %>	

Jangan lupa refresh server

Kemudian cek pada browser localhost:3000/admin/products

Hasilnya akan "There are no products."

*** Menambahkan link product di adminheader.ejs:

	<li><a href="/admin/products">Products</a></li>

Cek lagi di browser localhost:3000/admin/products, menu product akan muncul.
	
	
	
	

<br>

continue next video

<br><br><br><br>

---

Copyright &copy;MedioCademy.com 2018
Dilarang memperbanyak dan mendistribusikan Materi Training ini tanpa ijin dari MedioSoft Corporation. Pelanggaran akan hak cipta dapat ajukan ke Institusi Hukum yang berlaku.
