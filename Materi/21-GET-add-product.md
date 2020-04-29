#### MedioCademy Bootcamp Specialist.

---

## NodeJS Project Shop Online.

### #21 GET add Product

Buka file routes/admin_products.js dan update code nya seperti dibawah ini:

	
	// GET add product
	 
	router.get('/add-product', function (req, res) {

			var title = "";
			var desc = "";
			var price = "";

			Category.find(function (err, categories) {
					res.render('admin/add_product', {
						title: title,
						desc: desc,
						categories: categories,
						price: price
					});
			});


	});	
	

Buat file baru di View > admin > add_product.ejs

	<%- include('../_layouts/adminheader') %>

	<h2 class="page-title">Add a product</h2>
	<a href="/admin/products" class="btn btn-primary">Back to all products</a>
	<br><br>

	<form method="post" action="/admin/products/add-product" enctype="multipart/form-data">

			<div class="form-group">
					<label for="">Title</label>
					<input type="text" class="form-control" name="title" value="<%= title %>" placeholder="Title">
			</div>

			<div class="form-group">
					<label for="">Description</label>
					<textarea name="desc" class="form-control" cols="30" rows="10" placeholder="Description"><%= desc %></textarea>
			</div>

			<div class="form-group">
					<label for="">Category</label>
					<select name="category" class="form-control">
							<% categories.forEach(function(cat){ %>
									<option value="<%= cat.slug %>"><%= cat.title %></option>
							<% }); %>
					</select>
			</div>

			<div class="form-group">
					<label for="">Price</label>
					<input type="text" class="form-control" name="price" value="<%= price %>" placeholder="Price">
			</div>

			<div class="form-group">
					<label for="">Image</label>
					<input type="file" class="form-control" name="image" id="img">
					<img src="#" id="imgPreview" alt="">
			</div>

			<button class="btn btn-default">Submit</button>
	</form>

	<%- include('../_layouts/adminfooter') %>
	
	

Kemudian tambahkan "Style" pada css > style.css sbb:

	#imgPreview {
			margin: 20px;
	}

**Jangan lupa buat link ref nya di header.ejs**

	<link rel="stylesheet" href="/css/style.css" >

Buat folder baru "images" dibawah folder public.
	
Tambahkan image dengan nama noimage.png kedalam folder images, anda bisa dapatkan image nya disini http://bit.ly/no-image atau di trello.com.

Buat folder baru "product_images" dibawah folder public.
	
Buat script javascript untuk preview image, tambahkan dibawah form sbb:

	<script>

		function readURL(input) {
				if (input.files && input.files[0]) {
						var reader = new FileReader();

						reader.onload = function(e) {
								$("#imgPreview").attr('src', e.target.result).width(100).height(100);
						}

						reader.readAsDataURL(input.files[0]);
				}
		}

		$("#img").change(function() {
				readURL(this);
		});

	</script>
	

Refresh browser localhost:3000/admin/products/add-product.

Lanjut klik "Choose file" kemudian pilih image dari local folder, jika image muncul di preview berarti code anda berhasil. 


	
	
	
	
	
	

	
	
	
	

<br>

continue next video

<br><br><br><br>

---

Copyright &copy;MedioCademy.com 2018
Dilarang memperbanyak dan mendistribusikan Materi Training ini tanpa ijin dari MedioSoft Corporation. Pelanggaran akan hak cipta dapat ajukan ke Institusi Hukum yang berlaku.
