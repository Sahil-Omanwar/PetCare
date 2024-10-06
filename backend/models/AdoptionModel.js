const mongoose = require('mongoose');
const AdoptionSchema = new mongoose.Schema({
    pet_name: {
        type: String,
        required: true
    },
    pet_category: {
        type: String,
        required: true
    },
    breed: {  
        type: String,
        required: true
    },
    ownerName: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true
    },
    about: {
        type: String
    },
    address: {
        type: String,
        required: true
    },
    contact: {
        type: Number,
        maxLength: 10,
        required: true
    },
    healthStatus: { 
        type: String
    },
    vaccinated: { 
        type: Boolean,
        default: false
    },
    adoptionFee: {  
        type: Number
    },
    photoUrl: {  
        type: String
    },
    dateOfPost: {  
        type: Date,
        default: Date.now
    }
});


const adopt=mongoose.model('adopt',AdoptionSchema);
module.exports=adopt;
