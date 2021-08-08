const pool = require("../db");



const like = {};


like.hitNewLike = async (postId, userName) => {
    const query = `INSERT INTO like (postId, userName)
    VALUES(?,?); `;

    const params = [postId, userName];

    const result = await pool.makeQuery(query, params);

    return result;

}


like.removeLike = async(postId, userName) => {
    const query = `DELETE FROM like WHERE postId = ? AND userName = ?`;

    const params = [postId, userName];

    const result = await pool.makeQuery(query, params);

    return result;
}

like.viewAllLIkesOnPost = async( postId) => {
    const query = `SELECT * FROM like WHERE postId = ?`;

    const params = [ postId];

    const result = await pool.makeQuery(query, params);

    return result;
}

like.viewTotalLikeONPost = async(postId) => {
    
   
    const query = `SELECT COUNT(postId) FROM like WHERE postId = ?`;

    const params = [postId];

    const result = await pool.makeQuery(query, params);
    
    return  result;
}




module.exports = like;