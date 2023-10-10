var admin = require("firebase-admin");

var serviceAccount = require("./sdk-key.json");

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
});


module.exports = admin;