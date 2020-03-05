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

app.get('/register', function(request, response) {
	response.sendFile(path.join(__dirname + '/register.html'));
});

app.post('/register' ,function(request, response){
    const fullname = request.body.fullname;
    const password = request.body.password;
    const email = request.body.email;
    const phonenumber = request.body.phonenumber;
   
    if (password && fullname && phonenumber && email){
        sql.connect(dbConfig, function(err){
        if(err){
            console.log("Error while connecting database :- " + err);
            response.send(err);
            sql.close();
        }
        else {  
            console.log("connected");                     
            const request = new sql.Request();   
            request.input('fullname', sql.VarChar, fullname);
            request.input('password', sql.VarChar, password);       
            request.input('email', sql.VarChar, email);       
            request.input('phonenumber', sql.VarChar, phonenumber);       
            request.query("INSERT INTO Users (UserName, UserPassword) VALUES (@fullname, @password);",function(error, results){
                if(error){
                    console.log("not inserted into database");
                    response.send("not added to database");
                }
                else{
                    console.log("inserted to database");
                    response.send("successfully added to database");
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