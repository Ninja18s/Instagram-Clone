const pool = require('../db');


const follow = {};


follow.newFollow = async (userId, userName) =>{
    const query = `INSERT INTO follow (follower, following)
                    VALUES(?,?)`;
    const params = [userId, userName];

    const result = await pool.makeQuery(query, params);
    
    return result;
}


follow.viewFollowers = async ( userName) =>{

    const query = ` SELECT * FROM follow WHERE `
}