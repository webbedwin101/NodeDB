const mysql = require('mysql'); 

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'test',
    database: 'nodedb'
}); 

connection.connect((err)=> {
    if (err) throw err; 
    connection.query('SELECT * FROM Fruits', (err, result, fields)=>{
        if (err) throw err; 
        console.log(result); 
    }); 
}); 