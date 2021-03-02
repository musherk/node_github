let express = require('express');
let  app = express();
let port = 8000;

app.get('/', (request, response) => response.send('Hello world !!!'));

// launch server 2
app.listen(port, function () { console.log("Server running on port " + port);
})