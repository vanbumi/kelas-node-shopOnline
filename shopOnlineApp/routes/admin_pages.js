var express = require('express');
var router = express.Router();
var Page = require('../models/page');

// export
module.exports = router;

// Home / index Admin
router.get('/', function(req, res){
  // mengambil data dari database
  Page.find({}).sort({sorting: 1}).exec(function(err, pages) {
    res.render('admin/pages', {
      pages: pages
    });
  });
});

// Membuat add page dengan method GET
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

// Membuat method POST pada add page
router.post('/add-page', function(req, res) {

  req.checkBody('title', 'Title must have a value').notEmpty();
  req.checkBody('content', 'Content must have a value').notEmpty();

  var title = req.body.title;
  var slug = req.body.slug.replace(/\s+/g, '-').toLowerCase();
  if (slug == '') slug = title.replace(/\s+/g, '-').toLowerCase();
  
  var content = req.body.content;

  var errors = req.validationErrors();

  if (errors) {
    res.render('admin/add_page', {
      errors: errors,
      title: title,
      slug: slug,
      content: content
    });
  } else {
    Page.findOne({slug: slug}, function(err, page) {
      if (page) {
        req.flash('danger', 'Page slug is exist, choose another slug');
        res.render('admin/add_page', {
          title: title,
          slug: slug,
          content: content
        });
      } else {
        var page = new Page({
          title: title,
          slug: slug,
          content: content,
          sorting: 100
        });

        page.save(function (err) {
          if (err)
            return console.log(err);

          req.flash('success', 'Page added!');
          res.redirect('/admin/pages')
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