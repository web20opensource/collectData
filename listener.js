//http server
var http = require('https'),
    fileSystem = require('fs'),
    path = require('path'),
    filePath = path.join('/var/www/img/svg/', 'recordSaved.svg'),
    stat = fileSystem.statSync(filePath);



var options = {
  key: fileSystem.readFileSync('/path/to/private/key'),
  cert: fileSystem.readFileSync('/path/to/cert')
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
var POST;

/*
//mysqlConnection
var mysql = _mysql.createConnection({
    host: HOST,
    port: PORT,
    user: MYSQL_USER,
    password: MYSQL_PASS,
});

//console.log(mysql);
//return;
//use database
*/

var params;


// createServer + doQuery
http.createServer(options,function (request, response) {
    
    if (request.method == 'POST') {
        var body = '';
        request.on('data', function (data) {
            body += data;

            // Too much POST data, kill the connection!
            if (body.length > 1e6)
                request.connection.destroy();
        });
        request.on('end', function () {
            var post = qs.parse(body);
            console.log(post.toString());
            // use post['blah'], etc.



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
                
        	   console.log("Savind record from: " +  post["email"] );
                //create the query
                var theQuery = 'INSERT INTO ' + TABLE + ' VALUES (' 
                                + _mysql.escape(post["main"]) 
                                + ' , ' + _mysql.escape(post["typeT"])
                                + ' , ' + _mysql.escape(post["first"])
                                + ' , ' + _mysql.escape(post["second"])
                                + ' , ' + _mysql.escape(post["names"]) 
                                + ' , ' + _mysql.escape(post["sex"]) 
                                + ' , ' + _mysql.escape(post["grade"]) 
                                + ' , ' + _mysql.escape(post["disc"]) 
                                + ' , ' + _mysql.escape(post["subd"]) 
                                + ' , ' + _mysql.escape(post["esp"]) 
                                + ' , ' + _mysql.escape(post["sni"]) 
                                + ' , ' + _mysql.escape(post["rcea"]) 
                                + ' , ' + _mysql.escape(post["cvu"]) 
                                + ' , ' + _mysql.escape(post["iAcad"]) 
                                + ' , ' + _mysql.escape(post["dep"]) 
                                + ' , ' + _mysql.escape(post["dirDep"])
                                + ' , ' + _mysql.escape(post["ent"]) 
                                + ' , ' + _mysql.escape(post["tel"]) 
                                + ' , ' + _mysql.escape(post["telExt"]) 
                                + ' , ' + _mysql.escape(post["cel"]) 
                                + ' , ' + _mysql.escape(post["emailI"]) 
                                + ' , ' + _mysql.escape(post["emailP"]) 
                                + ", ' '  " + ')'
                                +';'
                console.log("ahi te va el cueri" + theQuery);
                connection.query('use ' + DATABASE);
                connection.query(theQuery,function(err, result, fields) {
                    if (err){ console.log("error");throw err;}
                    else{
                        body = result;
                        response.writeHead(200, {
                            'Content-Type': 'image/svg+xml',
                            'Content-Length': stat.size
                        });

                        var readStream = fileSystem.createReadStream(filePath);
                        // We replaced all the event handlers with a simple call to readStream.pipe()
                        readStream.pipe(response);
                        connection.release(); 
			            nResponses++;
                    }
                });
            });

        });
    }  
}).listen(1337, 'localhost');
