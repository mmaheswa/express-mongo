var mongoose = require('mongoose');

var schema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      default: '',
    },
    lastName: {
      type: String,
      default: '',
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    phone: String,
  },
  { collection: 'users' }
);

var user = new mongoose.model('User', schema);

module.exports = user;
