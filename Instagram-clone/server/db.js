const mysql = require('mysql');

const pool  = mysql.createPool({
    connectionLimit: 10,
    host :'localhost',
    port: 3306,
    database: 'instagram',
    user: 'root',
    password: ''
});



pool.makeQuery = (query, params=[])=> {
    
    return new Promise((res, rej)=> {
        pool.query(query, params, (err, result)=>{
            if(err) rej(err);
            else res(result);
        })
    })
}

module.exports = pool;