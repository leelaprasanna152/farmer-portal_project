const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const userSchema = new Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true, minlength: 6 },
    address: { type: String, required: true },
    // location: {
    //     lat: { type: Number, required: true },
    //     lng: { type: Number, required: true },
    // },
    phone:{type:Number,required:true},
    // district: { type: String, required: true },
    // state: { type: String, required: true },
    // country: { type: String, required: true },
    // date: {
    //     type: Date,
    //     default: Date.now
    //   },
    // // image: { type: String, required: true },
    // places: [{ type: mongoose.Types.ObjectId, required: true, ref: 'Place'}],
    products: [
        { 
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Product'
        }
    ]
});
module.exports = mongoose.model('User', userSchema);