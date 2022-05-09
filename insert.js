const mysql = require('mysql'); 

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'test',
    database: 'nodedb'
}); 

connection.connect((err) => {
    if (err) throw err;
    console.log('connected!'); 

    const sqlQuery = "INSERT INTO Fruits (id , Fruit_name, Quantity) VALUES (1, 'apple', 10)"; 

    connection.query(sqlQuery, (err,result)=> {
        console.log('1 record inserted'); 
        if (err) throw err; 
    }); 
}); 