const express = require('express');
const contactRoutes = express.Router();
const path = require('path');
let Contact = require(path.join(__dirname,'./contact.model'));


// Defined store route
contactRoutes.route('/').post(function (req, res) {
  let contact = new Contact(req.body);
 
  contact.save()
    .then(() => {
      res.status(200).json({'business': 'Your message has been sent. Thank you!'});
    })
    .catch(() => {
      res.status(400).send("unable to save to database");
    });
});

// Defined get data(index or listing) route
contactRoutes.route('/list').get(function (req, res) {
    Contact.find(function(err, contacts){
    if(err){
      res.json(err);
    }
    else {
      res.json(contacts);
    }
  });
});



// Defined delete | remove | destroy route
contactRoutes.route('/delete/:id').delete(function (req, res) {
    Contact.findByIdAndRemove({_id: req.params.id}, function(err){
        if(err) res.json(err);
        else res.json('Successfully removed');
    });
});

module.exports = contactRoutes;