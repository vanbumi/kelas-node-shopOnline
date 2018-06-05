var moongose = require('monggose');

// Page Schema
var PageSchema = mongoose.Schema({
  title: {
    String,
    require: true
  },
  slug: {
    type: String,
  },
  content: {
    type: String,
    require: true
  },
  sorting: {
    type: Number,
  }
})

var Page = module.exports = mongoose.model('Page', PageSchema);