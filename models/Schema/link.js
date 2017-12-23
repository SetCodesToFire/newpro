var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var LinkSchema = new Schema({
  userid: String,
  link: [String]
});

module.exports = mongoose.model('Link',LinkSchema,'link')
