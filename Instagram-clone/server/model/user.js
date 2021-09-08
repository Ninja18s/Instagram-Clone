const pool = require("../db");



const user = {};


user.createNewUser = async(userId, name, userName, email, password, DOB) => {
    const query = `INSERT INTO user(userId, name, userName, email, password, DOB) 
    VALUES(?,?,?,?,?,?);`;

    const params = [userId, name, userName, email, password, DOB];

    const result = await pool.makeQuery(query, params);

    return result;
}

user.getUserByEmail = async( email) => {
    const query = `SELECT * FROM user WHERE email =?`;

    const params = [email];

    const result = await pool.makeQuery(query, params);
   
    return result[0];

}

user.getUserByUsername = async( userName) => {
    const query = `SELECT * FROM user WHERE userName =?`;

    const params = [userName];

    const result = await pool.makeQuery(query, params);
   
    return result[0];

}

user.deleteUser = async (userName , password) => {

    const query = `DELETE FROM user WHERE userName =? AND password =?`;

    const params = [userName, password];

    await pool.makeQuery( query, params);

    return 'success';
}





module.exports = user;