const pool = require("../db");



const post = {};


post.createNewPost = async (postId, userId, userName, imageName, caption) => {
    const query = `INSERT INTO post (postId, userId, userName, imageName, caption)
    VALUES(?,?,?,?,?; `;

    const params = [postId, userId, userName, imageName, caption];

    const result = await pool.makeQuery(query, params);

    return result;

}


post.viewPostbyUsername = async(userName) => {
    const query = `SELECT * FROM post WHERE userName = ?`;

    const params = [userName];

    const result = await pool.makeQuery(query, params);

    return result;
}

post.viewPostbyUserid = async(userId) => {
    const query = `SELECT * FROM post WHERE userId = ?`;

    const params = [userId];

    const result = await pool.makeQuery(query, params);

    return result;
}

post.deletePost = async(postId) => {
    
   
    const query = `DELETE FROM post WHERE postId =? `;

    const params = [postId];

    const result = await pool.makeQuery(query, params);
    
    return  id;
}




module.exports = post;