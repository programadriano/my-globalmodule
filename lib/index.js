var fs = require("fs");
var createStream = fs.createWriteStream("teste.txt");
createStream.write("Hello World!");
createStream.end();

