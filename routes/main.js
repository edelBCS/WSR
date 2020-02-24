
module.exports = function(app) {
    // viewed at http://localhost:8080
    app.get('/', function(req, res) {
        res.sendFile("index.html");
    });
}