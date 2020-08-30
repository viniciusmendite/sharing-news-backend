const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate')

const SharingSchema = new mongoose.Schema({
  editor: String,
  title: String,
  subtitle:  String,
  description: String,
  created: { type: Date, default: Date.now }
});

SharingSchema.plugin(mongoosePaginate);

module.exports = mongoose.model("Sharing", SharingSchema);