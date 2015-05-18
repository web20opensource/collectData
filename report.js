//http server
var http = require('https'),
    fileSystem = require('fs'),
    path = require('path');

console.log('report');

var options = {
  key: fileSystem.readFileSync('path/to/private/key'),
  cert: fileSystem.readFileSync('path/to/private/cert')
};

//url.parse
var url = require('url');
//id to query from db
var id;
//response
var body;
//# of responses sucessfully attended
var nResponses=0;
//mysql + conf

var _mysql = require('mysql');

var DATABASE = 'dbName';
var TABLE = 'tableName';


var pool  = _mysql.createPool({
  host     : 'localhost',
  user     : 'user',
  password : 'password',
  database : 'dbName'
  ,debug : 'true'
});

var qs = require('querystring');

var params;


// createServer + doQuery
http.createServer(options,function (request, response) {
    
    response.setHeader("Access-Control-Allow-Origin", "*");
    response.setHeader("Access-Control-Allow-Headers", "X-Requested-With"); 
    if (request.method == 'GET') {
        console.log('get request')

        var body = '';
        request.on('data', function (data) {
            body += data;

            // Too much POST data, kill the connection!
            if (body.length > 1e6)
                request.connection.destroy();
        });

        request.on('end', function () {
            var get = qs.parse(body);
            console.log(get.toString());

            pool.getConnection(function(err, connection) {
                
                if (err)
                {
                    response.write('[{connectionError}]');
                    response.end();
                    console.log(err);
                    return;
                }
                
                if (!connection){
                    response.write('[{connectionError}]');
                    response.end();
                    console.log(connection.toString());
                    return;
                }
                
                //create the query
                var theQuery = 'SELECT * FROM formsni_data;'
                console.log("request DB : " + theQuery);
                connection.query('use ' + DATABASE);
                connection.query(theQuery,function(err, result, fields) {
                    if (err){ console.log("error");throw err;}
                    else{
                        response.writeHead(200, {'Content-Type': 'application/json; charset=utf-8'});
                        if (typeof result === "undefined"){
                            body = '[{}]';
                        }else{
                            body = JSON.stringify(result);
                        }
                        

                        response.write(body);   

                        response.end();
                        connection.release(); 
                    }
                });
            });

        });
    }  
}).listen(33333, 'localhost');
