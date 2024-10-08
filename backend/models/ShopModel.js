const mongoose=require('mongoose');
const shopSchema=new mongoose.Schema({
    productPhoto: {
        type: String,
        required: true
    },
    productName: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true,
    },
    productDetail: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    stockQuantity: {
        type: Number,
        required: true,
        default: 0
    },
    rating: {
        type: Number,
        min: 0,
        max: 5,
        default: 0
    }

})
const shopProd=mongoose.model('shopProd',shopSchema);
module.exports=shopProd