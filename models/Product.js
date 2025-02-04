const mongoose = require('mongoose');

const Schema = mongoose.Schema;


const productSchema = new Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    image: { type: String, required: true },
    quantity: { type: String, required: true },
    unit: { type: String, required: true },
    price: { type: Number, required: true},
    category: { 
        type: [
            {
                type:String, 
                // enum:['vegetables','Fruits']
            }
        ]
    },
    // location: {
    //     lat: { type: Number, required: true },
    //     lng: { type: Number, required: true },
    // },
    // state: { type: String, required: true },
    // district: { type: String, required: true },
    user:[
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User'
        }
    ]
});

module.exports = mongoose.model('Product', productSchema);