
exports.list = function (req, res) {
    //	logger.info("in get listTask() controller", req.query);

    var response = {};
    var envVal = process.env.TESTENV;

    response.function = "App2:Function1: inside listed values";
    response.envValue = envVal;
    //   response.envVal;
    console.log("env value", envVal);

    console.log("App1:Function1: inside listed values");
    return res.send(response);


}
exports.list1 = function (req, res) {
    //	logger.info("in get listTask() controller", req.query);

    var response = {};
    var envVal = process.env.TESTENV;
    var apiUrl = process.env.APIURL;
    response.function = "App1:Function2: inside listed values";
    response.envValue = envVal;
    response.apiUrl = apiUrl;
    //   response.envVal;
    console.log("env value", envVal);

    console.log("App1:Function2: inside listed values");
    return res.send(response);


}
exports.apiApp3 = function (req, res) {
    //	logger.info("in get listTask() controller", req.query);
    var Request = require("request");

    var apiUrl = process.env.APIURL;

    console.log("apiUrl:", apiUrl);
    //    Request.get("http://104.211.97.84/app3", (error, response, body) => {
    Request.get(apiUrl, (error, response, body) => {
        if (error) {
            return console.dir(error);
        }
        console.log("App1:Function2: Inside apiApp3")
        var fmt = JSON.parse(body);
        var fmt1 = body;
        console.log("fmt", fmt, "fmt1", fmt1);
        //    console.dir(JSON.parse(body));
        res.send(JSON.parse(body));
    });

}

exports.mainCall = function (req, res) {
    //	logger.info("in get listTask() controller", req.query);

    var response = {};
    var envVal = process.env.ENVVAR;

    response.function = "App2:MainFunction: Inside main function";
    response.envValue = envVal;
    //   response.envVal;
    console.log("env value", envVal);

    console.log("App1:MainFunction: Inside main function");
    return res.send(response);

}


exports.healthTest = function (req, res) {
    //	logger.info("in get listTask() controller", req.query);

    res.writeHead(200, "OK", { "Content-Type": "application/json" });
    console.log("App health check was called \n");
    res.end('App healthy');
}