//pull in required dependencies
var mysql = require('mysql');

// create the MySql connection object
var connection;

if (process.env.JASWDB_URL)  {
    //DB is JawsDB on Heroku
    connection = mysql.createConnection(process.env.JAWSDB_URL);

} else {
        // DB is local on localhost
        connection = mysql.createConnection({
            port :3306,
            host:'localhost',
            user: 'root',
            password: 'root',
            database: 'burgers_db'


        })

};

// Make the connection to MySql

connection.connect(function(err){

    if (err){
    console.error ( 'ERROR: MySQL  connection error --' + err.stack + '\n\n');
    return;

}

console.log('conected to MYSQL database as id ' + connection.threadId + '\n\n');

});

// Export connection for ORM use

module.exports = connection;




