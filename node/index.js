const sql = require("mssql/msnodesqlv8");
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.urlencoded({extended : true}));
app.use(bodyParser.json());

const dbConfig = {
  driver: 'msnodesqlv8',
  connectionString: 'Driver={SQL Server Native Client 11.0};Server={localhost\\SQLExpress};Database={test};Trusted_Connection={yes};'
  }

app.get('/', function(request, response) {
	response.sendFile(path.join(__dirname + '/index.html'));
});

app.post('/auth' ,function(request, response){
    const username = request.body.username;
    const password = request.body.password;
   
    if (username && password){
        sql.connect(dbConfig, function(err){
        if(err){
            console.log("Error while connecting database :- " + err);
            response.send(err);
            sql.close();
        }
        else {  
            console.log("connected");                     
            const request = new sql.Request();   
            request.input('username', sql.VarChar, username);
            request.input('password', sql.VarChar, password);       
            request.query("SELECT * FROM Users WHERE UserName = @username AND UserPassword = @password",function(error, results){
                if(results.recordsets < 1){
                    console.log("failed");
                    response.send("Wrong username or password");
                }
                else{
                    console.log("found");
                    response.send(results);
                }
                sql.close();    
            });            
         }
    });
    }
    else{
        response.send('Please enter Username and Password!');
		response.end();

    }
});
const port = 4000;
app.listen(port);
console.log("listening on port " + port );