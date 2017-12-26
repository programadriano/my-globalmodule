//https://api.vagalume.com.br/search.excerpt?apikey=660a4395f992ff67786584e238f501aa&q=god&limit=5

var fs = require("fs");
var createStream = fs.createWriteStream("teste.txt");
createStream.write("Hello World!");
createStream.end();

