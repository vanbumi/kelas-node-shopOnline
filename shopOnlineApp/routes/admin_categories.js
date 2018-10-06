var express = require('express');
var router = express.Router();

// Get Category model.
var Category = require('../models/category');

// Get Category index
router.get('/', function(req, res){

  //mengambil data dari database
  Category.find(function(err, categories) {
    if (err) return console.log(err);
    res.render('admin/categories', {
      categories: categories
    });
  });
});

// Membuat add category dengan method GET
router.get('/add-category', function(req, res) {

  var title = "";

  res.render('admin/add_category', {
    title: title
  });
});

// Membuat method POST pada add category
router.post('/add-category', function (req, res) {

  req.checkBody('title', 'Title must have a value.').notEmpty();

  var title = req.body.title;
  var slug = title.replace(/\s+/g, '-').toLowerCase();

  var errors = req.validationErrors();

  if (errors) {
      res.render('admin/add_category', {
          errors: errors,
          title: title
      });
  } else {
      Category.findOne({slug: slug}, function (err, category) {
          if (category) {
              req.flash('danger', 'Category title exists, choose another.');
              res.render('admin/add_category', {
                  title: title
              });
          } else {
              var category = new Category({
                  title: title,
                  slug: slug
              });

              category.save(function (err) {
                  if (err)
                      return console.log(err);

                  req.flash('success', 'Category has added!');
                  res.redirect('/admin/categories');
              });
          }
      });
  }

});

// Membuat POST sortable pages

router.post('/reorder-pages', function(req, res) {

  // console.log(req.body);

  var ids = req.body['id[]'];

  var count = 0;

  for (var i = 0; i < ids.length; i++) {
    var id = ids[i];
    count++;

    (function(count) {
      Page.findById(id, function (err, page) {
        page.sorting = count;
        page.save(function (err) {
          if (err)
            return console.log(err)
        });
      });
    })(count);
  }
});

// GET edit page

router.get('/edit-page/:slug', function(req, res) {

  Page.findOne({slug: req.params.slug}, function(err, page) {
    if (err)
      return console.log(err);

    res.render('admin/edit_page', {
      title: page.title,
      slug: page.slug,
      content: page.content,
      id: page._id
    });  
  });
});

// Membuat method POST pada edit page
router.post('/edit-page/:slug', function(req, res) {

  req.checkBody('title', 'Title must have a value').notEmpty();
  req.checkBody('content', 'Content must have a value').notEmpty();

  var title = req.body.title;
  var slug = req.body.slug.replace(/\s+/g, '-').toLowerCase();
  if (slug == '') slug = title.replace(/\s+/g, '-').toLowerCase();
  
  var content = req.body.content;
  var id = req.body.id;

  var errors = req.validationErrors();

  if (errors) {
    res.render('admin/edit_page', {
      errors: errors,
      title: title,
      slug: slug,
      content: content,
      id: id
    });
  } else {
    Page.findOne({slug: slug, _id:{'$ne':id}}, function(err, page) {
      
      if (page) {
        req.flash('danger', 'Page slug is exist, choose another slug');
        res.render('admin/edit_page', {
          title: title,
          slug: slug,
          content: content,
          id: id
        });
      } else {
        Page.findById(id, function (err, page) {
          if (err) 
            return console.log(err);

            page.title = title;
            page.slug = slug;
            page.content = content;

            page.save(function (err) {
              if (err)
                return console.log(err);
    
              req.flash('success', 'Page has been update!');
              res.redirect('/admin/pages/edit-page/'+page.slug);
            });

        });

      }
    });
  }
});

// GET delete page
router.get('/delete-pages/:id', function (req, res) {
  Page.findByIdAndRemove(req.params.id, function (err) {
      if (err)
          return console.log(err);

      req.flash('success', 'Page deleted!');
      res.redirect('/admin/pages/');
  });
});

// export
module.exports = router;

