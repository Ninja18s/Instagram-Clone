const pool = require("../db");



const comment = {};


comment.newComments = async (postId, userName, comments) => {
    const query = `INSERT INTO comment (postId, userName, comments)
    VALUES(?,?,?); `;

    const params = [postId, userName, comments];

    const result = await pool.makeQuery(query, params);

    return result;

}


comment.viewComment = async(postId) => {
    const query = `SELECT * FROM comment WHERE postId = ?`;

    const params = [postId];

    const result = await pool.makeQuery(query, params);

    return result;
}

comment.deleteComment = async(userName, postId) => {
    const query = `DELETE FROM comment WHERE userName = ? AND postId = ?`;

    const params = [userName, postId];

    const result = await pool.makeQuery(query, params);

    return result;
}

comment.viewTotalComments = async(postId) => {
    
   
    const query = `SELECT COUNT(postId) FROM comment WHERE postId = ?`;

    const params = [postId];

    const result = await pool.makeQuery(query, params);
    
    return  result;
}




module.exports = comment;