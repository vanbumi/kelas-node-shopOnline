#### MedioCademy Bootcamp Specialist.

---

## NodeJS Project Shop Online.

### #18 Delete Category

Materi ini kita akan mengaktifkan fungsi dari button delete pada halaman index categories.

##### Create Route

Buka kembali file admin_categories.js, update ```// GET delete page``` menjadi sbb:

	// GET delete Category
	router.get("/delete-category/:id", function(req, res) {
		Category.findByIdAndRemove(req.params.id, function(err) {
			if (err) return console.log(err);

			req.flash("success", "Category deleted!");
			res.redirect("/admin/categories/");
		});
	});

Kemudian test di browser localhost:3000/admin/categories, coba delete dan add category















<br>

continue next video




















<br><br><br><br>

---
Copyright &copy;MedioCademy.com 2018 
Dilarang memperbanyak dan mendistribusikan Materi Training ini tanpa ijin dari MedioSoft Corporation. Pelanggaran akan hak cipta dapat ajukan ke Institusi Hukum yang berlaku.