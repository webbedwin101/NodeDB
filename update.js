const mysql = require('mysql'); 
//import mysql as a dependency 
const connection = mysql.createConnection({
    host: 'localhost', 
    user: 'root',
    password: 'test',
    database: 'nodedb'
}); 
//set env variables to establish connection
connection.connect((err)=>{//write the sql query for when //connected
    if (err) throw err; 
    //run the sql query //select one record
    connection.query('SELECT Fruit_name, Quantity FROM Fruits WHERE id = 1;', (err, result, fields)=>{
        if (err) throw err; 
        console.log(result); 
    });
    const sqlQuery = "UPDATE Fruits SET Fruit_name = 'bannana', Quantity = 20 WHERE id = 1";
    connection.query(sqlQuery, (err, result, fields)=> {
        if (err) throw err;
        console.log(result); 
    }); 
}); //run node <filename> to update table in db using node and sql. 