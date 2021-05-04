const express = require('express');
let app = express();
const hostname = '0.0.0.0', port = 3000;


var envVal = process.env.TESTENV;
var apiUrl = process.env.APIURL;
process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";
console.log("Node APP 1 - API Calls");
//console.log("List of all environment variable",process.env);
console.log("Env value", envVal);
console.log("Api URL", apiUrl);

require('./common/express')(app);
require('./common/routes')(app);

app.listen(port, () => {
    console.log("Listening on port 3000");
    console.log("Application access url starts from /app/api");
    //require('./api/Controller/timerRecurUpdate');
});