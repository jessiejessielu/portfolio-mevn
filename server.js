// server/server/js
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const mongoose = require('mongoose');
const config = require('./DB.js');
const contactRoute = require('./contact.route');
const path = require('path');
const serveStatic = require ('serve-static');

//step1 for heroku deployment
const port = process.env.PORT || 8000;



const jwt = require("express-jwt");
const jwksRsa = require("jwks-rsa");
const { POINT_CONVERSION_COMPRESSED } = require("constants");


mongoose.Promise = global.Promise;
mongoose.connect(config.DB, { useNewUrlParser: true }).then(
  () => { console.log('Database is connected') },
  err => { console.log('Can not connect to the database'+ err)}
);



app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(serveStatic(__dirname + '/dist'));


app.use('/contact', contactRoute);


// Set up Auth0 configuration 
const authConfig = {
  domain: "dev-yjo0qmej.us.auth0.com",
  audience: "https://portfolio-express-api.com"
};

// Create middleware to validate the JWT using express-jwt
const checkJwt = jwt({
  // Provide a signing key based on the key identifier in the header and the signing keys provided by your Auth0 JWKS endpoint.
  secret: jwksRsa.expressJwtSecret({
    cache: true,
    rateLimit: true,
    jwksRequestsPerMinute: 5,
    jwksUri: `https://${authConfig.domain}/.well-known/jwks.json`
  }),

  // Validate the audience (Identifier) and the issuer (Domain).
  audience: authConfig.audience,
  issuer: `https://${authConfig.domain}/`,
  algorithms: ["RS256"]
});


app.get("/", (req, res) => {
  res.send(`Hi! Server is listening on port ${port}`);
  console.log(`Server is listening on port ${port}`)
});

//step3 for heroku deployment 
//as long as running on heroku, set statisitc folder

if(process.env.NODE_ENV == 'production'){
  app.use(serveStatic(__dirname + '/dist'));
  app.get(/.*/, (req, res)=> res.sendFile(__dirname + '/dist/index.html'));
}

// listen on the port
app.listen(port);