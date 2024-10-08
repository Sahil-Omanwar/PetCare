const mongoose = require('mongoose');

const appointSchema = new mongoose.Schema({
   ownerName: {
      type: String,
      required: true
   },
   petCategory: {
      type: String,
      required: true
   },
   address: {
      type: String,
      required: true
   },
   time: {
      type: String, // Using String to represent time
      required: true
   },
   date: {
      type: Date,
      required: true
   },
   reason: {
      type: String,
      required: true
   }
});

const appoint = mongoose.model('appoint', appointSchema);

module.exports = appoint;
