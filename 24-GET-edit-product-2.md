#### MedioCademy Bootcamp Specialist.

---

## NodeJS Project Shop Online.

### #24 GET Edit Product #2

Buka kembali halaman **admin_products.js** dan buatlah baris kode dibagian bawah halaman melanjutkan kode sebelumnya kita akan membuat **Method Get Edit Product** sbb:

    // GET edit product

    router.get('/edit-product/:id', function(req, res) {

      var errors;

      if (req.session.errors) errors = req.session.errors;
      
      req.session.errors = null;

      Category.find(function (err, categories) {

        Product.findById(req.params.id, function(err, p) {
          if (err) {
            console.log(err);
            res.redirect('/admin/products');
          } else {
            var galleryDir = 'public/product_images' + p._id + '/gallery';

            var galleryImages = null;

            fs.readdir(galleryDir, function(err, files) {
              if (err) {
                console.log(err);
              } else {
                galleryImages = files;

                res.render('admin/edit_product', {
                  title: p.title,
                  errors: errors,
                  desc: p.desc,
                  categories: categories,
                  category: p.category.replace(/\s+/g, '-').toLowerCase(),
                  price: p.price,
                  image: p.image,
                  galleryImages: galleryImages
                });
              }
            });
          }
        });

      });


    });














































<br>

next video "25 Edit Product View"

<br><br><br><br>

---

Copyright &copy;MedioCademy.com 2018
Dilarang memperbanyak dan mendistribusikan Materi Training ini tanpa ijin dari MedioSoft Corporation. Pelanggaran akan hak cipta dapat ajukan ke Institusi Hukum yang berlaku.