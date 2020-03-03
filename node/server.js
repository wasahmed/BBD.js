const http = require('http')
const express = require('express');

const app = express();



// app.use('/api/users', require('./routes/api/users'));
// app.use('/api/home', require('./routes/api/home'));
// app.use('/api/index', require('./routes/api/index')); dont use var
// app.get('/',function(req,res) {
//     res.sendFile('index.html');
//   });

const PORT = process.env.PORT || 4000;

http.createServer( (request, response) =>{

    response.writeHead(200, {"Content-type" : "html"});
    response.sendFile('index.html');

}).listen(PORT, () => {
    console.log(`Server running on Port ${PORT}`);

})