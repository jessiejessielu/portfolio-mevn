const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define collection and schema for Contact

let Contact = new Schema({
  
        name: {
            type: String, 
        
        },
        email: {
            type: String
        },
        subject: {
            type: String
        },
        message:{
            type:String
        }

},{
    collection: 'contact'
});



module.exports = mongoose.model('Contact', Contact);